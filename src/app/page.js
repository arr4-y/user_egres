// page.js

import EventsSection from "@/features/evento/eventsLanding"; // Componente de eventos
import DocumentList from "@/features/documentosNormativos/documentsLanding"; // Componente de documentos normativos

export default function LandingPage() {
  return (
    <div className="space-y-12 p-4 md:p-8 lg:p-12">
      {/* Sección Hero */}
      <section className="flex flex-wrap gap-4 justify-center">
        <img
          src="/img/image1.jpg"
          alt="Imagen 1"
          className="rounded-lg shadow-lg w-full h-auto sm:w-72"
        />
        <img
          src="/img/image2.jpg"
          alt="Imagen 2"
          className="rounded-lg shadow-lg w-full h-auto sm:w-72"
        />
        <img
          src="/img/image3.png"
          alt="Imagen 3"
          className="rounded-lg shadow-lg w-full h-auto sm:w-72"
        />
      </section>

      {/* Próximos Eventos */}
      <section>
        <EventsSection />
      </section>

      {/* Documentos Normativos */}
      <section>
        <DocumentList />
         

      </section>
      


      {/* Enlaces de Interés */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Enlaces de interés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 shadow rounded-lg">
            <p className="flex-grow text-center sm:text-left">
              Repositorio Institucional
            </p>
            <a href="#" className="text-orange-600 mt-2 sm:mt-0">
              Link
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 shadow rounded-lg">
            <p className="flex-grow text-center sm:text-left">
              Biblioteca Virtual
            </p>
            <a href="#" className="text-orange-600 mt-2 sm:mt-0">
              Link
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center bg-white p-4 shadow rounded-lg">
            <p className="flex-grow text-center sm:text-left">
              Normas Académicas
            </p>
            <a href="#" className="text-orange-600 mt-2 sm:mt-0">
              Link
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
