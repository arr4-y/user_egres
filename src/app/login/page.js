"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Inicio de sesión exitoso");
    }, 2000);
  };

  return (
    <div
      className="m-[-1.5rem] flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/fondo_login2.jpg')",
      }}
    >
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden m-4 md:m-0">
        
        {/* Sección de Imagen o Ilustración */}
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/img/fondo_login.jpg')" }}>
          <div className="absolute inset-0 bg-blue-600 opacity-60 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Sistema de Egresados UNFV</span>
          </div>
        </div>

        {/* Sección del Formulario */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#FE6A00] mb-6 text-center">Acceder</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo de usuario</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#FE6A00]"
                placeholder="Escribir correo"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#FE6A00]"
                placeholder="Escribir contraseña"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Recuérdame
              </label>
              <a href="#" className="text-sm text-[#FE6A00] hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-bold ${loading ? "bg-gray-400" : "bg-[#FE6A00] hover:bg-orange-600"}`}
            >
              {loading ? "Cargando..." : "Acceder"}
            </button>
            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <a href="#" className="hover:underline">¿Eres de la Facultad?</a>
              <a href="#" className="hover:underline">¿Eres de la DOGE?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
