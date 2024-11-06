"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Cerrar el menú cuando se redimensiona la pantalla a un tamaño mayor
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Cerrar el menú cuando se hace clic en un enlace en móviles
    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md w-full">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-[#FE6A00] text-2xl font-bold">
                    UNFV
                </Link>
            </div>

            <nav
                id="primary-navigation"
                className={`flex items-center space-x-6 md:flex transition-all duration-300 ease-in-out gap-4`}
            >
                <Link href="/nosotros" className="text-gray-800 hover:text-[#FE6A00] transition duration-300" onClick={closeMenu}>
                    Sobre nosotros
                </Link>
                <Link href="/noticias" className="text-gray-800 hover:text-[#FE6A00] transition duration-300" onClick={closeMenu}>
                    Noticias
                </Link>
                <Link href="/convenios" className="text-gray-800 hover:text-[#FE6A00] transition duration-300" onClick={closeMenu}>
                    Convenios
                </Link>
                <Link href="/egresados" className="text-gray-800 hover:text-[#FE6A00] transition duration-300" onClick={closeMenu}>
                    Nuestros egresados
                </Link>
                <Link href="/bolsaTrabajo" className="text-gray-800 hover:text-[#FE6A00] transition duration-300" onClick={closeMenu}>
                    Bolsa de trabajo
                </Link>
                <Link href="/login" className="bg-[#FE6A00] text-white px-4 py-2 rounded-full shadow-sm text-center hover:bg-orange-500 transition duration-300" onClick={closeMenu}>
                    Iniciar sesión
                </Link>
            </nav>
        </header>
    );
}