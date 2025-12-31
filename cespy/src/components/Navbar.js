"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activamos el efecto cristal cuando bajas más de 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = "Hola, vengo desde el sitio web y quiero cotizar";

  // Cierra el menú en móvil al hacer clic
  const handleNavClick = () => {
    if (typeof window !== "undefined") {
      const navbar = document.getElementById("navbarNav");
      if (navbar && navbar.classList.contains("show")) {
        // Bootstrap 5 maneja esto via JS, pero forzamos el cierre quitando la clase
        navbar.classList.remove("show");
      }
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">
          {/* LOGO */}
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <Image
              src="/images/cespy.webp"
              alt="Logo CESPY"
              width={55}
              height={55}
              priority
              style={{ objectFit: "contain" }}
            />
            <span className="fs-3 fw-bold letter-spacing-1">CESPY</span>
          </Link>

          {/* TOGGLER (HAMBURGUESA) */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3 fs-5 align-items-center text-center mt-3 mt-lg-0">
              <li className="nav-item">
                <Link
                  href="/#inicio"
                  className="nav-link btn-hover-effect"
                  onClick={handleNavClick}
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/#nosotros"
                  className="nav-link btn-hover-effect"
                  onClick={handleNavClick}
                >
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/#servicios"
                  className="nav-link btn-hover-effect"
                  onClick={handleNavClick}
                >
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/#contactos"
                  className="nav-link btn-hover-effect"
                  onClick={handleNavClick}
                >
                  Contáctanos
                </Link>
              </li>

              {/* WHATSAPP */}
              <li className="nav-item mt-2 mt-lg-0">
                <a
                  href={`https://wa.me/529994983427?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-pill px-4 fw-bold d-flex align-items-center justify-content-center gap-2 whatsapp-glow"
                >
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ESTILOS */}
      <style jsx>{`
        /* 1. BARRA TRANSPARENTE (Al inicio/Hero) */
        .navbar-transparent {
          background: transparent !important;
          padding-top: 20px;
          padding-bottom: 20px;
          transition: all 0.4s ease;
        }

        /* 2. BARRA "CAMALEÓN" (Al bajar) */
        .navbar-scrolled {
          /* TRUCO: Usamos negro al 75% de opacidad. 
             Esto permite que se vea el color de fondo (gris, degradado, etc.) 
             a través de la barra. */
          background-color: rgba(0, 0, 0, 0.75) !important;
          
          /* EFECTO CRISTAL: Desenfoca lo que pasa por detrás */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px); /* Para Safari */

          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          padding-top: 10px;
          padding-bottom: 10px;
          transition: all 0.4s ease;
        }

        /* Estilo para los links normales */
        .nav-link {
          color: rgba(255,255,255,0.85) !important;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #ffc107 !important; /* Amarillo al pasar el mouse */
        }

        /* Botón de WhatsApp con brillo */
        .whatsapp-glow {
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .whatsapp-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.6);
          background-color: #1ebe5d !important;
        }

        /* Ajuste para móvil: Fondo sólido en el menú desplegable para leer bien */
        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: rgba(0,0,0,0.95);
            padding: 20px;
            border-radius: 15px;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
}