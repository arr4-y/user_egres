"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Effect to close the menu when resizing to a large screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Assuming 'md' starts at 768px
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="flex justify-between items-center px-4 py-4 bg-white shadow-md md:px-8">
            <Link href="/" className="text-[#FE6A00] text-2xl font-bold">
                UNFV
            </Link>

            <button
                className="text-[#FE6A00] md:hidden focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            <nav
                className={`${isOpen ? "flex flex-col gap-2 items-center" : "hidden"} 
                            md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 
                            absolute md:relative top-16 left-0 w-full bg-white shadow-md 
                            md:shadow-none md:top-auto md:w-auto p-4 md:p-0 z-10`}
            >
                <Link href="/nosotros" className="text-gris-o1 hover:text-main transition duration-300">
                    Sobre nosotros
                </Link>
                <Link href="/noticias" className="text-gris-o1 hover:text-main transition duration-300">
                    Noticias
                </Link>
                <Link href="/convenios" className="text-gris-o1 hover:text-main transition duration-300">
                    Convenios
                </Link>
                <Link href="/egresados" className="text-gris-o1 hover:text-main transition duration-300">
                    Nuestros egresados
                </Link>
                <Link href="/bolsaTrabajo" className="text-gris-o1 hover:text-main transition duration-300">
                    Bolsa de trabajo
                </Link>
                <Link href="/login" className="block bg-[#FE6A00] text-white px-4 py-2 rounded-md shadow-sm text-center hover:bg-orange-500 transition duration-300">
                    Iniciar sesión
                </Link>
            </nav>
        </header>
    );
}
