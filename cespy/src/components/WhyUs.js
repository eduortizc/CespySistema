// src/components/WhyUs.js
export default function WhyUs() {
  return (
    <section className="py-5 text-white position-relative overflow-hidden" style={{ backgroundColor: '#0F1012' }}>
      
      {/* Efecto de fondo de luz azul neón */}
      <div className="position-absolute top-50 start-50 translate-middle" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(13,202,240,0.15) 0%, rgba(13,202,240,0) 70%)', zIndex: 0 }}></div>

      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          
          {/* COLUMNA DE TEXTO */}
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
            <h6 className="text-info text-uppercase letter-spacing-2 mb-4">
              Siempre con los mejores servicios
            </h6>
            
            {/* Título principal con efecto NEÓN AZUL */}
            <h2 className="display-4 fw-bold mb-4" style={{ textShadow: '0 0 15px rgba(13,202,240,0.6)' }}>
              <span className="text-white">Calidad,</span> <br />
              <span className="text-info">responsabilidad</span> <br />
              <span className="text-white">y servicio.</span>
            </h2>
            
            <p className="lead text-white-50 mb-4">
              En CESPY, nuestra misión va más allá de la vigilancia. Nos comprometemos a brindar tranquilidad a través de soluciones de seguridad privada integrales, respaldadas por años de experiencia y un equipo altamente capacitado.
            </p>

            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
              <div className="d-flex align-items-center">
                 <span className="fs-2 me-3 text-info">🛡️</span>
                 <div>
                   <h5 className="fw-bold mb-0">Compromiso Total</h5>
                   <small className="text-white-50">Protección 24/7 garantizada.</small>
                 </div>
              </div>
              <div className="d-flex align-items-center">
                 <span className="fs-2 me-3 text-info">🤝</span>
                 <div>
                   <h5 className="fw-bold mb-0">Confianza Mutua</h5>
                   <small className="text-white-50">Relaciones duraderas con clientes.</small>
                 </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DE IMAGEN (LOGO) */}
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <div className="position-relative d-inline-block">
               {/* Círculo de brillo azul detrás del escudo */}
               <div className="position-absolute top-50 start-50 translate-middle rounded-circle" style={{ width: '350px', height: '350px', background: 'rgba(13,202,240,0.2)', filter: 'blur(50px)' }}></div>
               
               {/* Escudo (Aquí iría tu imagen real, uso un placeholder por ahora) */}
               <img src="/escudo-placeholder.png" alt="Escudo CESPY" className="img-fluid position-relative" style={{ maxHeight: '400px', filter: 'drop-shadow(0 0 20px rgba(13,202,240,0.4))' }} />
               
               {/* NOTA: Reemplaza "/escudo-placeholder.png" por la ruta real de tu imagen del escudo cuando la tengas en la carpeta 'public' */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}