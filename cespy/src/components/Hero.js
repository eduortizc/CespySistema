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
            filter: "brightness(0.50)",
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
                        <h5 className="text-warning mb-3 animate-fade-in-up">
              Cobertura en <strong>todo el sureste mexicano</strong>.
            </h5>


             <h5 className="text-warning mb-3 animate-fade-in-up">
              Cobertura en <strong>todo el sureste mexicano</strong>.
            </h5>

            <div className="d-flex gap-3 animate-fade-in-up">
              <a
                href="#servicios"
                className="btn btn-warning btn-lg fw-bold"
              >
                Más información
              </a>

              <a href="#nosotros" className="btn btn-outline-light btn-lg">
                Nosotros
              </a>
              
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
}
