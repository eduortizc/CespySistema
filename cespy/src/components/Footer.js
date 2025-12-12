// src/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-5 pb-3 border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-5 justify-content-between">

          {/* COLUMNA 1: LOGO REAL */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <Image 
                src="/images/cespy.webp" 
                alt="Logo CESPY"
                width={55}
                height={55}
                className="me-2"
              />
              <h4 className="fw-bold mb-0 text-white">C.E.S.P.Y</h4>
            </div>

            <p className="text-white-50 small">
              Corporativo Especializado en Seguridad Privada Yucatán. <br/>
              Calidad, responsabilidad y servicio garantizado.
            </p>
          </div>

          {/* COLUMNA 2: PÁGINAS */}
          <div className="col-lg-3">
            <h5 className="text-cespy mb-4">Páginas</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><Link href="/" className="text-decoration-none text-white-50 hover-white">Inicio</Link></li>
              <li>
  <Link className="nav-link nav-circle px-3" href="/#nosotros">
    Nosotros
  </Link>
</li>

               <Link className="nav-link nav-circle px-3" href="/#contactos">
    Contactos
  </Link>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTOS */}
          <div className="col-lg-4">
            <h5 className="text-cespy mb-4">Nuestros Contactos</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3 d-flex align-items-center">
                <span className="me-2">📞</span> 
                <a href="tel:+529994983427" className="text-white-50 text-decoration-none">+52 999 498 3427</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <span className="me-2">📞</span> 
                <a href="tel:9999804155" className="text-white-50 text-decoration-none">999 980 4155</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <span className="me-2">📞</span> 
                <a href="tel:+529994388714" className="text-white-50 text-decoration-none">+52 999 438 8714</a>
              </li>
              <li className="mt-4 d-flex align-items-center">
                <span className="me-2">✉️</span> 
                <a href="mailto:cespycorporativo@gmail.com" className="text-white-50 text-decoration-none">cespycorporativo@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary border-opacity-25 my-4" />

        <div className="text-center text-white-50 small">
          <p className="mb-0">Copyright © CESPY 2025. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
