// src/components/Hero.js

"use client"; 

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// ===========================================
// Sub-Componente para el Efecto de Escritura
// ===========================================
// Este componente simula la revelación letra por letra
const TypewriterText = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!text) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span 
      className="text-warning d-inline-block"
      style={{ minWidth: `${text.length}ch`, overflow: "visible" }}
    >
      {displayedText}
    </span>
  );
};
// ===========================================
// Componente Principal Hero
// ===========================================
export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Efecto Parallax: Ajusta la posición Y de la imagen de fondo al hacer scroll
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="position-relative vh-100 d-flex align-items-center text-white overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO (Con Parallax y Zoom) */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-zoom-animation" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=2828&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'brightness(0.4)',
          // Parallax aplicado: Mueve el fondo lentamente hacia arriba al scrollear
          transform: `translate3d(0, ${offsetY * 0.4}px, 0)`, 
        }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            
            {/* Elemento 1: Título Pequeño (Retraso 0.2s) */}
            <h5 
              className="text-warning text-uppercase letter-spacing-2 mb-3 animate-fade-in-up" 
              style={{ animationDelay: '0.2s' }} 
            >
              Seguridad Privada en Yucatán
            </h5>
            
            {/* Elemento 2: Título Principal (Retraso 0.4s) */}
            <h1 
              className="display-3 fw-bold mb-4 animate-fade-in-up" 
              style={{ animationDelay: '0.4s' }} 
            >
              Protegemos lo que <br/>
              {/* Usamos el nuevo componente Typewriter */}
              <TypewriterText text="más valoras" delay={1000} />
            </h1>
            
            {/* Elemento 3: Párrafo (Retraso 0.6s) */}
            <p 
              className="lead mb-5 w-75 d-none d-md-block animate-fade-in-up" 
              style={{ animationDelay: '0.6s' }} 
            >
              Más de 12 años brindando servicios de seguridad física, electrónica y custodia con personal altamente capacitado y certificado por REPSE.
            </p>
            
            {/* Elemento 4: Botones (Retraso 0.8s) */}
            <div 
              className="d-flex gap-3 animate-fade-in-up" 
              style={{ animationDelay: '0.8s' }} 
            >
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