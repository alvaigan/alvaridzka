const QuoteSection = () => {
    return (<div className="flex flex-col bg-dark px-5 py-10">
        <div className="flex flex-col px-5 py-20 rounded-4xl bg-[#B48673] gap-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl cookie-font text-center">Allah Subhanahu Wa Ta'ala berfirman</h1>
                <div className="w-1/3 border-1.5 border-t border-[#4D412A]"></div>
            </div>
            <div className="flex flex-col gap-4 chivo-font text-lg">
                <p>Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).</p>
                <p className="font-bold">QS. Adh-Dhariyat: 49</p>
            </div>
                <div className="w-1/3 border-1.5 border-t border-[#4D412A]"></div>
            <div className="flex flex-col gap-4 chivo-font text-lg">
                <p>dan sesungguhnya Dialah yang menciptakan pasangan laki-laki dan perempuan,</p>
                <p className="font-bold">QS. An-Najm: 45</p>
            </div>
        </div>
    </div>)
};

export default QuoteSection;
