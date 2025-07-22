"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header>
            <nav className=" mx-auto bg-[#0a0b1f]">
                <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <Link
                        href={"/"}
                        className="text-2xl md:text-5xl text-white font-semibold duration-500 hover:scale-110"
                    >
                        <Image
                            src="/images/iconsportf2.png"
                            alt="Portafolio"

                            width={50}
                            height={50}
                        />
                    </Link>
                    <div className="mobile-menu block md:hidden">
                        {!navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                    <div className="menu hidden md:block md:w-auto" id="navbar">
                        <div className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 no-underline">
                            <Link href="/#about" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white "> Acerca de mí </Link>
                            <Link href="/projects" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"> Proyectos</Link>
                            <Link href="/contact" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Contacto</Link>

                        </div>
                    </div>
                </div>
                {navbarOpen ? <div className="flex flex-col py-4 items-center">
                    <Link href="/#about" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"> Acerca de mí</Link>
                    <Link href="/projects" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"> Proyectos</Link>
                    <Link href="/contact" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"> Contacto</Link>
                </div> : null}
            </nav>
        </header>
    );
};

export default Navbar;
