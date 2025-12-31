"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

// --- IMPORTACIONES DE SWIPER ---
// Importamos los componentes principales de React
import { Swiper, SwiperSlide } from "swiper/react";
// Importamos los módulos que necesitamos (Autoplay, Flechas, Puntitos)
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// Importamos los estilos CSS de Swiper (obligatorio)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"; // Opcional: efecto 3D
// -------------------------------

export default function Promotions() {
  const [promos, setPromos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const query = '*[_type == "promo"]{title, image}';
        const data = await client.fetch(query);
        setPromos(data);
      } catch (err) {
        console.error("Error fetching promos:", err);
        setError(err.message);
      }
    };

    fetchPromos();
  }, []);

  if (error) return <div className="p-5 text-white bg-danger">Error: {error}</div>;
  if (promos.length === 0) return null; // O un loading spinner

  return (
    <section className="py-5 bg-black position-relative overflow-hidden">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-5">
          <h5 className="text-warning text-uppercase letter-spacing-2">
            Novedades
          </h5>
          <h2 className="display-5 fw-bold text-white">
            Avisos y Promociones
          </h2>
          <p className="text-white-50">
            Mantente al día con nuestros servicios especiales
          </p>
        </div>

        {/* --- CARRUSEL SWIPER --- */}
        <div className="py-4"> {/* Un poco de padding vertical para las sombras */}
          <Swiper
          slideToClickedSlide={true} 
            // Módulos a usar
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}

            // Configuración clave para lo que pides:
            slidesPerView={"auto"} // Deja que Swiper calcule cuántos caben
            centeredSlides={true} // La imagen activa va al centro
            spaceBetween={30} // Espacio entre las tarjetas (en px)
            loop={true} // Carrusel infinito

            // Configuración del Autoplay
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Agrega esto para que no se mueva si el usuario pone el mouse encima
            }}
            speed={800} //

            // Flechas y puntitos
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}

            // Efecto 3D opcional (para que las de los lados se vean más chicas)
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0, // Sin rotación
              stretch: 0,
              depth: 150, // Profundidad (hace que las laterales se vean "atrás")
              modifier: 1,
              slideShadows: false, // Quitar sombras automáticas de Swiper
            }}

            // Responsivo: En celulares que se vea solo 1, en tablets/PC que se vean 3
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20, effect: "slide" }, // Móvil: 1 slide, efecto normal
              768: { slidesPerView: 3, spaceBetween: 30 } // Tablet en adelante: 3 slides
            }}

            className="mySwiper"
            style={{
              "--swiper-pagination-color": "#ffc107", // Color amarillo de Bootstrap para los puntos
              "--swiper-navigation-color": "#ffc107", // Color amarillo para las flechas
              paddingBottom: "40px" // Espacio para la paginación
            }}
          >
            {promos.map((promo, index) => {
              if (!promo.image) return null;
              return (
                <SwiperSlide key={index} style={{ maxWidth: "400px" }}>
                  {/* Tarjeta de la imagen */}
                  <div
                    className="position-relative rounded-4 shadow-lg overflow-hidden border border-warning h-100"
                    style={{ aspectRatio: "4/5" }}
                  >
                    <Image
                    priority={true}
                      src={urlFor(promo.image)?.url()}
                      alt={promo.title || "Promoción CESPY"}
                      fill
                      style={{ objectFit: "cover" }}
                      className="d-block w-100"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}