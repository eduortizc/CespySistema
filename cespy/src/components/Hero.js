"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ============================
          HERO
      ============================ */}
      <section className="position-relative vh-100 d-flex align-items-center text-white overflow-hidden">
        {/* Fondo con efecto parallax */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/images/2 (1).png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            filter: "brightness(0.45)",
            transform: `translateY(${offsetY * 0.2}px)`,
            transition: "transform 0.1s linear",
          }}
        ></div>

        <div className="container">
          <div className="col-lg-8">
            <h5 className="text-warning mb-3 animate-fade-in-up">
              Seguridad Privada en Yucatán
            </h5>

            <h1 className="display-3 fw-bold mb-4 animate-fade-in-up">
              Protegemos lo que <br />
              <TypewriterText text="más valoras" />
            </h1>

            <p className="lead mb-5 w-75 d-none d-md-block animate-fade-in-up">
              Más de 12 años brindando servicios de seguridad física,
              electrónica y custodia con personal altamente capacitado.
            </p>

            <div className="d-flex gap-3 animate-fade-in-up">
              <Link href="/contacto" className="btn btn-warning btn-lg fw-bold">
                Cotizar Ahora
              </Link>

              {/* Botón hacia sección Nosotros */}
              <a href="#nosotros" className="btn btn-outline-light btn-lg">
                Nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECCIÓN NOSOTROS
      ============================ */}
      <section
        id="nosotros"
        className="py-5 bg-dark text-white position-relative"
      >
        <div className="decor-line top-line"></div>
        <div className="decor-line bottom-line"></div>

        <div className="container text-center">
          <h2 className="text-warning fw-bold mb-4">Sobre Nosotros</h2>

          <p className="lead mb-5">
            En <strong>CESPY</strong> ofrecemos servicios de seguridad privada,
            vigilancia y custodia con profesionalismo y experiencia.
          </p>

          {/* Contacto básico */}
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="p-4 rounded info-card">
                <h3 className="text-warning">📞 Teléfono</h3>
                <p className="fs-5">999 980 4155</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded info-card">
                <h3 className="text-warning">📍 Ubicación</h3>
                <p className="fs-5">
                  Calle 65 #873 x 108 y 110
                  <br />
                  Almendros 3, Ciudad Caucel
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-5">
            <iframe
              className="rounded shadow-lg"
              width="100%"
              height="350"
              style={{ border: "2px solid yellow", borderRadius: "20px" }}
              loading="lazy"
              src="https://www.google.com/maps?q=Calle+65+873+Ciudad+Caucel&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ============================
          SECCIÓN CONTACTOS
      ============================ */}
      <section
        id="contactos"
        className="py-5 bg-black text-white position-relative"
      >
        <div className="decor-line top-line"></div>
        <div className="decor-line bottom-line"></div>

        <div className="container text-center">
          <h2 className="text-warning fw-bold mb-4">Nuestros Contactos</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="p-4 contact-card">
                <h3 className="text-warning">📞 Teléfono 1</h3>
                <p className="fs-5">+52 999 498 3427</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 contact-card">
                <h3 className="text-warning">📞 Teléfono 2</h3>
                <p className="fs-5">999 980 4155</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 contact-card">
                <h3 className="text-warning">📞 Teléfono 3</h3>
                <p className="fs-5">+52 999 438 8714</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 contact-card">
                <h3 className="text-warning">✉️ Correo</h3>
                <p className="fs-5">cespycorporativo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          ESTILOS GLOBALES
      ============================ */}
      <style jsx>{`
        /* Tarjetas Nosotros */
        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid yellow;
          transition: 0.3s;
        }
        .info-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px gold;
        }

        /* Tarjetas Contactos */
        .contact-card {
          background: rgba(20, 20, 20, 0.7);
          border: 2px solid yellow;
          border-radius: 25px;
          transition: 0.3s ease;
        }
        .contact-card:hover {
          transform: scale(1.05);
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.9),
            rgba(255, 215, 0, 0.25)
          );
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.7);
        }

        /* Líneas amarillas decorativas */
        .decor-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, yellow, transparent);
          opacity: 0.8;
        }
        .top-line {
          top: 0;
        }
        .bottom-line {
          bottom: 0;
        }
      `}</style>
    </>
  );
}
