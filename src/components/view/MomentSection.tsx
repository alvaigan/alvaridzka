"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
                <div className="gallery-item  bg-cover bg-center bg-repeat-y w-full h-50 hover:scale-105 relative">
                    <Image
                        src={`/img-1.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>

                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-full row-span-2 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-13.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-14.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover object-top absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-full rounded-lg row-span-2 hover:scale-105 relative">
                    <Image
                        src={`/img-4.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover object-center absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-18.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-17.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-16.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-7.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-12.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
                <div className="gallery-item bg-cover bg-center bg-repeat-y w-full h-50 rounded-lg hover:scale-105 relative">
                    <Image
                        src={`/img-8.JPG`}
                        width={0}
                        height={0}
                        sizes="100%"
                        alt="main-couple"
                        className="size-full object-cover absolute rounded-lg"
                        priority
                        fetchPriority="high" />
                </div>
            </div>
        </div>
    );
};

export default MomentSection
