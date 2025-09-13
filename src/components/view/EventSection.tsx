"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ConfettiIcon, UsersIcon } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const EventSection = () => {
    const eventContainer = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const locationRefs = useRef<HTMLDivElement[]>([]);

    // Add card ref to the array
    const addToCardsRef = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    // Add location ref to the array
    const addToLocationRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !locationRefs.current[index]) {
            locationRefs.current[index] = el;
        }
    };

    useGSAP(
        () => {
            if (!eventContainer.current) return;

            // Set initial states
            gsap.set([titleRef.current, descRef.current, ...cardsRef.current], {
                opacity: 0,
                y: 20,
            });

            // Create a timeline for the main animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: eventContainer.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            // Add animations to timeline
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
            }).to(
                descRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.4",
            );

            // Animate cards with stagger
            tl.to(
                cardsRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    onComplete: () => {
                        // Animate icons inside the cards
                        gsap.from(".event-icon", {
                            scale: 0,
                            rotate: 180,
                            duration: 1,
                            stagger: 0.2,
                            ease: "elastic.out(1, 0.5)",
                        });
                    },
                },
                "-=0.3",
            );

            // Infinite looping animation for the background
            gsap.to(".bg-img", {
                scale: 1.1,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Add hover effects to cards
            cardsRef.current.forEach((card) => {
                const hoverTimeline = gsap.timeline({ paused: true });
                hoverTimeline.to(card, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out",
                });

                card.addEventListener("mouseenter", () => hoverTimeline.play());
                card.addEventListener("mouseleave", () => hoverTimeline.reverse());
            });

            // Animate location sections with parallax effect
            locationRefs.current.forEach((loc, index) => {
                if (!loc) return;

                gsap.fromTo(
                    loc,
                    { y: 50 + index * 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: loc,
                            start: "top 90%",
                            end: "top 50%",
                            scrub: true,
                            toggleActions: "play none none none",
                        },
                    },
                );
            });
        },
        { scope: eventContainer },
    );

    return (
        <div className="flex flex-col pt-5 pb-20 gap-10 relative bg-black">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={`/bg-img-1.png`}
                    width={0}
                    height={0}
                    sizes="100%"
                    alt="bg-decoration"
                    className="bg-img w-full h-auto object-cover"
                    priority
                    fetchPriority="high"
                />
            </div>
            <div
                ref={eventContainer}
                className="flex flex-col items-center gap-4 text-white z-10 w-full min-h-screen px-5 relative overflow-y-visible"
            >
                <div
                    className="flex flex-col justify-center items-center gap-4"
                    id="event"
                >
                    <h1
                        ref={titleRef}
                        className="text-4xl cookie-font text-center border-b border-white"
                    >
                        Acara
                    </h1>
                    <p
                        ref={descRef}
                        className="text-lg chivo-font text-center max-w-2xl px-4"
                    >
                        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala,
                        insyaAllah kami akan menyelenggarakan acara:
                    </p>
                    <div className="flex flex-col justify-center items-center gap-6 chivo-font w-full max-w-2xl px-4">
                        <div
                            ref={addToCardsRef}
                            className="p-8 rounded-2xl border-2 border-white/80 shadow-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 w-full transform hover:shadow-2xl hover:border-white"
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                <UsersIcon
                                    className="inline mr-2 event-icon"
                                    weight="duotone"
                                />
                                Akad Nikah{" "}
                            </h2>
                            <p className="text-xl">Sabtu, 04 Oktober 2025</p>
                            <p className="text-sm">Pukul 08.00 WIB - Selesai</p>
                        </div>
                        <div
                            ref={addToCardsRef}
                            className="p-8 rounded-2xl border-2 border-white/80 shadow-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 w-full transform hover:shadow-2xl hover:border-white"
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                <ConfettiIcon
                                    className="inline mr-2 event-icon"
                                    weight="duotone"
                                />
                                Resepsi
                            </h2>
                            <p className="text-xl">Sabtu, 04 Oktober 2025</p>
                            <p className="text-sm">Pukul 11.00 WIB - Selesai</p>
                        </div>
                    </div>
                </div>

                <div
                    ref={(el) => addToLocationRefs(el, 0)}
                    className="flex flex-col justify-center items-center gap-4 py-10"
                    id="location"
                >
                    <h1 className="text-4xl cookie-font text-center border-b border-white chivo-font">
                        Alamat Lokasi
                    </h1>
                    <p className="text-xl text-center max-w-2xl px-4">
                        Gedung Hasri Ainun Habibie, Jl. Kapten Tata Natanegara, Pajajaran,
                        Kec. Cicendo, Kota Bandung, Jawa Barat 40173
                    </p>
                </div>

                <div
                    ref={(el) => addToLocationRefs(el, 1)}
                    className="flex flex-col justify-center items-center gap-4 py-10 w-full"
                >
                    <h1 className="text-4xl cookie-font text-center border-b border-white chivo-font">
                        Peta Lokasi
                    </h1>
                    <div className="w-full rounded-xl backdrop-blur-sm border border-white/20">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9284458798325!2d107.58256397608649!3d-6.8991613675185075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76c9754f88d%3A0x843445b18b1002b3!2sHasri%20Ainun%20Habibie%20Convention%20Hall!5e0!3m2!1sen!2sid!4v1757786876495!5m2!1sen!2sid"
                            width="600"
                            height="300"
                            style={{ border: 0 }}
                            className="w-full rounded-2xl"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSection;
