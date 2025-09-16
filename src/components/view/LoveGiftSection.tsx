import React from 'react';

const LoveGiftSection = () => {
  return (
    <section className="py-16 px-4 text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-8 border-b-1 border-black cookie-font">Tanda Kasih</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 chivo-font">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Alvaigan</h3>
          <p className="mb-2">Bank: BCA</p>
          <p className="mb-2">Account Number: 1234567890</p>
          <p className="mb-2">Phone: +62 812 3456 7890</p>
          <p className="mb-2">Address: Jakarta, Indonesia</p>
          <button className="mt-4 btn-primary">Salin Nomor Rekening</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Ridzka Nur Fajrie</h3>
          <p className="mb-2">Bank: Mandiri</p>
          <p className="mb-2">Account Number: 0987654321</p>
          <p className="mb-2">Phone: +62 812 9876 5432</p>
          <p className="mb-2">Address: Jakarta, Indonesia</p>
          <button className="mt-4 btn-primary">Salin Nomor Rekening</button>
        </div>
      </div>
    </section>
  );
};

export default LoveGiftSection;
