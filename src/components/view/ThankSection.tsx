"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ThankSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const elements = Array.from(containerRef.current.children);

            gsap.set(elements, { opacity: 0, y: 20 });

            ScrollTrigger.batch(elements, {
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        ease: "power2.out",
                    }),
                start: "top 85%",
            });
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            className="flex flex-col justify-center items-center chivo-font z-10 bg-dark relative"
        >
            <div className="w-full">
                <Image
                    src={`/img-end.png`}
                    width={0}
                    height={0}
                    sizes="100%"
                    alt="main-couple"
                    className="size-full"
                    priority
                    fetchPriority="high"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 m-15">
                <p className="chivo-font text-white text-center">
                    {"Atas Kehadiran & Doa Bapak/Ibu/Saudara/i Kami Ucapakan Terima Kasih"}
                </p>
                <div className="w-1/3 border-1.5 border-t border-[#ECDCCB]"></div>
            </div>
        </div>
    );
};

export default ThankSection
