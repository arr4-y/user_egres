// pages/perfil.js
import React from 'react';
import { FaHome, FaCommentDots, FaClipboardList, FaBriefcase, FaFileAlt } from 'react-icons/fa';

export default function Perfil() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 border-b pb-2">
          <h1 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-500">Mi cuenta</h1>
          <button className="text-xl text-gray-600 hover:text-orange-500">Cambiar contraseña</button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar */}
          {/* Sidebar */}
          <div className="w-full md:w-1/4 p-6 bg-gray-50">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2">
                <FaHome className="text-gray-600" />
                <a href="#" className="text-sm hover:text-orange-500">Mis datos</a>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2">
                <FaCommentDots className="text-gray-600" />
                <a href="#" className="text-sm hover:text-orange-500">Dar Feedback</a>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2">
                <FaClipboardList className="text-gray-600" />
                <a href="#" className="text-sm hover:text-orange-500">Ver publicaciones</a>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2">
                <FaBriefcase className="text-gray-600" />
                <a href="#" className="text-sm hover:text-orange-500">Ver bolsa de trabajo</a>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2">
                <FaFileAlt className="text-gray-600" />
                <a href="#" className="text-sm hover:text-orange-500">Mi Curriculum Vitae</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 p-6 md:p-8">
            
            {/* Profile Info */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <img
                src="/icons/perfil.svg"
                alt="Profile Picture"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">Datos personales</h2>
            </div>

            {/* Personal Data Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b pb-4 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Nombre y Apellido</h3>
                <p className="text-gray-600">Rogelio Augusto</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Apellidos</h3>
                <p className="text-gray-600">Alvarez Rodriguez</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Fecha de nacimiento</h3>
                <p className="text-gray-600">12/12/2012</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Lugar de nacimiento</h3>
                <p className="text-gray-600">Huánuco</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Sexo</h3>
                <p className="text-gray-600">Masculino</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Discapacidad</h3>
                <p className="text-gray-600">Ninguna</p>
              </div>
            </div>

            {/* Contact Section */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contacto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b pb-4 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Teléfono</h3>
                <p className="text-gray-600">92244455</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Correo personal</h3>
                <p className="text-gray-600">soyunfv@gmail.com</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Correo institucional</h3>
                <p className="text-gray-600">soyunfv@unfv.com</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Redes sociales</h3>
                <p className="text-gray-600">Instagram, Facebook, LinkedIn</p>
              </div>
            </div>

            {/* Academic Info Section */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Información Académica Básica</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b pb-4 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Carrera profesional</h3>
                <p className="text-gray-600">Arquitectura</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Facultad</h3>
                <p className="text-gray-600">Arquitectura y Urbanismo</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Idioma</h3>
                <p className="text-gray-600">Inglés (Intermedio)</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Promedio</h3>
                <p className="text-gray-600">18</p>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-6 flex justify-end">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all">
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
