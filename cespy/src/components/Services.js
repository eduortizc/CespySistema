// src/components/Services.js
"use client"

import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <section className="py-5 bg-dark text-white position-relative overflow-hidden">
      
      <div className="container position-relative z-2">
        <div className="text-center mb-5">
          <h5 className="text-cespy text-uppercase letter-spacing-2">Nuestras Soluciones</h5>
          <h2 className="display-4 fw-bold">Especialistas en Seguridad</h2>
          <p className="text-white-50">Selecciona una categoría para ver el catálogo completo</p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* TARJETA 1: SEGURIDAD FÍSICA (Amarillo Cespy) */}
          <div className="col-md-5">
            <div className="card h-100 bg-secondary bg-opacity-10 border-cespy border-opacity-25 shadow-lg hover-scale transition-all">
              <div className="card-body text-center p-5">
                <div className="bg-cespy rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">👮</span>
                </div>
                <h3 className="fw-bold mb-3 text-white">Seguridad Física</h3>
                <p className="text-white-50 mb-4">
                  Protección presencial con elementos altamente capacitados para residencias, corporativos y custodia de valores.
                </p>
                <button 
                  className="btn btn-outline-cespy btn-lg px-4 rounded-pill fw-bold"
                  data-bs-toggle="modal" 
                  data-bs-target="#modalFisica"
                >
                  Ver más información ➝
                </button>
              </div>
            </div>
          </div>

          {/* TARJETA 2: SEGURIDAD ELECTRÓNICA (Nuevo Azul Neón) */}
          <div className="col-md-5">
            {/* CAMBIO: border-cespy-blue */}
            <div className="card h-100 bg-secondary bg-opacity-10 border-cespy-blue border-opacity-25 shadow-lg hover-scale transition-all">
              <div className="card-body text-center p-5">
                {/* CAMBIO: bg-cespy-blue */}
                <div className="bg-cespy-blue rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">📹</span>
                </div>
                <h3 className="fw-bold mb-3 text-white">Seguridad Electrónica</h3>
                <p className="text-white-50 mb-4">
                  Tecnología de punta para el monitoreo, control y respuesta inmediata ante incidentes.
                </p>
                {/* CAMBIO: btn-outline-cespy-blue */}
                <button 
                  className="btn btn-outline-cespy-blue btn-lg px-4 rounded-pill fw-bold"
                  data-bs-toggle="modal" 
                  data-bs-target="#modalElectronica"
                >
                  Ver más información ➝
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODALES ================= */}
      
      {/* MODAL FÍSICA */}
      <div className="modal fade" id="modalFisica" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark border-cespy">
            <div className="modal-header border-secondary">
              <h5 className="modal-title text-cespy fw-bold">🛡️ Catálogo de Seguridad Física</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
              <div className="row g-4 text-center">
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🏛️</div>
                    <h6 className="fw-bold text-white">Intramuros</h6>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🕶️</div>
                    <h6 className="fw-bold text-white">Guardaespaldas</h6>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🚚</div>
                    <h6 className="fw-bold text-white">Custodias</h6>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🚙</div>
                    <h6 className="fw-bold text-white">Vehículos Blindados</h6>
                  </div>
                </div>

                <hr className="border-secondary my-4" />
                <h6 className="text-start text-cespy mb-3">SERVICIOS DE VALOR AGREGADO:</h6>
                
                <div className="col-6 col-md-3">
                  <div className="p-2 border border-secondary rounded text-white-50">
                    <small>🚪 Apertura y cierre de negocios</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-2 border border-secondary rounded text-white-50">
                    <small>🚔 Patrullaje</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-2 border border-secondary rounded text-white-50">
                    <small>📚 Capacitación PROCE</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-2 border border-secondary rounded text-white-50">
                    <small>📝 Control de Confianza</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <a href="/contacto" className="btn btn-cespy">Cotizar servicio</a>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL ELECTRÓNICA (Actualizado con el Nuevo Azul) */}
      <div className="modal fade" id="modalElectronica" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          {/* CAMBIO: border-cespy-blue */}
          <div className="modal-content bg-dark border-cespy-blue">
            <div className="modal-header border-secondary">
              {/* CAMBIO: text-cespy-blue */}
              <h5 className="modal-title text-cespy-blue fw-bold">📡 Catálogo de Seguridad Electrónica</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
              <div className="row g-4 text-center">
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🛰️</div>
                    <h6 className="fw-bold text-white">Rastreo Satelital</h6>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🔐</div>
                    <h6 className="fw-bold text-white">Control de Acceso</h6>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">📷</div>
                    <h6 className="fw-bold text-white">CCTV</h6>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="p-3 bg-secondary bg-opacity-25 rounded h-100">
                    <div className="fs-2 mb-2">🔊</div>
                    <h6 className="fw-bold text-white">Alarmas</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              {/* CAMBIO: btn-outline-cespy-blue */}
              <a href="/contacto" className="btn btn-outline-cespy-blue">Cotizar tecnología</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}