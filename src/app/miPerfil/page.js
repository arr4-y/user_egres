"use client";

import Image from 'next/image';

export default function PerfilEgresado() {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between w-full max-w-5xl">
                {/* Título y navegación secundaria */}
                <div>
                    <h1 className="text-4xl font-bold text-orange-600">Perfil</h1>
                    <div className="mt-2 text-lg font-semibold text-gray-600 flex gap-4">
                        <a href="#" className="text-orange-600 border-b-2 border-orange-600">Mi cuenta</a>
                        <a href="#" className="hover:text-orange-600">Cambiar contraseña</a>
                    </div>
                </div>
            </div>

            {/* Sección principal */}
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-md mt-6 p-6">
                {/* Imagen de perfil */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/icons/perfil.svg" // Asegúrate de reemplazar esta ruta con la correcta
                        alt="Foto de perfil"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-orange-600">Datos personales</h2>
                </div>

                {/* Información del perfil */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Datos Personales */}
                    <div className="p-4 bg-orange-100 rounded-lg shadow-md">
                        <h3 className="font-bold text-gray-700 mb-2">Datos personales</h3>
                        <p><span className="font-semibold">Nombres y Apellidos:</span> Rogelio Augusto Alvarez Rodríguez</p>
                        <p><span className="font-semibold">Tipo de documento:</span> DNI</p>
                        <p><span className="font-semibold">Número de documento:</span> 71984891</p>
                        <p><span className="font-semibold">Fecha de nacimiento:</span> 12/12/2012</p>
                        <p><span className="font-semibold">Lugar de nacimiento:</span> Huánuco</p>
                        <p><span className="font-semibold">Sexo:</span> Masculino</p>
                        <p><span className="font-semibold">Discapacidad:</span> Ninguna</p>
                    </div>

                    {/* Contacto */}
                    <div className="p-4 bg-orange-100 rounded-lg shadow-md">
                        <h3 className="font-bold text-gray-700 mb-2">Contacto</h3>
                        <p><span className="font-semibold">Teléfono:</span> 922444555</p>
                        <p><span className="font-semibold">Correo personal:</span> soyunfv@gmail.com</p>
                        <p><span className="font-semibold">Correo institucional:</span> soyunfv@unfv.com</p>
                        <p><span className="font-semibold">Facebook:</span> -</p>
                        <p><span className="font-semibold">Instagram:</span> -</p>
                        <p><span className="font-semibold">LinkedIn:</span> -</p>
                        <p><span className="font-semibold">X (antes Twitter):</span> -</p>
                    </div>

                    {/* Información Académica Básica */}
                    <div className="col-span-2 p-4 bg-orange-100 rounded-lg shadow-md">
                        <h3 className="font-bold text-gray-700 mb-2">Información Académica Básica</h3>
                        <p><span className="font-semibold">Carrera profesional:</span> Arquitectura</p>
                        <p><span className="font-semibold">Facultad:</span> Arquitectura y Urbanismo</p>
                        <p><span className="font-semibold">Idiomas:</span> Inglés</p>
                        <p><span className="font-semibold">Nivel de idioma:</span> Intermedio</p>
                        <p><span className="font-semibold">Promedio:</span> 18</p>
                        <p><span className="font-semibold">Periodo de ingreso:</span> 2018-II</p>
                        <p><span className="font-semibold">Periodo de egreso:</span> 2020-I</p>
                        <p><span className="font-semibold">Periodo de reserva de matrícula:</span> 2020-2</p>
                    </div>
                </div>

                {/* Botón Editar */}
                <div className="flex justify-end mt-4">
                    <button className="bg-[#FE6A00] text-white px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300">
                        Editar
                    </button>
                </div>
            </div>
        </div>
    );
}
