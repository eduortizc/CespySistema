"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
  <div className="container-fluid px-3">

    {/* Marca */}
    <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
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
<ul className="navbar-nav ms-auto gap-3 fs-5">

  <li>
    <Link className="nav-link nav-circle px-3" href="/">
      Inicio
    </Link>
  </li>

  <li>
    <a href="#nosotros" className="btn btn-outline-light btn-lg btn-hover-gold">
  Nosotros
</a>
  </li>

  <li>
    <a href="#contactos" className="btn btn-outline-light btn-lg btn-hover-gold">
  Contactos</a>
  </li>

</ul>
      </div>
    </nav>
  );
}
