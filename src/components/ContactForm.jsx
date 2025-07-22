'use client'

import { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { motion } from "framer-motion";

const ContactForm = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const contacts = [
        {
            id: 1,
            name: 'Sangers 1191, Temuco, Región de la Araucanía',
            icon: <FiMapPin />,
        },
        {
            id: 2,
            name: 'andresurizarfuentes@gmail.com',
            icon: <FiMail />,
        },
        {
            id: 3,
            name: '+56 9 68020356',
            icon: <FiPhone />,
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();


        // Mostrar mensaje de éxito durante 3 segundos
        setEmailSubmitted(true);
        setTimeout(() => {
            setEmailSubmitted(false);
        }, 2000);
    };

    return (
        <section className="bg-gradient-to-b from-[#0a0b1f] via-[#111c48]  to-[#0a0b1f]">
            <motion.div
                id="contacto"
                className="container flex flex-col-reverse lg:flex-row py-5 lg:py-10 "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >


                {/* Columna 1 50% de pantalla */}
                <div className="lg:w-1/2 mt-20">
                    <div>
                        <h5 className="lg:text-3xl text-xl font-bold text-white my-2">
                            Contacto
                        </h5>
                        <hr className="border-t-4 border-[#ADB7BE] my-4 w-80" />
                    </div>
                    <div className="pt-2">

                        {contacts.map((contact) => (
                            <div className="flex flex-row items-center mb-3" key={contact.id}>
                                <div>
                                    <p className="text-2xl text-white dark:text-neutral-400 mr-4">
                                        {contact.icon}
                                    </p>
                                </div>
                                <div>
                                    <p className="flex text-base text-white">
                                        {contact.name}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <hr className="border-t-4 border-[#ADB7BE] my-4 w-80" />
                </div>

                {/* Columna 2 50% de pantalla */}
                <div className="lg:w-1/2 mt-20">
                    <h5 className="lg:text-3xl text-xl text-center font-bold text-white my-2 pb-8">
                        Formulario
                    </h5>
                    {emailSubmitted ? (
                        <p className="text-green-500 text-sm mt-2">
                            Email enviado correctamente!
                        </p>
                    ) : (
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Nombre
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Ricardo"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Correo Electrónico
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Micorreo@gmail.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Asunto
                                </label>
                                <input
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Proyecto"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Mensaje:
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 pb-20"
                                    placeholder="Hablemos sobre el proyecto 1"
                                />
                            </div>
                            <div className="text-center py-8 mb-8">

                                <button
                                    type="submit"
                                    className="bg-transparent border-3  text-white mt-3 px-5 py-2 rounded-full transition-colors hover:bg-blue-500 hover:border-blue-500"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default ContactForm;
