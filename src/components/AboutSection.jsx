"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";



const AboutSection = () => {




  return (
    <section className="bg-gradient-to-b from-[#0c0d25] via-[#22306b] to-[#121438]">
      <div className="container text-white py-20" id="about">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-20 ">
          <div className="lg:w-1/2 mt-20">


            <Image src="/images/Web-Developer.jpg" alt="imagen" width={500} height={500} />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className=" text-sm text-[#ADB7BE]  sm:text-xl lg:text-xl">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
              Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
              looking to expand my knowledge and skill set. I am a team player and
              I am excited to work with others to create amazing applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {/* Primera Fila */}
              <div className="sm:col-span-2 pt-5">
                <div className="text-2xl text-center font-bold text-white ">
                  <h3>Skills</h3>

                </div>
              </div>

              {/* Segunda Fila */}
              <div className="flex-col text-center text-sm sm:text-xl">
                <div className="flex justify-center gap-3 flex-wrap ">
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <FaHtml5 fontSize={25} color="orange" />
                    <span className="ml-1">HTML</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <IoLogoCss3 fontSize={25} color="#3396FF" />
                    <span className="ml-2">CSS</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <IoLogoJavascript fontSize={25} color="yellow" />
                    <span className="ml-2">JavaScript</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/Bootstrap.png"
                      alt="hero image"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">Bootstrap</span>
                  </h6>

                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/mongo.png"
                      alt="hero image"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">MongoDB</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <SiExpress fontSize={25} color="gray" />
                    <span className="ml-2">Express</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/react.png"
                      alt="hero image"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">React</span>
                  </h6>

                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/node.png"
                      alt="hero image"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">Node.js</span>
                  </h6>


                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/git.png"
                      alt="hero image"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">Git</span>
                  </h6>


                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/Firebase.png"
                      alt="hero image"
                      width={25}
                      height={25}
                    />
                    <span className="ml-2">FireBase</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/ChartJs.png"
                      alt="hero image"
                      width={25}
                      height={25}
                    />
                    <span className="ml-2">Chart.js</span>
                  </h6>
                  <h6 className="flex items-center border-2 rounded px-3 py-1">
                    <Image
                      src="/images/postman.png"
                      alt="hero image"
                      width={25}
                      height={25}
                    />
                    <span className="ml-2">Postman</span>
                  </h6>

                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {/* Primera Fila */}
              <div className="sm:col-span-2 pt-4">
                <div className="text-xl text-center font-bold text-white ">
                  <h3>En desarrollo:</h3>

                </div>
              </div>

              {/* Segunda Fila */}
              <div className="flex-col">
                <div className="flex justify-center gap-2 flex-wrap ">
                  <h6 className="flex items-center border-1 rounded px-3 py-1">
                    <SiNextdotjs fontSize={20} color="#585858" />
                    <span className="ml-2 text-sm">Next.js</span>
                  </h6>
                  <h6 className="flex items-center border-1 rounded px-3 py-1">
                    <SiTailwindcss fontSize={20} color="cyan" />
                    <span className="ml-2 text-sm">Tailwind</span>
                  </h6>
                  <h6 className="flex items-center border-1 rounded px-3 py-1">
                    <IoLogoSass fontSize={20} color="#B4045F" />
                    <span className="ml-2 text-sm">Sass</span>
                  </h6>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;