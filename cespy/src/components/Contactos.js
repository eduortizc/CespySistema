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
    
    // Al ser un evento submit, la validación HTML5 required funciona sola aquí
    const nombre = form.nombre.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const mensaje = form.mensaje.value;

    const texto = `Hola, quiero cotizar un servicio.\n\nNombre: ${nombre}\nCorreo: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`;
    const url = `https://wa.me/529994983427?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    form.reset();
  };

  /* ============================
     EMAIL
  ============================ */
  const handleEmailSubmit = async () => {
    const form = formRef.current;

    // VALIDACIÓN MANUAL: Verifica los campos 'required'
    if (!form.checkValidity()) {
      form.reportValidity(); // Muestra las burbujas de error nativas del navegador
      return; // Detiene el envío
    }

    setLoading(true);
    try {
      // Recuerda configurar 'cespycorporativo@gmail.com' en el dashboard de EmailJS (Template: template_cuu639e)
      await emailjs.sendForm("service_oq6j5le", "template_cuu639e", form, "Csj_Egdi2lmLdWHym");
      alert("El correo fue enviado correctamente.");
      form.reset();
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
      style={{ 
        background: "linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%)" 
      }}
    >
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h5 className="text-warning text-uppercase letter-spacing-2 mb-2">
            ¿Tienes dudas?
          </h5>
          <h2 className="display-4 fw-bold mb-3">
            Contáctanos
          </h2>
          <p className="fs-5 text-white-50">
            Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form
              ref={formRef}
              onSubmit={handleWhatsAppSubmit}
              className="contact-form p-4 p-md-5 rounded-4 shadow-lg"
            >
              <div className="row g-4">
                {/* NOMBRE */}
                <div className="col-md-6">
                  <label className="form-label fw-bold text-warning small text-uppercase">Nombre</label>
                  <input type="text" name="nombre" className="form-control" placeholder="Tu nombre completo" required />
                </div>

                {/* TELÉFONO */}
                <div className="col-md-6">
                  <label className="form-label fw-bold text-warning small text-uppercase">Teléfono</label>
                  <input type="tel" name="telefono" className="form-control" placeholder="999 000 0000" required />
                </div>

                {/* EMAIL */}
                <div className="col-12">
                  <label className="form-label fw-bold text-warning small text-uppercase">Correo electrónico</label>
                  <input type="email" name="email" className="form-control" placeholder="correo@ejemplo.com" required />
                </div>

                {/* MENSAJE */}
                <div className="col-12">
                  <label className="form-label fw-bold text-warning small text-uppercase">Mensaje</label>
                  <textarea name="mensaje" rows="4" className="form-control" placeholder="Describe el servicio que necesitas..." required />
                </div>
              </div>

              {/* BOTONES */}
              <div className="d-flex flex-column flex-md-row gap-3 mt-5">
                <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill fw-bold hover-lift">
                  <span className="me-2">📲</span> Enviar por WhatsApp
                </button>

                {/* Este botón ejecuta handleEmailSubmit que ahora valida antes de enviar */}
                <button type="button" onClick={handleEmailSubmit} className="btn btn-outline-warning btn-lg w-100 rounded-pill fw-bold hover-lift" disabled={loading}>
                  {loading ? "Enviando..." : "✉️ Enviar por Correo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          background-color: #424242;
          border: none;
        }
        .form-control {
          background-color: #303030;
          border: 1px solid #555;
          color: #fff;
          padding: 1rem;
          border-radius: 12px;
        }
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .form-control:focus {
          background-color: #303030;
          border-color: #ffc107;
          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
          color: #fff;
        }
        .hover-lift {
          transition: transform 0.2s;
        }
        .hover-lift:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}