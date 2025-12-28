import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  // Clase para el estilo de las estadísticas, para mantener el CSS consistente
  const statClass = "display-4 fw-bold text-cespy mb-0";
  const pClass = "text-white-50 mt-2 mb-0";
  const pStyle = { lineHeight: "1.2" };

  return (
    <section className="py-5 bg-dark text-white border-top border-secondary border-opacity-10">
      <div className="container">
        <div className="row text-center g-4">
          {/* 1. AÑOS DE EXPERIENCIA (Con Animación) */}
          <div className="col-6 col-md-3">
            {/* USANDO ANIMATED COUNTER */}
            <AnimatedCounter
              endValue="12+" // El valor final, incluyendo el signo '+'
              duration={1500} // Duración de la animación en milisegundos
              className={statClass} // Aplica el estilo H2 (display-4, fw-bold, etc.)
            />
            <p className={pClass} style={pStyle}>
              Años de <br /> Experiencia
            </p>
          </div>

          {/* 2. CLIENTES SATISFECHOS (Con Animación) */}
          <div className="col-6 col-md-3">
            {/* USANDO ANIMATED COUNTER */}
            <AnimatedCounter
              endValue="250+"
              duration={2000}
              className={statClass}
            />
            <p className={pClass} style={pStyle}>
              Clientes <br /> Satisfechos
            </p>
          </div>

          {/* 3. PORCENTAJE CERTIFICADO (Con Animación) */}
          <div className="col-md-3 col-6">
            <div
              className="p-3 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* USANDO ANIMATED COUNTER */}
              <AnimatedCounter
                endValue="100%"
                duration={1800}
                className="display-4 fw-bold text-warning mb-0" // Estilo H2
              />
              <p className="lead text-white-50 mb-0">
                Personal <br />
                Certificado
              </p>
            </div>
          </div>

          {/* 4. REPSE (Texto Estático) */}
          <div className="col-md-3 col-6">
            <div
              className="p-3 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h2 className="display-4 fw-bold text-warning mb-0">REPSE</h2>
              <p className="lead text-white-50 mb-0">
                Avalado por <br />
                STPS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
