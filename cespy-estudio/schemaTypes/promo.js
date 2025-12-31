export default {
  name: 'promo',
  title: 'Avisos y Promociones',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      description: 'Ponle un nombre para identificarlo (ej: Promo Enero)',
    },
    {
      name: 'image',
      title: 'Imagen del Flyer',
      type: 'image',
      options: {
        hotspot: true, // Esto permite recortar la imagen si hace falta
      },
    },
  ],
}