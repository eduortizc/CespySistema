// src/components/Hero.js
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="position-relative vh-100 d-flex align-items-center text-white">
      
      {/* 1. IMAGEN DE FONDO (Con overlay oscuro para que se lea el texto) */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=2828&auto=format&fit=crop')", // Foto de seguridad genérica moderna
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'brightness(0.4)' // Esto oscurece la foto para que el texto blanco brille
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Texto Principal */}
            <h5 className="text-warning text-uppercase letter-spacing-2 mb-3">
              Seguridad Privada en Yucatán
            </h5>
            <h1 className="display-3 fw-bold mb-4">
              Protegemos lo que <br/>
              <span className="text-warning">más valoras</span>
            </h1>
            <p className="lead mb-5 w-75 d-none d-md-block">
              Más de 12 años brindando servicios de seguridad física, electrónica y custodia con personal altamente capacitado y certificado por REPSE.
            </p>
            
            {/* Botones de Acción */}
            <div className="d-flex gap-3">
              <Link href="/contacto" className="btn btn-warning btn-lg px-4 fw-bold text-dark">
                Cotizar Ahora
              </Link>
              <Link href="/nosotros" className="btn btn-outline-light btn-lg px-4">
                Conocer Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}