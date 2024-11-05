"use client";

import EventsSection from "@/features/evento/eventsLanding";
import DocumentList from "@/features/documentosNormativos/documentsLanding";
import Image from 'next/image';
import { useState } from 'react';

export default function LandingPage() {
  const images = [
    "/img/hero.png",
    "/img/image1.jpg",
    "/img/image2.jpg",
    "/img/image3.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section as a Full-Width Carousel */}
      <section className="w-full overflow-hidden relative">
        <div className="flex w-full h-[450px]">
          {images.map((src, index) => (
            <div
              key={index}
              className={`carousel-slide w-full ${index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"}`}
            >
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="carousel-button carousel-button-left absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          ❮
        </button>
        <button onClick={nextSlide} className="carousel-button carousel-button-right absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
          ❯
        </button>

        {/* Pagination Dots */}
        <div className="carousel-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`}
            ></button>
          ))}
        </div>
      </section>
      <br></br>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-4">
        {/* Próximos Eventos */}
        
          <section className="mt-8"> 
            <EventsSection />
          </section>
     

        {/* Documentos Normativos */}
        
          <section className="mt-8">
            <DocumentList />
          </section>
         
      </div>


      {/* Enlaces de Interés */}
      <section className="max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          Enlaces de interés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1, Column 1 */}
          <div className="flex items-center bg-white p-4 border-2 border-orange-600 rounded-lg shadow-md">
            <Image
              src="/img/unfv_logo.png"
              alt="UNFV Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-grow font-semibold text-gray-800">
              Repositorio Institucional
            </div>
            <a href="#" className="text-white bg-orange-600 py-2 px-4 rounded-lg font-bold">
              Link
            </a>
          </div>

          {/* Row 1, Column 2 */}
          <div className="flex items-center bg-white p-4 border-2 border-orange-600 rounded-lg shadow-md">
            <Image
              src="/img/unfv_logo.png"
              alt="UNFV Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-grow font-semibold text-gray-800">
              Biblioteca Virtual
            </div>
            <a href="#" className="text-white bg-orange-600 py-2 px-4 rounded-lg font-bold">
              Link
            </a>
          </div>

          {/* Row 1, Column 3 */}
          <div className="flex items-center bg-white p-4 border-2 border-orange-600 rounded-lg shadow-md">
            <Image
              src="/img/unfv_logo.png"
              alt="UNFV Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-grow font-semibold text-gray-800">
              Normas Académicas
            </div>
            <a href="#" className="text-white bg-orange-600 py-2 px-4 rounded-lg font-bold">
              Link
            </a>
          </div>

          {/* Row 2, Column 1 */}
          <div className="flex items-center bg-white p-4 border-2 border-orange-600 rounded-lg shadow-md">
            <Image
              src="/img/unfv_logo.png"
              alt="UNFV Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-grow font-semibold text-gray-800">
              Centro Universitario de Idiomas
            </div>
            <a href="#" className="text-white bg-orange-600 py-2 px-4 rounded-lg font-bold">
              Link
            </a>
          </div>

          {/* Row 2, Column 2 */}
          <div className="flex items-center bg-white p-4 border-2 border-orange-600 rounded-lg shadow-md">
            <Image
              src="/img/unfv_logo.png"
              alt="UNFV Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-grow font-semibold text-gray-800">
              Biblioteca Central
            </div>
            <a href="#" className="text-white bg-orange-600 py-2 px-4 rounded-lg font-bold">
              Link
            </a>
          </div>

          {/* Row 2, Column 3 */}
          <div className="flex items-center bg-white p-4 border-2 border-orange-600 rounded-lg shadow-md">
            <Image
              src="/img/unfv_logo.png"
              alt="UNFV Logo"
              width={50}
              height={50}
              className="mr-4"
            />
            <div className="flex-grow font-semibold text-gray-800">
              Reglamento Académico
            </div>
            <a href="#" className="text-white bg-orange-600 py-2 px-4 rounded-lg font-bold">
              Link
            </a>
          </div>
        </div>
      </section>
    </div> 
  );
}
