// components/AboutUs.jsx
"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section
      id="nosotros"
      className="py-5 text-white"
      // CAMBIO 1: Degradado elegante de Negro (#000) a Gris Oscuro (#1a1a1a)
      // Esto prepara visualmente la página para la siguiente sección.
      style={{ 
        background: "linear-gradient(to bottom, #000000 0%, #1a1a1a 100%)" 
      }}
    >
      <div className="container py-4">
        
        {/* 1. ENCABEZADO */}
        <div className="mb-5 text-center mx-auto" style={{ maxWidth: "900px" }}>
          <h5 className="text-warning text-uppercase letter-spacing-2 mb-3">
            ¿Quiénes Somos?
          </h5>
          <h2 className="display-4 fw-bold mb-4">Conócenos</h2>
          <p className="fs-4 fw-light text-white-50">
            En <strong className="text-white">CESPY</strong> brindamos servicios de seguridad privada, 
            vigilancia y custodia con <strong>profesionalismo, disciplina y confianza</strong>. 
            Nos adaptamos a tus necesidades específicas para garantizar tu tranquilidad.
          </p>
        </div>

        {/* 2. ESTADÍSTICAS */}
        <div className="row text-center mb-5 border-top border-bottom border-secondary py-5">
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <span className="display-4 fw-bold text-warning">12+</span>
            <p className="fs-5 text-white mt-2">Años de Experiencia</p>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <span className="display-4 fw-bold text-warning">250+</span>
            <p className="fs-5 text-white mt-2">Clientes Satisfechos</p>
          </div>
          <div className="col-6 col-md-3">
            <span className="display-4 fw-bold text-warning">100%</span>
            <p className="fs-5 text-white mt-2">Personal Certificado</p>
          </div>
          <div className="col-6 col-md-3">
            <span className="display-4 fw-bold text-warning">REPSE</span>
            <p className="fs-5 text-white mt-2">Avalado por STPS</p>
          </div>
        </div>

        {/* 3. INFORMACIÓN DETALLADA */}
        {/* CAMBIO 2: Usamos 'align-items-start' para que los títulos estén a la misma altura siempre */}
        <div className="row g-5 mb-5 align-items-start">
          
          {/* Columna Izquierda: Estrategia */}
          <div className="col-md-6">
            <h3 className="text-white mb-4 fs-2 border-start border-warning border-4 ps-3">
              Tu Seguridad, Nuestra Estrategia
            </h3>
            <p className="fs-5 text-white-50 mb-4 lh-lg">
              A través de nuestro servicio tendrás la garantía de un <strong className="text-white">diseño especial de estrategia</strong> para tu seguridad. 
            </p>
            <p className="fs-5 text-white-50 lh-lg">
              No improvisamos. <strong>Gestionamos toda la documentación necesaria</strong> para brindarle a nuestros clientes la seguridad correspondiente. Además, buscamos que nuestros elementos estén capacitados en todos los aspectos operativos y legales.
            </p>
          </div>

          {/* Columna Derecha: Sectores */}
          <div className="col-md-6">
            <h3 className="text-white mb-4 fs-2 border-start border-warning border-4 ps-3">
              Sectores que Abarcamos
            </h3>
            <p className="fs-5 text-white-50 mb-4">
              Entendemos que cada entorno requiere un protocolo distinto. Por eso, abarcamos diferentes áreas especializadas como:
            </p>
            
            <ul className="list-unstyled fs-5 text-white-50 lh-lg ps-2">
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-3">✓</span> 
                <span>Sector <strong className="text-white">Educativo</strong> (Escuelas y Universidades)</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-3">✓</span> 
                <span>Sector <strong className="text-white">Industrial</strong> (Fábricas y Bodegas)</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-3">✓</span> 
                <span>Sector <strong className="text-white">Residencial</strong> (Condominios y Privadas)</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="text-warning me-3">✓</span> 
                <span>Sector <strong className="text-white">Comercial</strong> (Plazas y Negocios)</span>
              </li>
              <li className="mt-4 pt-3 border-top border-secondary fst-italic">
                ...entre otros servicios personalizados según el giro de tu empresa.
              </li>
            </ul>
          </div>
        </div>

        {/* 4. CONTACTO Y UBICACIÓN */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="d-flex align-items-center bg-dark p-4 rounded-4 h-100 border border-secondary shadow">
              <div className="fs-1 me-4">📞</div>
              <div>
                <p className="text-warning text-uppercase mb-1 small">Contáctanos</p>
                <p className="fs-3 fw-bold mb-0 text-white">999 980 4155</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center bg-dark p-4 rounded-4 h-100 border border-secondary shadow">
              <div className="fs-1 me-4">📍</div>
              <div>
                <p className="text-warning text-uppercase mb-1 small">Visítanos</p>
                <p className="fs-5 mb-0 text-white">
                  Calle 65 #873 x 108 y 110, Almendros 3, <br/> Ciudad Caucel
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. MAPA */}
        <div className="rounded-4 overflow-hidden shadow-lg border border-secondary">
          <iframe
            title="Ubicación CESPY"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.com/maps?q=Calle+65+873+Almendros+3+Ciudad+Caucel+Merida&t=&z=16&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>

      </div>
    </section>
  );
}