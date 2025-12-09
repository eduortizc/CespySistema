// src/components/Stats.js

export default function Stats() {
  return (
    // Fondo con un degradado sutil oscuro para separarlo visualmente
    <section className="py-5 bg-dark text-white border-top border-bottom border-warning border-opacity-25" style={{background: 'linear-gradient(to bottom, #212529, #1a1e21)'}}>
      <div className="container">
        <div className="row text-center g-4">
          
          {/* Estadística 1 */}
          <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up">
              <h2 className="display-4 fw-bold text-warning mb-0">12+</h2>
              <p className="lead text-white-50 mb-0">Años de <br/>Experiencia</p>
            </div>
          </div>

          {/* Estadística 2 */}
          <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h2 className="display-4 fw-bold text-warning mb-0">250+</h2>
              <p className="lead text-white-50 mb-0">Clientes <br/>Satisfechos</p>
            </div>
          </div>

           {/* Estadística 3 */}
           <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="display-4 fw-bold text-warning mb-0">100%</h2>
              <p className="lead text-white-50 mb-0">Personal <br/>Certificado</p>
            </div>
          </div>

           {/* Estadística 4 */}
           <div className="col-md-3 col-6">
            <div className="p-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <h2 className="display-4 fw-bold text-warning mb-0">REPSE</h2>
              <p className="lead text-white-50 mb-0">Avalado por <br/>STPS</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}