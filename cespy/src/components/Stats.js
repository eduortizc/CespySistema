// src/components/Stats.js
export default function Stats() {
  return (
    <section className="py-5 bg-dark text-white border-top border-secondary border-opacity-10">
      <div className="container">
        <div className="row text-center g-4">
          
          {/* 12+ Años */}
          <div className="col-6 col-md-3">
            <h2 className="display-4 fw-bold text-cespy mb-0">12+</h2>
            <p className="text-white-50 mt-2 mb-0" style={{lineHeight: '1.2'}}>
              Años de <br/> Experiencia
            </p>
          </div>

          {/* 250+ Clientes */}
          <div className="col-6 col-md-3">
            <h2 className="display-4 fw-bold text-cespy mb-0">250+</h2>
            <p className="text-white-50 mt-2 mb-0" style={{lineHeight: '1.2'}}>
              Clientes <br/> Satisfechos
            </p>
          </div>

          {/* 100% Personal */}
          <div className="col-6 col-md-3">
            <h2 className="display-4 fw-bold text-cespy mb-0">100%</h2>
            <p className="text-white-50 mt-2 mb-0" style={{lineHeight: '1.2'}}>
              Personal <br/> Certificado
            </p>
          </div>

          {/* REPSE */}
          <div className="col-6 col-md-3">
            <h2 className="display-4 fw-bold text-cespy mb-0">REPSE</h2>
            <p className="text-white-50 mt-2 mb-0" style={{lineHeight: '1.2'}}>
              Avalado por <br/> STPS
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}