"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppWidget() {
  const whatsappNumber = "9994983427"; 
  const message = "Hola, quiero información.";

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
    >
      <Image 
        src="/images/whatsapp.png"
        width={55}
        height={55}
        alt="WhatsApp"
      />
    </Link>
  );
}
