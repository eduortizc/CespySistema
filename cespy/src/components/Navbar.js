// src/components/Navbar.js
"use client" // <--- Obligatorio porque el menú colapsable usa interactividad

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top py-3">
      <div className="container">
        {/* LOGO: Por ahora texto, luego ponemos la imagen del escudo */}
        <Link className="navbar-brand fs-3 fw-bold text-uppercase tracking-wider " href="/">
          CESPY
        </Link>

        {/* Botón Hamburguesa para Móvil */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces del Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center fs-5 gap-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contacto">Contactos</Link>
            </li>
            
            {/* Agregamos un botón de Login para el futuro Dashboard */}
            <li className="nav-item ms-lg-3">
              <Link className="btn btn-outline-warning btn-sm fs-5 gap-3" href="/login">
                Acceso Personal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
    