import React from "react";

const LoveGiftSection = () => {
  const handleCopy = async (person: string) => {
    let textToCopy = "";
    try {
      if (person == "alva") {
        textToCopy = `
Nama: Alvaigan
Bank: BSI, a/n Alvaigan
No. Rek: 7151917547
WA: +62 857-0303-2511
Alamat: Jl. Babakan Tarogong Gg. Bojong Asih 4, RT 08, RW 04, Kel. Babakan Tarogong, Kec. Bojongloa Kaler, Kota Bandung, Provinsi Jawa Barat, 40232
`;
      } else {
        textToCopy = `
Nama: Ridzka Nur Fajrie
Wallet: Gopay/Dana
No. Wallet: 085871286685
WA: +62 858-7128-6685
Alamat: Jl. Babakan Tarogong Gg. Bojong Asih 3, RT 03, RW 04, Kel. Babakan Tarogong, Kec. Bojongloa Kaler, Kota Bandung, Provinsi Jawa Barat, 40232
`;
      }
      await navigator.clipboard.writeText(textToCopy);
      alert("Nomor rekening berhasil disalin");
    } catch (error) {
      console.error("Gagal menyalin nomor rekening:", error);
    }
  };
  return (
    <section className="py-16 px-4 text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-8 border-b-1 border-black cookie-font">
        Tanda Kasih
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 chivo-font">
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <h3 className="text-xl font-semibold mb-4">Alvaigan</h3>
          <p className="mb-2 text-sm">
            <strong>Bank:</strong> BSI, a/n Alvaigan
          </p>
          <p className="mb-2 text-sm">
            <strong>No. Rek:</strong> 7151917547
          </p>
          <p className="mb-2 text-sm">
            <strong>WA:</strong> +62 857-0303-2511
          </p>
          <p className="mb-2 text-sm">
            <strong>Alamat:</strong> <br /> Jl. Babakan Tarogong Gg. Bojong Asih
            4, RT 08, RW 04, Kel. Babakan Tarogong, Kec. Bojongloa Kaler, Kota
            Bandung, Provinsi Jawa Barat, 40232
          </p>
          <button
            className="mt-4 btn-primary"
            onClick={() => handleCopy("alva")}
          >
            Salin Data
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-left">
          <h3 className="text-xl font-semibold mb-4">Ridzka Nur Fajrie</h3>
          <p className="mb-2 text-sm">
            <strong>Wallet:</strong> Gopay/Dana
          </p>
          <p className="mb-2 text-sm">
            <strong>No. Wallet:</strong> 085871286685
          </p>
          <p className="mb-2 text-sm">
            <strong>WA:</strong> +62 858-7128-6685
          </p>
          <p className="mb-2 text-sm">
            <strong>Alamat:</strong> <br /> Jl. Babakan Tarogong Gg. Bojong Asih
            3, RT 03, RW 04, Kel. Babakan Tarogong, Kec. Bojongloa Kaler, Kota
            Bandung, Provinsi Jawa Barat, 40232
          </p>
          <button className="mt-4 btn-primary" onClick={() => handleCopy("ridzka")}>Salin Data</button>
        </div>
      </div>
    </section>
  );
};

export default LoveGiftSection;
