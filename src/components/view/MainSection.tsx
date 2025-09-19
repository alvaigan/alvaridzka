"use client"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const MainSection = () => {
    const imageRef = useRef<HTMLImageElement>(null);
    
    useGSAP(() => {
        if (imageRef.current) {
            // Initial state
            gsap.set(imageRef.current, {
                opacity: 0,
                scale: 0.5,
                y: 150
            });
            
            // Animation sequence
            gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 4,
                ease: "bounce.out",
                delay: 1
            });
        }
    });

    return (
        <div className="flex flex-col min-h-screen justify-center items-center chivo-font z-10 bg-dark bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y relative">
            <Image
                ref={imageRef}
                src={`/main-couple.png`}
                width={0}
                height={0}
                sizes="100%"
                alt="main-couple"
                className="size-full"
                priority
                fetchPriority="high" />

            <div className="flex flex-row justify-center items-center gap-2 mt-2 mb-10 p-5 bg-light rounded-full border-5 border-[#4D412A] shadow-xl">
                <div className="cookie-font text-4xl">Alvaigan</div>
                <div className="cookie-font text-4xl">{`&`}</div>
                <div className="cookie-font text-4xl">Ridzka</div>
            </div>
        </div>
    );
};

export default MainSection;
