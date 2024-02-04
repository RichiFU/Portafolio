'use client'


import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




function AppFooter() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null;
        }
    };


    return (
        <footer className='bg-gradient-to-t from-[#0c0d25] to-[#121438]'>
            <div className="container p-12 flex flex-column items-center justify-center">
                <div className="flex flex-row gap-4">
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
                <div className="text-center">
                <p className="text-[#ADB7BE] text-base pt-3">&copy; {new Date().getFullYear()} Todos los derechos Reservados. Next.js & Tailwind CSS Portafolio. Ricardo F</p>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;