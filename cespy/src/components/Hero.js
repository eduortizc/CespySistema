"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Contactos from "@/components/Contactos";

/* ============================
   TYPEWRITER TEXT
============================ */
const TypewriterText = ({ text }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-warning">{displayed}</span>;
};

/* ============================
   HERO + CONTACTOS
============================ */
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
        {/* Fondo */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/images/cespyfondo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            filter: "brightness(0.45)",
            transform: `translateY(${offsetY * 0.2}px)`,
            transition: "transform 0.1s linear",
          }}
        />

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
              Más de 12 años brindando servicios de seguridad privada con
              personal altamente capacitado.
            </p>

            <div className="d-flex gap-3 animate-fade-in-up">
              <Link
                href="https://wa.me/529994983427?text=Hola%20quiero%20cotizar"
                target="_blank"
                className="btn btn-warning btn-lg fw-bold"
              >
                Cotizar Ahora
              </Link>

              <a href="#nosotros" className="btn btn-outline-light btn-lg">
                Nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          NOSOTROS
      ============================ */}
      <section
        id="nosotros"
        className="py-5 text-white"
        style={{ background: "#0f0f0f" }}
      >
        <div className="container text-center">
          <h2 className="text-warning fw-bold mb-4">Conócenos</h2>

          <p className="lead mb-5 text-white-50">
            En <strong>CESPY</strong> brindamos servicios de seguridad privada,
            vigilancia y custodia con profesionalismo, disciplina y confianza.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="p-4 rounded-4 border border-warning bg-dark shadow-lg hover-card">
                <h4 className="text-warning mb-2">📞 Teléfono</h4>
                <p className="fs-5 mb-0">999 980 4155</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border border-warning bg-dark shadow-lg hover-card">
                <h4 className="text-warning mb-2">📍 Ubicación</h4>
                <p className="fs-6 mb-0">
                  Calle 65 #873 x 108 y 110 <br />
                  Almendros 3, Ciudad Caucel
                </p>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-5">
            <iframe
              className="rounded-4 shadow-lg"
              width="100%"
              height="350"
              loading="lazy"
              style={{ border: "2px solid #ffc107" }}
              src="https://www.google.com/maps?q=Calle+65+873+Ciudad+Caucel&output=embed"
            />
          </div>
        </div>
      </section>

      {/* ============================
          CONTACTOS
      ============================ */}
      <Contactos />
    </>
  );
}
