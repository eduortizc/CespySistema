"use client";

import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-5 text-white"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="container py-5">
        
        {/* =========================================
            PARTE 1: SEGURIDAD PRIVADA
           ========================================= */}
        <div className="mb-5 text-center mx-auto" style={{ maxWidth: "900px" }}>
          <h3 className="text-warning text-uppercase letter-spacing-2 mb-3">
            Nuestros Planes
          </h3>
          <h2 className="display-4 fw-bold mb-4">Seguridad Privada</h2>
          <p className="fs-5 text-white-50">
            Cobertura en <strong>Mérida, Cancún y Campeche</strong>. 
            Contamos con protocolos robustos y, además, <strong>nos adaptamos a los requerimientos específicos</strong> de tu entorno.
          </p>
        </div>

        <div className="row g-4 mb-5 pb-5 border-bottom border-secondary">
          
          {/* PLAN 1: VIGILANCIA */}
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 bg-black border-0 rounded-4 overflow-hidden hover-card">
              {/* IMAGEN */}
              <div className="position-relative" style={{ height: "200px" }}>
                <img 
                  src="images/vigilancia.png" 
                  alt="Vigilancia"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              
              <div className="card-body p-4 d-flex flex-column">
                <h3 className="text-white fw-bold mb-3">Vigilancia</h3>
                <p className="text-white-50 mb-4 flex-grow-1">
                  Control de accesos y rondines perimetrales constantes. Reportes detallados y supervisión continua.
                </p>
                {/* Botón a Contactos */}
                <Link 
                  href="#contactos" 
                  className="btn btn-outline-warning w-100 rounded-pill fw-bold"
                >
                  Cotizar Ahora
                </Link>
              </div>
            </div>
          </div>

          {/* PLAN 2: RESIDENCIAL */}
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 bg-black border-0 rounded-4 overflow-hidden hover-card">
              <div className="position-relative" style={{ height: "200px" }}>
                <img 
                  src="images/residencial.png" 
                  alt="Residencial"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              <div className="card-body p-4 d-flex flex-column">
                <h3 className="text-white fw-bold mb-3">Residencial</h3>
                <p className="text-white-50 mb-4 flex-grow-1">
                  Monitoreo de casetas, control de visitas y orientación a residentes. Seguridad tranquila para tu hogar.
                </p>
                <Link 
                  href="#contactos" 
                  className="btn btn-outline-warning w-100 rounded-pill fw-bold"
                >
                  Cotizar Ahora
                </Link>
              </div>
            </div>
          </div>

          {/* PLAN 3: ESCOLTA VIP */}
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 bg-black border-0 rounded-4 overflow-hidden hover-card">
              <div className="position-relative" style={{ height: "200px" }}>
                <img 
                  src="images/escolta.png" 
                  alt="Escolta"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              <div className="card-body p-4 d-flex flex-column">
                <h3 className="text-white fw-bold mb-3">Escolta Personal</h3>
                <p className="text-white-50 mb-4 flex-grow-1">
                  Protección personal física altamente capacitada. Resguardamos tu integridad y privacidad al máximo nivel.
                </p>
                <Link 
                  href="#contactos" 
                  className="btn btn-outline-warning w-100 rounded-pill fw-bold"
                >
                  Cotizar Ahora
                </Link>
              </div>
            </div>
          </div>

          {/* PLAN 4: OFICINAS */}
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 bg-black border-0 rounded-4 overflow-hidden hover-card">
              <div className="position-relative" style={{ height: "200px" }}>
                <img 
                  src="images/oficinas.png" 
                  alt="Oficinas"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              <div className="card-body p-4 d-flex flex-column">
                <h3 className="text-white fw-bold mb-3">Oficinas</h3>
                <p className="text-white-50 mb-4 flex-grow-1">
                  Protección de bienes muebles e inmuebles corporativos. Prevención de ilícitos y logística de seguridad.
                </p>
                <Link 
                  href="#contactos" 
                  className="btn btn-outline-warning w-100 rounded-pill fw-bold"
                >
                  Cotizar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            PARTE 2: SERVICIO DE LIMPIEZA (AZUL)
           ========================================= */}
        <div className="row align-items-center g-5">
          
          <div className="col-lg-6">
            <span className="badge bg-info text-dark mb-3 px-3 py-2 fs-6 text-uppercase">
              Soluciones Integrales
            </span>
            <h2 className="display-4 fw-bold text-white mb-4">
              También contamos con <br/>
              <span className="text-info">Servicio de Limpieza</span>
            </h2>
            
            <p className="fs-5 text-white-50 mb-4 lh-base">
              En CESPY sabemos que la seguridad y el orden van de la mano. Ofrecemos un 
              <strong> servicio profesional de limpieza</strong> adaptado totalmente a tus necesidades.
            </p>
            <p className="fs-5 text-white-50 mb-4 lh-base">
              Personal de confianza para tu hogar, oficina o comercio. Tú eliges el plan: 
              <span className="text-white"> por horas, por días o tiempo completo.</span>
            </p>
            
            <ul className="list-unstyled fs-5 text-white-50 mb-5">
              <li className="mb-2"><span className="text-info me-2">✔</span> Personal confiable y capacitado</li>
              <li className="mb-2"><span className="text-info me-2">✔</span> Ahorro de tiempo y gestión</li>
              <li className="mb-2"><span className="text-info me-2">✔</span> Atención a cualquier establecimiento</li>
            </ul>

            {/* Botón con el texto que pediste */}
            <Link 
              href="#contactos" 
              className="btn btn-info text-dark rounded-pill px-5 py-3 fs-5 fw-bold hover-lift"
            >
              Mándanos mensaje
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="position-relative rounded-5 overflow-hidden shadow-lg border border-secondary" style={{ minHeight: "500px" }}>
               <img 
                  src="images/limpieza.png" 
                  alt="Servicio de Limpieza"
                  className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                />
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .object-fit-cover {
          object-fit: cover;
        }
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(255, 193, 7, 0.1);
        }
        .hover-lift {
          transition: transform 0.2s;
        }
        .hover-lift:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}