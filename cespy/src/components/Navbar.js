// src/components/Navbar.js

"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'; 

export default function Navbar() {
  
  // Estado para controlar si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);

  const logoWidth = 100; 
  const logoHeight = 100;

  // Lógica para detectar el scroll
  const handleScroll = () => {
    // Si la posición vertical es mayor a 100px, activa el estado 'scrolled'
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Se ejecuta una vez al montar el componente para añadir el listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Función de limpieza para remover el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Clases CSS dinámicas
  // Definimos las clases base y luego agregamos clases de scroll
  const navbarClasses = `navbar navbar-expand-lg navbar-dark shadow-sm sticky-top 
                         ${scrolled ? 'bg-dark-scrolled py-2' : 'bg-dark py-3'}`;


  return (
    // Aplicamos las clases dinámicas
    <nav className={navbarClasses}>
      <div className="container">
        
        {/* LOGO Y TEXTO DE MARCA AGRUPADOS */}
        <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
          
          <Image
            src="/images/cespy.webp" 
            alt="Logo CESPY"
            width={logoWidth}   
            height={logoHeight} 
            priority           
            // Estilo que asegura la nitidez y el tamaño definido por width/height
            style={{ width: `${logoWidth}px`, height: `${logoHeight}px`, objectFit: 'contain' }}
            className="d-inline-block"
          />

          <span className="fs-3 fw-bold text-uppercase tracking-wider">
            CESPY
          </span>
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
            
            {/* Botón de Acceso Personal */}
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