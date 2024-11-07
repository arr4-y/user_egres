// src/shared/navigation/Footer.js
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 shadow-lg flex justify-center items-center" style={{ backgroundColor: '#222222' }}>
      <div className="flex flex-row md:flex-col justify-center gap-4 items-center m-4">
        {/* Logo y Nombre de la Universidad */}
        <div className="flex flex-col items-center mt-8 mb-12">
          <Image
            src="/img/unfv_logo2.png" // Cambia esta ruta a la correcta del logo
            alt="Universidad Nacional Federico Villarreal"
            width={200}
            height={80}
            className="object-contain "
          />
           
        </div>

        {/* Información de Contacto */}
        <div className="text-center md:text-left text-sm  ">
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start space-x-2 text-white ">
              <FaMapMarkerAlt className="text-[#FE6A00]" />
              <span>DIRECCIÓN: Jr. Carlos Gonzáles 285 Urb. Maranga - San Miguel</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 text-white">
              <FaPhoneAlt className="text-[#FE6A00]" />
              <span>CENTRAL TELEFÓNICA: (+51) 748 0888</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2 text-white">
              <FaEnvelope className="text-[#FE6A00]" />
              <span>CORREO INSTITUCIONAL: occii@unfv.edu.pe</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
