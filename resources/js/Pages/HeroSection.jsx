import React from "react";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center bg-[#148F77] h-[605px]">
            <img
                loading="lazy"
                src="/img/logo1.jpg"
                className="mt-32 rounded ring-2 ring-green-300"
            />
            <h2 className="text-3xl text-white font-semibold mt-5">
                SDN 042 Gambir
            </h2>
        </div>
    );
}
