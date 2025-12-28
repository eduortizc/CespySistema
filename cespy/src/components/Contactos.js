"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contactos() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /* ============================
     WHATSAPP
  ============================ */
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const nombre = form.nombre.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const mensaje = form.mensaje.value;

    const texto = `
Hola, quiero cotizar un servicio.

Nombre: ${nombre}
Correo: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje}
    `;

    const url = `https://wa.me/529994983427?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");

    form.reset();
  };

  /* ============================
     EMAIL (EMAILJS)
  ============================ */
  const handleEmailSubmit = async () => {
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_oq6j5le",
        "template_cuu639e",
        formRef.current,
        "Csj_Egdi2lmLdWHym"
      );

      alert("El correo fue enviado correctamente.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contactos"
      className="py-5 text-white"
      style={{ background: "linear-gradient(135deg, #111, #1c1c1c)" }}
    >
      <div className="container">
        <h2 className="text-warning fw-bold text-center mb-3">
          Contáctanos
        </h2>

        <p className="text-center text-white-50 mb-5">
          Completa el formulario y nos pondremos en contacto contigo.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form
              ref={formRef}
              onSubmit={handleWhatsAppSubmit}
              className="contact-form p-4 p-md-5 rounded-4 bg-dark border border-warning shadow-lg"
            >
              <div className="row g-4">
                {/* NOMBRE */}
                <div className="col-md-6">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* TELÉFONO */}
                <div className="col-md-6">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    className="form-control"
                    placeholder="999 000 0000"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="col-12">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                {/* MENSAJE */}
                <div className="col-12">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    name="mensaje"
                    rows="4"
                    className="form-control"
                    placeholder="Describe brevemente el servicio que necesitas"
                    required
                  />
                </div>
              </div>

              {/* BOTONES */}
              <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                <button
                  type="submit"
                  className="btn btn-success btn-lg w-100"
                >
                  Enviar por WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="btn btn-warning btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar por Email"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ============================
          ESTILOS
      ============================ */}
      <style jsx>{`
        .contact-form {
          border: 1px solid rgba(255, 193, 7, 0.35);
        }

        .form-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .form-control {
          background-color: #111;
          border: 1px solid rgba(255, 193, 7, 0.35);
          color: #fff;
          padding: 0.75rem 0.9rem;
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .form-control:focus {
          background-color: #111;
          border-color: #ffc107;
          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
          color: #fff;
        }
      `}</style>
    </section>
  );
}
