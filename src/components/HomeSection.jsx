"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const HomeSection = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section className="lg:py-20 px-8 pt-10">
      <div className="grid lg:pt-24 grid-cols-1 lg:grid-cols-12 pb-20 mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center "
        >
          <div >

            <h1 className="text-white mb-6 text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold">

              <p className="my-3">
                Hola soy Ricardo F.
              </p>

              <TypeAnimation
                sequence={[
                  "Desarrollador Web",
                  1000,
                  "Ingeniero Informático",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

          </div>
          <div >

            <p className="text-[#ADB7BE] pt-3 text-sm text-center sm:text-xl mt-6 mb-6 lg:text-xl">
              Mi pasión por la tecnología y la programación me impulsa a estar en constante aprendizaje, buscando soluciones innovadoras y eficientes para cada desafío que encuentro. Siempre estoy en la búsqueda de nuevas herramientas y metodologías que me permitan mejorar mis habilidades y mantenerme al tanto de las últimas tendencias en el mundo del desarrollo web.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">

            <button
              onClick={() => openInNewTab("/images/CV-Ricardo-F.pdf")}
              className="bg-transparent border-3  text-white mt-3 px-5 py-2 rounded-full transition-colors hover:bg-blue-500 hover:border-blue-500">
              Ver CV
            </button>


            <button
              onClick={() => openInNewTab("https://github.com/RichiFU")}
              className="bg-transparent border-3  text-white mt-3 px-2 py-2 rounded-full transition-colors hover:bg-blue-500 hover:border-blue-500">
              <FaGithub fontSize={25} />
            </button>


            <button
              onClick={() => openInNewTab("https://www.linkedin.com/in/r-andres-urizar-fuentes-a0a88b1a0")}
              className="bg-transparent border-3  text-white mt-3 px-2 py-2 rounded-full transition-colors hover:bg-blue-500 hover:border-blue-500">
              <FaLinkedin fontSize={25} />
            </button>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0 mr-2"
        >
          <div className="rounded w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/myprofilepic.jpg"
              alt="home image"
              width={280}
              height={400}
              className="rounded border-2 shadow mx-auto mt-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
