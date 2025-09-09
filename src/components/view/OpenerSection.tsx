import { DotOutlineIcon, EnvelopeOpenIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";

const OpenerSection = () => {
    return (
        <div className="flex flex-col min-h-screen justify-between chivo-font z-50 lg bg-[#ECDCCB]">
            <Image
                src={`/flower-1.svg`}
                width={0}
                height={0}
                sizes="100%"
                alt="flower-1"
                className="w-full h-full"
                priority
                fetchPriority="high"
            />
            <div className="flex flex-col justify-center items-center flex-grow">
                <div className="flex flex-col items-end">
                <div className="font-medium italic text-3xl">Undangan Pernikahan:</div>
                <div className="cookie-font text-5xl">Alvaigan</div>
                <div className="cookie-font text-5xl">Ridzka Nur Fajrie</div>
                <div className="flex flex-row items-center text-base">
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
            <div className="text-center mb-10">
                <p>Kepada Yth Bapak/Ibu/Saudara/i</p>
                <h2 className="text-2xl font-medium">John Doe bin Smith</h2>
            </div>
            <div className="m-4">
                <button className="btn-primary w-full">Buka Undangan <EnvelopeOpenIcon size={20} weight="duotone" className="ml-2" /></button>
            </div>
        </div>
    );
};

export default OpenerSection;
