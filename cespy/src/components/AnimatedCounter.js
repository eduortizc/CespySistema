// src/components/AnimatedCounter.js

"use client";

import React, { useState, useEffect, useRef } from 'react';

// El componente AnimatedCounter recibe el valor final (que puede incluir un + o %), 
// la duración, el prefijo/sufijo y las clases de estilo
const AnimatedCounter = ({ endValue, duration = 2000, prefix = '', suffix = '', className = '' }) => {
  // `count` puede ser un número (durante el conteo) o null (al finalizar)
  const [count, setCount] = useState(0); 
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  // Extraemos el número final para el cálculo, ignorando todo lo demás
  // Usamos una expresión regular más segura para solo obtener dígitos
  const finalNumber = parseInt(endValue.replace(/[^\d]/g, ''), 10) || 0; 
  
  // ===================================
  // 1. OBSERVADOR DE INTERSECCIÓN (Sin cambios)
  // ===================================
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
  // 2. LÓGICA DEL CONTEO (Corregida)
  // ===================================
  const startCounting = () => {
    const start = 0;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const currentValue = Math.floor(start + finalNumber * Math.sin(percentage * (Math.PI / 2)));
      
      setCount(currentValue);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue); 
      }
    };

    requestAnimationFrame(step);
  };

  const displayedValue = count; 

  return (
    <h2 ref={counterRef} className={className}>
      {/* Si el count es una cadena (el valor final), lo mostramos directamente.
         Si es un número (durante el conteo), aún usamos prefix/suffix. */}
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