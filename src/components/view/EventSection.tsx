const EventSection = () => {
    return (
        <div className="flex flex-col bg-[url('/bg-decoration.svg')] bg-cover bg-center bg-repeat-y px-5 pt-5 pb-20 gap-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl cookie-font text-center border-b border-[#4D412A] chivo-font">Acara</h1>
                <p className=" text-lg">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah kami akan menyelenggarakan acara:</p>
                <div className="flex flex-col justify-center items-center gap-4 chivo-font">
                    <div className="p-10 bg-light rounded-4xl border-5 border-[#4D412A] shadow-xl">
                        <h2 className="text-2xl font-bold">Akad Nikah</h2>
                        <p className="text-lg">Pukul 08.00 WIB - Selesai</p>
                    </div>
                    <div className="p-10 bg-light rounded-4xl border-5 border-[#4D412A] shadow-xl">
                        <h2 className="text-2xl font-bold">Resepsi</h2>
                        <p className="text-lg">Pukul 11.00 WIB - Selesai</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventSection;
