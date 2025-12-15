"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container-fluid px-3">
          {/* Marca */}
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center gap-2"
          >
            <Image
              src="/images/cespy.webp"
              alt="Logo CESPY"
              width={55}
              height={55}
              style={{ objectFit: "contain" }}
            />
            <span className="fs-3 fw-bold">CESPY</span>
          </Link>

          {/* Botón hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3 fs-5">
              <li>
                <a
                  href="#inicio"
                  className="btn btn-outline-light btn-lg btn-hover-gold"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#nosotros"
                  className="btn btn-outline-light btn-lg btn-hover-gold"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#contactos"
                  className="btn btn-outline-light btn-lg btn-hover-gold"
                >
                  Contactos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ESTILOS SOLO PARA EL EFECTO */}
      <style jsx>{`
        .navbar-transparent {
          background: transparent !important;
          transition: all 0.35s ease;
        }

        .navbar-scrolled {
          background: rgba(40, 40, 40, 0.95) !important;
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.7);
          transition: all 0.35s ease;
        }
      `}</style>
    </>
  );
}
