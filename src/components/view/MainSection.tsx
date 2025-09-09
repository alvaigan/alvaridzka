import Image from "next/image";

const MainSection = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center chivo-font z-10 bg-dark bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y relative">
            <Image
                src={`/main-couple.png`}
                width={0}
                height={0}
                sizes="100%"
                alt="main-couple"
                className="size-full"
                priority
                fetchPriority="high" />

            <div className="flex flex-row justify-center items-center gap-2 my-4 p-5 bg-light rounded-full border-5 border-[#4D412A] shadow-xl">
                <div className="cookie-font text-2xl">Alvaigan</div>
                <div className="cookie-font text-2xl">{`&`}</div>
                <div className="cookie-font text-2xl">Ridzka Nur Fajrie</div>
            </div>
        </div>
    );
};

export default MainSection;
