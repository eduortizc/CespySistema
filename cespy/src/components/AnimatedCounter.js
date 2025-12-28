// src/components/AnimatedCounter.js

"use client";

import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, duration = 2000, prefix = '', suffix = '', className = '' }) => {

  const [count, setCount] = useState(0); 
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);


  const finalNumber = parseInt(endValue.replace(/[^\d]/g, ''), 10) || 0; 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isCounting) {
            setIsCounting(true);
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isCounting]);

  // ===================================
  // 2. LÓGICA DEL CONTEO (Animación suave usando requestAnimationFrame y Math.sin)
  // ===================================
  const startCounting = () => {
    const start = 0;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // 💡 FUNCIÓN CLAVE: Math.sin crea una curva de aceleración suave (ease-out)
      // El contador empieza lento y acelera hasta llegar al valor final.
      const currentValue = Math.floor(start + finalNumber * Math.sin(percentage * (Math.PI / 2)));
      
      setCount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        // Al finalizar, asignamos la cadena completa original (ej. "12 años")
        setCount(endValue); 
      }
    };

    requestAnimationFrame(step);
  };

  // ===================================
  // 3. RENDERIZADO
  // ===================================
  const displayedValue = count; 

  return (
    <h2 ref={counterRef} className={className}>
      {/* Si displayedValue es una cadena (el valor final), lo mostramos directamente.
          Si es un número (durante el conteo), usamos prefix/suffix. */}
      {typeof displayedValue === 'string' ? displayedValue : (
        <>
          {prefix}
          {displayedValue}
          {suffix}
        </>
      )}
    </h2>
  );
};

export default AnimatedCounter;