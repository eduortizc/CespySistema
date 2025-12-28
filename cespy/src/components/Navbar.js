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

  const whatsappMessage = "Hola, vengo desde el sitio web y quiero cotizar";

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container-fluid px-4">
          {/* LOGO */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <Image
              src="/images/cespy.webp"
              alt="Logo CESPY"
              width={55}
              height={55}
              priority
            />
            <span className="fs-3 fw-bold">CESPY</span>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-3 fs-5">
              <li className="nav-item">
                <a href="#inicio" className="nav-link">
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a href="#nosotros" className="nav-link">
                  Nosotros
                </a>
              </li>

              <li className="nav-item">
                <a href="#contactos" className="nav-link">
                  Contactos
                </a>
              </li>

              {/* WHATSAPP VERDE REAL */}
              <li className="nav-item">
                <a
                  href={`https://wa.me/529994983427?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link whatsapp-btn"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* STYLES */}
      <style jsx>{`
        .navbar-transparent {
          background: transparent !important;
          transition: all 0.35s ease;
        }

        .navbar-scrolled {
          background: #0f0f0f !important;
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.7);
          transition: all 0.35s ease;
        }

        /* 🔥 WHATSAPP REAL */
        .whatsapp-btn {
          background-color: #25d366 !important;
          color: #ffffff !important;
          padding: 10px 22px !important;
          border-radius: 999px !important;
          font-weight: 600;
          line-height: normal;
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .whatsapp-btn:hover {
          background-color: #1ebe5d !important;
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}
