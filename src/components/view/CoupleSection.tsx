"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CoupleSection = () => {
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
            className="flex flex-col bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y px-5 pt-5 pb-20 gap-10"
        >
            <h1 className="text-center aref-font text-5xl my-15">
                بِسْمِ ٱللّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </h1>
            <p className="text-center chivo-font text-lg">
                Dengan penuh rasa syukur dan kerendahan hati, kami mengundang
                Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada hari
                bahagia kami:
            </p>
            <div className="flex flex-col justify-center items-center gap-2 my-4 p-5">
                <div className="w-50 h-50 border-2 border-[#4D412A] rounded-full mb-5">
                    <Image
                        src={`/alvaigan.png`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover rounded-full"
                        priority
                        fetchPriority="high"
                    />
                </div>
                <h1 className="cookie-font text-4xl">Alvaigan, S.Hum.</h1>
                <p className="text-lg">Putra ke-2 dari keluarga:</p>
                <p className="font-bold text-lg">{`Asep Suhendar (alm.) & Rohaeti`}</p>
            </div>

            <div className="inline-flex justify-center items-center playfair-font gap-2 text-7xl">
                <div className="border-t-2 border-[#4D412A] w-10"></div>
                {`&`}
                <div className="border-t-2 border-[#4D412A] w-10"></div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-4">
                <div className="w-50 h-50 border-2 border-[#4D412A] rounded-full mb-5">
                    <Image
                        src={`/ridzka.png`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover rounded-full"
                        priority
                        fetchPriority="high"
                    />
                </div>
                <h1 className="cookie-font text-4xl">Ridzka Nur Fajrie, S.H.</h1>
                <p className="text-lg">Putri ke-1 dari keluarga:</p>
                <p className="font-bold text-lg">{`Suparman, S.Pd. & Suprapti, S.Pd, M.M.`}</p>
            </div>
        </div>
    );
};

export default CoupleSection;
