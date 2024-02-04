'use client'

import React, { useRef } from "react";
import Project from "./Project";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Proyecto 1 : Landing de Venta",
        description: "Proyecto de Landing Page, Utilizando HTML y CSS",
        image: "/images/project1.png",
        gitUrl: "https://github.com/RichiFU/Project-1-Landing",
        previewUrl: "https://richifu.github.io/Project-1-Landing",
    },
    {
        id: 2,
        title: "Proyecto 2 : Aplicación CRUD",
        description: "Proyecto de CRUD, se utiliza Javascript y Localstorage",
        image: "/images/project2.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-2-CRUD-RFU",
        previewUrl: "https://richifu.github.io/Proyecto-2-CRUD-RFU",
    },
    {
        id: 3,
        title: "Proyecto 3 : Dashboard",
        description: "Proyecto de tablero de datos con Chart.js",
        image: "/images/project3.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-3-Dashboard-RFU",
        previewUrl: "https://proyecto-3-dashboard-rfu.netlify.app/",
    },
    {
        id: 4,
        title: "Proyecto 4 : Restaurant App",
        description: "Proyecto de restaurant con React y Firebase",
        image: "/images/project4.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-4-Restaurant-Ricardo-F",
        previewUrl: "https://proyecto4-restaurant-rfu.netlify.app/",
    },
    {
        id: 5,
        title: "Proyecto 5 : E-Commerce",
        description: "Proyecto E-commerce, con React, MongoDB y Express",
        image: "/images/project5.png",
        gitUrl: "https://github.com/RichiFU/Proyecto-5-E-commerce-Front-End",
        previewUrl: "https://proyecto5-marathon-e-commerce.netlify.app/",
    },

];

const Projects = () => {

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="bg-gradient-to-b from-[#0c0d25] via-[#22306b] to-[#121438]">
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
