// eventsLanding.js
"use client"; // Indica que este es un componente de cliente

import { useEffect, useState, Suspense } from "react";
import { fetchEvents } from "./api"; // Ya no necesitamos importar deleteEvent
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Import Font Awesome icons
import LoadingSpinner from "@/shared/presentation/loading"
import Image from 'next/image';


export default function EventsSection() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Cargar eventos al montar el componente
    fetchEvents()
      .then(setEvents)
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Columna de Eventos */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Próximos Eventos</h2>
          <p className="text-gray-600 text-sm mb-4">
            Como parte de nuestro compromiso institucional y con el egresado. Presentamos los siguientes eventos disponibles:
          </p>
        <Suspense fallback={<LoadingSpinner/>}> 

          <ul className="space-y-2">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-orange-500">🕒</span>
                  <span>{event.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>{event.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </Suspense>
        </div>

        {/* Columna con el título de la Universidad y Redes Sociales */}
        <div className="flex flex-col justify-center items-start md:items-center">
       
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
            Universidad Nacional
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FE6A00]">
            Federico Villarreal
          </h1>
        


          <p className="text-gray-400 mt-2 text-sm md:text-base text-left md:text-center">
            Social network
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-red-600">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
