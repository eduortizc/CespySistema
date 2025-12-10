// src/components/Stats.js
import AnimatedCounter from './AnimatedCounter'; // ¡Importa el nuevo componente!

export default function Stats() {
  return (
    // Fondo con un degradado sutil oscuro para separarlo visualmente
    <section className="py-5 bg-dark text-white border-top border-bottom border-warning border-opacity-25" style={{background: 'linear-gradient(to bottom, #212529, #1a1e21)'}}>
      <div className="container">
        <div className="row text-center g-4">
          
          {/* Estadística 1: Años de Experiencia (Animada) */}
          <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up">
              {/* Usa AnimatedCounter con el valor final '12' y el sufijo '+' */}
              <AnimatedCounter 
                endValue="12" 
                suffix="+"
                duration={2000} // Duración en milisegundos (2 segundos)
                className="display-4 fw-bold text-warning mb-0"
              />
              <p className="lead text-white-50 mb-0">Años de <br/>Experiencia</p>
            </div>
          </div>

          {/* Estadística 2: Clientes Satisfechos (Animada) */}
          <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {/* Usa AnimatedCounter con el valor final '250' y el sufijo '+' */}
              <AnimatedCounter 
                endValue="250" 
                suffix="+"
                duration={2500} // Un poco más lenta
                className="display-4 fw-bold text-warning mb-0"
              />
              <p className="lead text-white-50 mb-0">Clientes <br/>Satisfechos</p>
            </div>
          </div>

          {/* Estadística 3: Personal Certificado (Animada) */}
          <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
               {/* Usa AnimatedCounter con el valor final '100' y el sufijo '%' */}
              <AnimatedCounter 
                endValue="100" 
                suffix="%"
                duration={1500} // Más rápida
                className="display-4 fw-bold text-warning mb-0"
              />
              <p className="lead text-white-50 mb-0">Personal <br/>Certificado</p>
            </div>
          </div>

          {/* Estadística 4: REPSE (Sin animación de contador) */}
          <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              {/* Se deja como h2 normal ya que no es un número a contar */}
              <h2 className="display-4 fw-bold text-warning mb-0">REPSE</h2>
              <p className="lead text-white-50 mb-0">Avalado por <br/>STPS</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}