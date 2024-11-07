// pages/perfil.js
import React from 'react';

export default function Perfil() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-orange-500">Perfil</h1>
          <button className="text-sm text-orange-500 hover:underline">Cambiar contraseña</button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-4">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 p-4 bg-purple-100">
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-700 hover:text-orange-500">Mis datos</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-orange-500">Dar Feedback</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-orange-500">Ver publicaciones</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-orange-500">Ver bolsa de trabajo</a></li>
                <li><a href="#" className="text-sm text-gray-700 hover:text-orange-500">Mi Curriculum Vitae</a></li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-6">
              {/* Profile Info */}
              <div className="flex items-center space-x-4">
                <img
                  src="/path/to/profile-pic.jpg"
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold">Datos personales</h2>
              </div>

              {/* Personal Data */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold">Nombre y Apellido</h3>
                  <p className="text-gray-600">Rogelio Augusto</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Apellidos</h3>
                  <p className="text-gray-600">Alvarez Rodriguez</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Fecha de nacimiento</h3>
                  <p className="text-gray-600">12/12/2012</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Lugar de nacimiento</h3>
                  <p className="text-gray-600">Huánuco</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Sexo</h3>
                  <p className="text-gray-600">Masculino</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Discapacidad</h3>
                  <p className="text-gray-600">Ninguna</p>
                </div>
              </div>

              {/* Contact Info */}
              <h2 className="mt-8 text-xl font-semibold">Contacto</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="text-sm font-semibold">Teléfono</h3>
                  <p className="text-gray-600">92244455</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Correo personal</h3>
                  <p className="text-gray-600">soyunfv@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Correo institucional</h3>
                  <p className="text-gray-600">soyunfv@unfv.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Redes sociales</h3>
                  <p className="text-gray-600">Instagram, Facebook, LinkedIn</p>
                </div>
              </div>

              {/* Academic Info */}
              <h2 className="mt-8 text-xl font-semibold">Información Académica Básica</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="text-sm font-semibold">Carrera profesional</h3>
                  <p className="text-gray-600">Arquitectura</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Facultad</h3>
                  <p className="text-gray-600">Arquitectura y Urbanismo</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Idioma</h3>
                  <p className="text-gray-600">Inglés (Intermedio)</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Promedio</h3>
                  <p className="text-gray-600">18</p>
                </div>
              </div>

              {/* Edit Button */}
              <div className="mt-8">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
