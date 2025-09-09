"use client"

const QuotesSection = () => {
    return (
        <div className="flex flex-col bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y p-5 gap-10">
            <h1 className="text-center aref-font text-5xl my-15">بِسْمِ ٱللّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</h1>
            <p className="text-center chivo-font">
                Dengan penuh rasa syukur dan kerendahan hati, kami mengundang
                Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada hari
                bahagia kami:
            </p>
            <div className="flex flex-col justify-center items-center gap-2 my-4 p-5 bg-light rounded-4xl border-5 border-[#4D412A] shadow-xl">
                <h1 className="cookie-font text-4xl">Alvaigan</h1>
                <p>Putra ke-2 dari keluarga:</p>
                <p className="font-bold">{`Asep Suhendar (alm.) & Rohaeti`}</p>
            </div>

            <div className="inline-flex justify-center items-center playfair-font gap-2 text-7xl">
                <div className="border-t border-[#4D412A] w-1/4"></div>
                {`&`}
                <div className="border-t border-[#4D412A] w-1/4"></div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-4 p-5 bg-light rounded-4xl border-5 border-[#4D412A] shadow-xl">
                <h1 className="cookie-font text-4xl">Ridzka Nur Fajrie</h1>
                <p>Putri ke-1 dari keluarga:</p>
                <p className="font-bold">{`Suparman, S.Pd. & Suprapti, S.Pd, M.M.`}</p>
            </div>
        </div>
    );
};

export default QuotesSection;
