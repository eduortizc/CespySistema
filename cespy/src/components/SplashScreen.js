"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Al cargar la página, mostramos el loader y luego lo desvanecemos
    const timer = setTimeout(() => {
      setFade(true); // Inicia la animación
      setTimeout(() => {
        setLoading(false); // Se quita del DOM una vez terminada la animación
      }, 500); // 500ms es lo que dura el fade-out
    }, 1500); // Se mostrará por lo menos 1.5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
        opacity: fade ? 0 : 1,
        visibility: fade ? "hidden" : "visible",
      }}
    >
      <div style={{ position: "relative", marginBottom: "2rem" }}>
        <Image
          src="/images/cespy.webp"
          alt="Cargando CESPY..."
          width={150}
          height={150}
          priority
          style={{ 
            objectFit: "contain",
            animation: "pulseLogo 2s infinite ease-in-out"
          }}
        />
      </div>
      
      <div className="spinner-border text-warning" role="status" style={{ width: "2rem", height: "2rem" }}>
        <span className="visually-hidden">Cargando...</span>
      </div>
      
      <p className="text-warning mt-3 fw-bold tracking-wider" style={{ letterSpacing: "2px" }}>
        CARGANDO...
      </p>

      <style jsx global>{`
        @keyframes pulseLogo {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
