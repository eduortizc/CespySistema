// src/components/Services.js
"use client"

import { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('fisica');

  return (
    // CAMBIO 1: Fondo oscuro para toda la sección y texto blanco
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="text-center mb-5">
          {/* CAMBIO 2: Título con el color de acento */}
          <h2 className="fw-bold text-warning">Nuestros Servicios</h2>
          <p className="text-white-50">Soluciones integrales adaptadas a tus necesidades</p>
        </div>

        {/* PESTAÑAS OSCURAS */}
        {/* CAMBIO 3: Fondo de las pestañas gris oscuro (bg-secondary bg-opacity-25) */}
        <ul className="nav nav-pills nav-fill mb-4 justify-content-center gap-2 p-1 bg-secondary bg-opacity-25 rounded-pill" style={{maxWidth: '800px', margin: '0 auto'}}>
          <li className="nav-item">
            <button 
              // CAMBIO 4: Pestaña activa es AMARILLA (bg-warning text-dark), inactivas son blancas
              className={`nav-link rounded-pill fw-bold ${activeTab === 'fisica' ? 'active bg-warning text-dark shadow' : 'text-white hover-warning'}`}
              onClick={() => setActiveTab('fisica')}
            >
              👮 Seguridad Física
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link rounded-pill fw-bold ${activeTab === 'electronica' ? 'active bg-warning text-dark shadow' : 'text-white hover-warning'}`}
              onClick={() => setActiveTab('electronica')}
            >
              📹 Seguridad Electrónica
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link rounded-pill fw-bold ${activeTab === 'limpieza' ? 'active bg-warning text-dark shadow' : 'text-white hover-warning'}`}
              onClick={() => setActiveTab('limpieza')}
            >
              🧹 Limpieza
            </button>
          </li>
        </ul>

        {/* CONTENIDO (Tarjeta Oscura) */}
        {/* CAMBIO 5: Tarjeta con fondo gris oscuro y borde dorado sutil */}
        <div className="card border-warning border-opacity-25 bg-secondary bg-opacity-10 shadow-lg p-4 text-white">
          <div className="row align-items-center">
            
            {/* Contenido Seguridad FÍSICA */}
            {activeTab === 'fisica' && (
              <>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="text-warning mb-3">Guardias Intramuros y Escoltas</h3>
                  <p className="lead fs-6">Personal altamente capacitado para proteger residencias, comercios e industrias.</p>
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2">🛡️ Control de accesos riguroso</li>
                    <li className="mb-2">📝 Bitácoras digitales</li>
                    <li className="mb-2">🚛 Custodia de mercancía en tránsito</li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <div className="bg-dark rounded-3 overflow-hidden shadow" style={{height: '300px', backgroundImage: "url('https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2940&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    {/* Foto de guardia (Unsplash por ahora) */}
                  </div>
                </div>
              </>
            )}

            {/* Contenido Seguridad ELECTRÓNICA */}
            {activeTab === 'electronica' && (
              <>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="text-warning mb-3">Tecnología de Vigilancia</h3>
                  <p className="lead fs-6">Sistemas avanzados para monitorear tu patrimonio 24/7 desde tu celular.</p>
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2">📹 CCTV de alta definición IP</li>
                    <li className="mb-2">⚡ Cercos eléctricos certificados</li>
                    <li className="mb-2">🚨 Alarmas con respuesta inmediata</li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <div className="bg-dark rounded-3 overflow-hidden shadow" style={{height: '300px', backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605df97?q=80&w=2940&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                     {/* Foto de cámara */}
                  </div>
                </div>
              </>
            )}

             {/* Contenido LIMPIEZA */}
             {activeTab === 'limpieza' && (
              <>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="text-warning mb-3">Limpieza Profesional</h3>
                  <p className="lead fs-6">Mantenimiento integral y sanitización para oficinas y corporativos.</p>
                  <ul className="list-unstyled fs-5">
                    <li className="mb-2">🧼 Personal de planta confiable</li>
                    <li className="mb-2">🧴 Insumos de alta calidad incluidos</li>
                    <li className="mb-2">✨ Pulido de pisos y desinfección</li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                   <div className="bg-dark rounded-3 overflow-hidden shadow" style={{height: '300px', backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2940&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                     {/* Foto de limpieza */}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}