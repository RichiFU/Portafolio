import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { GrView } from "react-icons/gr";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
            newWindow.opener = null;
        }
    };

    return (

        <div className="bg-stone-900 h-100 lg:h-100 md:w-100 rounded-xl shadow hover:shadow-xl cursor-pointer duration-500 hover:scale-105  ">
            <div className="rounded-t-xl overflow-hidden" >
                <Image
                    style={{ height: '300px', }}
                    src={imgUrl}
                    className=" object-cover border-none"
                    alt="Single Project"
                    width={500}
                    height={500}
                />
            </div>


            <div className="text-white pt-2 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
            <div className=" flex justify-center gap-4 pb-3">

                <button
                    onClick={() => openInNewTab(gitUrl)}
                    className="bg-transparent border-2  text-white mt-3 px-2 py-2 rounded-full transition-colors hover:bg-blue-500 hover:border-blue-500">
                    <FaCode fontSize={15} />
                </button>

                <button
                    onClick={() => openInNewTab(previewUrl)}
                    className="bg-transparent border-2  text-white mt-3 px-2 py-2 rounded-full transition-colors hover:bg-blue-500 hover:border-blue-500">
                    <GrView fontSize={15} />
                </button>

            </div>
        </div>
    );
};

export default ProjectCard;
