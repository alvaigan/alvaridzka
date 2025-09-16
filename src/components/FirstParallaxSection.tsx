"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FirstParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (sectionRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 40, // how much the image moves
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%", // when section enters viewport
          end: "bottom 0%", // when section leaves viewport
          scrub: true, // smooth scrubbing
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center"
    >

      <Image 
        ref={imageRef}
        src={`/img-2.JPG`}
        width={0}
        height={0}
        sizes="100%"
        alt="bg-decoration"
        className="size-full absolute top-0 left-0 object-cover bg-center inset-shadow-md absolute"
        priority
        fetchPriority="high" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 chivo-font backdrop-blur">
        {/* <h1 className="text-5xl font-bold mb-4">Pernikahan</h1> */}
        <p className="text-lg max-w-xl mx-auto">
          "Pernikahan bukanlah tentang menemukan seseorang untuk hidup bersama,
          tetapi tentang menemukan seseorang yang membantu kita menuju surga"
        </p>
      </div>
    </section>
  );
}
