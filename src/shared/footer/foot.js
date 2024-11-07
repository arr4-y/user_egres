// src/shared/navigation/Footer.js
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 shadow-lg" style={{ backgroundColor: '#222222' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
        {/* Logo y Nombre de la Universidad */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 space-y-2">
          <Image
            src="/img/unfv_logo.png" // Cambia esta ruta a la correcta del logo
            alt="Universidad Nacional Federico Villarreal"
            width={200}
            height={80}
            className="object-contain"
          />
          <h1 className="text-lg font-bold text-white text-center md:text-left" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
            Universidad Nacional <br /> Federico Villarreal
          </h1>
        </div>

        {/* Información de Contacto */}
        <div className="text-center md:text-left text-sm space-y-3">
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-[#FE6A00]" />
              <span>DIRECCIÓN: Jr. Carlos Gonzáles 285 Urb. Maranga - San Miguel</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhoneAlt className="text-[#FE6A00]" />
              <span>CENTRAL TELEFÓNICA: (+51) 748 0888</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-[#FE6A00]" />
              <span>CORREO INSTITUCIONAL: occii@unfv.edu.pe</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
