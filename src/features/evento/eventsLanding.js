// eventsLanding.js
"use client"; // Indica que este es un componente de cliente

import { useEffect, useState } from "react";
import { fetchEvents } from "./api"; // Ya no necesitamos importar deleteEvent

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
        </div>
        {/* Columna con el título de la Universidad */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 text-center">
            Universidad Nacional <br /> Federico Villarreal
          </h1>
          <p className="text-gray-400 mt-2 text-center">Social Network</p>
        </div>
      </div>
    </section>
  );
}
