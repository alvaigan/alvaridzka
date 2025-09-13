"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MomentSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const title = containerRef.current.querySelector("h1");
            const galleryItems = Array.from(
                containerRef.current.querySelectorAll(".gallery-item"),
            );

            gsap.set([title, ...galleryItems], { opacity: 0, y: 20 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            if (title) {
                tl.to(title, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                });
            }

            tl.to(
                galleryItems,
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                },
                "-=0.4",
            );
        },
        { scope: containerRef },
    );

    return (
        <div
            ref={containerRef}
            className="flex flex-col pt-5 pb-20 gap-10 relative bg-dark"
        >
            <div className="flex flex-col items-center gap-4 text-white z-10 w-full px-5">
                <h1 className="text-4xl cookie-font text-center border-b border-[#ECDCCB] text-[#ECDCCB]">
                    Moment Bahagia
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 mx-4">
                <div className="gallery-item bg-[url('/img-1.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-2.jpg')] bg-cover bg-center bg-repeat-y w-full h-full row-span-2 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-5.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-4.jpg')] bg-cover bg-center bg-repeat-y w-full h-full rounded-lg row-span-2 hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-3.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-6.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-10.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-7.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-12.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
                <div className="gallery-item bg-[url('/img-8.jpg')] bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105"></div>
            </div>
        </div>
    );
};

export default MomentSection
