"use client";

import { DotOutlineIcon, EnvelopeOpenIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { useState, useEffect } from "react";

const OpenerSection = ({ onOpen }: { onOpen: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleOpen = () => {
        setIsVisible(false);
        // Delay the callback to allow for transition animation
        setTimeout(() => {
            onOpen();
        }, 500);
    };

    // Prevent scrolling when the opener is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="flex flex-col min-h-screen justify-between chivo-font z-50 lg bg-[#ECDCCB] transition-opacity duration-500 ease-in-out relative overflow-auto">
            <Image
                src={`/flower-1.svg`}
                width={0}
                height={0}
                sizes="100%"
                alt="flower-1"
                className="size-max top-0 left-0 absolute z-10"
                priority
                fetchPriority="high"
            />
            <div className="flex flex-col justify-center items-center flex-grow z-50">
                <div className="flex flex-col items-end">
                    <div className="font-medium italic text-3xl sm:text-2xl">
                        Undangan Pernikahan:
                    </div>
                    <div className="cookie-font text-5xl sm:text-3xl">Alvaigan</div>
                    <div className="cookie-font text-5xl sm:text-3xl">
                        Ridzka Nur Fajrie
                    </div>
                    <div className="flex flex-row items-center text-base sm:text-sm">
                        <div>Bandung</div>
                        <div>
                            <DotOutlineIcon size={16} weight="fill" color="black" />
                        </div>
                        <div>04</div>
                        <div>
                            <DotOutlineIcon size={16} weight="fill" color="black" />
                        </div>
                        <div>Oktober</div>
                        <div>
                            <DotOutlineIcon size={16} weight="fill" color="black" />
                        </div>
                        <div>2025</div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-10 z-50">
                <p className="sm:text-sm">Kepada Yth Bapak/Ibu/Saudara/i</p>
                <h2 className="text-2xl sm:text-xl font-medium">John Doe bin Smith</h2>
            </div>
            <div className="m-4 sm:m-1 z-50">
                <button
                    onClick={handleOpen}
                    className="btn-primary w-full sm:text-sm"
                >
                    Buka Undangan{" "}
                    <EnvelopeOpenIcon size={20} weight="duotone" className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default OpenerSection;
