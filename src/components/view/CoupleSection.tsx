"use client"

const CoupleSection = () => {
    return (
        <div className="flex flex-col bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y px-5 pt-5 pb-20 gap-10">
            <h1 className="text-center aref-font text-5xl my-15">بِسْمِ ٱللّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</h1>
            <p className="text-center chivo-font text-lg">
                Dengan penuh rasa syukur dan kerendahan hati, kami mengundang
                Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada hari
                bahagia kami:
            </p>
            <div className="flex flex-col justify-center items-center gap-2 my-4 p-5 bg-light rounded-4xl border-5 border-[#4D412A] shadow-xl">
                <h1 className="cookie-font text-4xl">Alvaigan</h1>
                <p className="text-lg">Putra ke-2 dari keluarga:</p>
                <p className="font-bold text-lg">{`Asep Suhendar (alm.) & Rohaeti`}</p>
            </div>

            <div className="inline-flex justify-center items-center playfair-font gap-2 text-7xl">
                <div className="border-t border-[#4D412A] w-1/4"></div>
                {`&`}
                <div className="border-t border-[#4D412A] w-1/4"></div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-4 p-5 bg-light rounded-4xl border-5 border-[#4D412A] shadow-xl">
                <h1 className="cookie-font text-4xl">Ridzka Nur Fajrie</h1>
                <p className="text-lg">Putri ke-1 dari keluarga:</p>
                <p className="font-bold text-lg">{`Suparman, S.Pd. & Suprapti, S.Pd, M.M.`}</p>
            </div>
        </div>
    );
};

export default CoupleSection;
