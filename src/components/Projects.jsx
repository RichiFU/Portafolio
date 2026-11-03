'use client'

import React, { useRef } from "react";
import Project from "./Project";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Landing Page de Venta",
        description: "Proyecto de Landing Page, Utilizando HTML y CSS",
        image: "/images/projects/project1.png",
        gitUrl: "https://github.com/RichiFU/Project-1-Landing",
        previewUrl: "https://richifu.github.io/Project-1-Landing",
    },
    {
        id: 2,
        title: "Candy-page",
        description: "Proyecto desarrollado con HTML, CSS y Bootstrap",
        image: "/images/projects/cndy.png",
        gitUrl: "https://github.com/RichiFU/candy-bootstrap.git",
        previewUrl: "https://richifu.github.io/candy-bootstrap/",
    },
    {
        id: 3,
        title: "Aplicación CRUD de autos",
        description: "Proyecto de CRUD, se utiliza Javascript y Localstorage",
        image: "/images/projects/project2.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-2-CRUD-RFU",
        previewUrl: "https://richifu.github.io/Proyecto-2-CRUD-RFU",
    },
    {
        id: 4,
        title: "API dolar Dashboard",
        description: "Proyecto de tablero de datos con JS, API dolar y Chart.js",
        image: "/images/projects/project3.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-3-Dashboard-RFU",
        previewUrl: "https://proyecto-3-dashboard-rfu.netlify.app/",
    },
    {
        id: 5,
        title: "Arcade Restaurant App",
        description: "Proyecto de restaurant desarrollado con React y Firebase",
        image: "/images/projects/project4.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-4-Restaurant-Ricardo-F",
        previewUrl: "https://proyecto4-restaurant-rfu.netlify.app/",
    },
    {
        id: 6,
        title: "Marathon E-Commerce",
        description: "Proyecto E-commerce, con React, MongoDB y Express",
        image: "/images/projects/project5.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-5-E-commerce-Front-End",
        previewUrl: "https://proyecto5-marathon-e-commerce.netlify.app/",
    },
    {
        id: 7,
        title: "Guessing Game whit Python",
        description: "Juego de consola en Python con validación de entradas, Regex, almacenamiento en CSV y pruebas automatizadas con pytest.",
        image: "/images/projects/guessing-game.png",
        gitUrl: "https://github.com/RichiFU/Python-game.git",
        previewUrl: "/images/guessing-game.png",
    },
    {
        id: 8,
        title: "WordPress: Clínica dental",
        description: "Sitio web ficticio en WordPress con Gutenberg, Elementor, ACF, PHP personalizado, Yoast SEO, diseño responsive y envío de correos con WP Mail SMTP + Resend.",
        image: "/images/projects/nosotros-escritorio.png",
        gitUrl: "https://github.com/RichiFU/clinica-dental-araucania",
        previewUrl: "https://clinicadentalaraucania.freedev.app/",
    },
    {
        id: 9,
        title: "Veider Gym",
        description: "One page responsive para gimnasio desarrollada con Astro y Tailwind CSS, con servicios, planes, formulario de contacto y Formspree, Google Maps, WhatsApp, SEO básico y despliegue en Netlify.",
        image: "/images/projects/weider-preview.webp",
        gitUrl: "https://github.com/RichiFU/veider-gym",
        previewUrl: "https://veider-gym.netlify.app/",
    },
];

const Projects = () => {

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="bg-gradient-to-b from-[#0a0b1f] via-[#111c48]  to-[#0a0b1f]">
            <div className="container py-20 px-8" id="projects">
                <h2 className="text-center text-4xl font-bold text-white mb-4 md:mb-12">
                    Mis Proyectos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-x-9 ">
                    {projectsData.map((project, index) => (
                        <motion.div
                            className="mt-9"
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <Project
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
