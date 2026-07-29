import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'CESPY | Seguridad Privada en Mérida y Yucatán',
    template: '%s | CESPY Seguridad'
  },
  description: 'Empresa líder de seguridad privada en Mérida. Ofrecemos guardias intramuros, escoltas, vigilancia residencial y corporativa con personal altamente capacitado.',
  keywords: [
    // Marca
    'CESPY',
    'CESPY Seguridad Privada',
    
    // Servicios principales
    'seguridad privada',
    'guardias de seguridad',
    'vigilancia',
    'escoltas',
    'protección patrimonial',
    'custodia de bienes',
    'seguridad intramuros',
    'seguridad extramuros',
    
    // Ubicaciones
    'seguridad privada en Merida',
    'seguridad privada en Yucatan',
    'vigilancia en Merida',
    'empresas de seguridad en Yucatan',
    
    // Sectores
    'seguridad residencial',
    'seguridad para empresas',
    'seguridad industrial',
    'seguridad para eventos',
    'vigilancia para fraccionamientos',
    
    // Términos de búsqueda
    'agencias de seguridad privada',
    'contratación de guardias',
    'servicios de vigilancia 24 horas',
    'prevención de robos',
    'control de accesos'
  ],
};

import SplashScreen from "@/components/SplashScreen";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SplashScreen />
        <Navbar />
        {children}
        <WhatsAppButton />
        <BootstrapClient />
      </body>
    </html>
  );
}