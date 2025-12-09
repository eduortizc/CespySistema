
"use client" 

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Importamos el JS de bootstrap solo cuando el componente se monta en el cliente
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}