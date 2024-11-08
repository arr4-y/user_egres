// src/app/miPerfil/page.js
"use client"; // Necesario para el uso de hooks en Next.js

import React, { useState } from 'react';
import { FaHome, FaCommentDots, FaClipboardList, FaBriefcase, FaFileAlt, FaTrash } from 'react-icons/fa';

export default function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [languages, setLanguages] = useState([{ name: "Español", level: "Intermedio" }]); // Lista de idiomas con nivel
  const [newLanguage, setNewLanguage] = useState(""); // Nuevo idioma a agregar
  const [newLanguageLevel, setNewLanguageLevel] = useState("Intermedio"); // Nivel del nuevo idioma

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleAddLanguage = () => {
    if (newLanguage && !languages.find((lang) => lang.name === newLanguage)) {
      setLanguages([...languages, { name: newLanguage, level: newLanguageLevel }]);
      setNewLanguage("");
      setNewLanguageLevel("Intermedio");
    }
  };

  const handleDeleteLanguage = (name) => {
    setLanguages(languages.filter((lang) => lang.name !== name));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-2">
          <h1 className="text-xl font-semibold text-orange-500 border-b-2 border-orange-500">
            Mi cuenta
          </h1>
          <button className="text-xl text-gray-600 hover:text-orange-500 transition-all">
            Cambiar contraseña
          </button>
        </div>

        {/* Main Container */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 p-6 bg-gray-50 border-r">
            <ul className="space-y-4 text-gray-700">
              <SidebarLink icon={FaHome} label="Mis datos" />
              <SidebarLink icon={FaCommentDots} label="Dar Feedback" />
              <SidebarLink icon={FaClipboardList} label="Ver publicaciones" />
              <SidebarLink icon={FaBriefcase} label="Ver bolsa de trabajo" />
              <SidebarLink icon={FaFileAlt} label="Mi Curriculum Vitae" />
            </ul>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 p-6 md:p-8">
            
            {/* Profile Info */}
            <section className="flex flex-col items-center space-y-4 mb-6">
              <img
                src="/icons/perfil.svg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-orange-500"
              />
              <h2 className="text-2xl font-semibold text-orange-500">Perfil</h2>
            </section>

            {/* Personal Data Section */}
            <DataSection title="Datos personales" data={personalData} isEditing={isEditing} />

            {/* Contact Section */}
            <DataSection title="Contacto" data={contactData} isEditing={isEditing} />

            {/* Academic Info Section with Editable Language and Level */}
            <section className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Información Académica Básica</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b pb-4">
                
                {/* Información Académica Fija */}
                {academicData.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold text-gray-700">{item.label}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                ))}

                {/* Idiomas y Nivel de Idioma */}
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700">Idiomas Registrados</h3>
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between mt-2">
                      <p className="text-gray-600">
                        {lang.name} - {lang.level}
                      </p>
                      {isEditing && (
                        <button onClick={() => handleDeleteLanguage(lang.name)}>
                          <FaTrash className="text-red-500 hover:text-red-700" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Agregar Nuevo Idioma */}
                {isEditing && (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700">Nuevo Idioma</h3>
                      <input
                        type="text"
                        placeholder="Agregar nuevo idioma"
                        value={newLanguage}
                        onChange={(e) => setNewLanguage(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-2 py-1 text-gray-700"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700">Nivel del Idioma</h3>
                      <input
                        type="text"
                        placeholder="Nivel (Ej: Básico, Intermedio)"
                        value={newLanguageLevel}
                        onChange={(e) => setNewLanguageLevel(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-2 py-1 text-gray-700"
                      />
                    </div>
                    <div className="col-span-2 mt-2">
                      <button
                        onClick={handleAddLanguage}
                        className="text-sm text-orange-500 hover:underline"
                      >
                        Añadir idioma
                      </button>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Edit and Save Button */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleEditToggle}
                className={`px-6 py-2 rounded-md transition-all ${isEditing ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'} hover:opacity-80`}
              >
                {isEditing ? 'Guardar' : 'Editar'}
              </button>
              {isEditing && (
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all"
                >
                  Cancelar
                </button>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Sidebar Link Component
function SidebarLink({ icon: Icon, label }) {
  return (
    <li className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2 transition-all">
      <Icon className="text-gray-600" />
      <a href="#" className="text-sm hover:text-orange-500 transition-all">
        {label}
      </a>
    </li>
  );
}

// Data Section Component
function DataSection({ title, data, isEditing }) {
  return (
    <section className="mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b pb-4">
        {data.map((item, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-700">{item.label}</h3>
            {isEditing && item.editable ? (
              <input
                type="text"
                defaultValue={item.value}
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-gray-700"
              />
            ) : (
              <p className="text-gray-600">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Datos de las secciones

const personalData = [
  { label: 'Nombre y Apellido', value: 'Rogelio Augusto', editable: false },
  { label: 'Apellidos', value: 'Alvarez Rodriguez', editable: false },
  { label: 'Tipo de documento', value: 'DNI', editable: false },
  { label: 'Número de documento', value: '7194961', editable: false },
  { label: 'Fecha de nacimiento', value: '12/12/2012', editable: true },
  { label: 'Sexo', value: 'Masculino', editable: true },
  { label: 'Lugar de nacimiento', value: 'Huánuco', editable: true },
  { label: 'Discapacidad', value: 'Ninguna', editable: true },
];

const contactData = [
  { label: 'Teléfono', value: '92244455', editable: true },
  { label: 'Correo personal', value: 'soyunfv@gmail.com', editable: true },
  { label: 'Correo institucional', value: 'soyunfv@unfv.com', editable: false },
  { label: 'Facebook', value: 'Nombre de usuario', editable: true },
  { label: 'Instagram', value: 'Nombre de usuario', editable: true },
  { label: 'X (antes Twitter)', value: 'Nombre de usuario', editable: true },
  { label: 'LinkedIn', value: 'Nombre de usuario', editable: true },
  { label: 'Otros', value: 'Opcional', editable: true },
];

const academicData = [
  { label: 'Carrera profesional', value: 'Arquitectura' },
  { label: 'Facultad', value: 'Arquitectura y Urbanismo' },
  { label: 'Promedio', value: '18' },
  { label: 'Período de ingreso', value: '2018-1' },
  { label: 'Período de egreso', value: '2022-1' },
  { label: 'Período de reserva de matrícula', value: '2020-2' },
]; 
