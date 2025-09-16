"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';

const AttendanceConfirmationSection = () => {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu';

  const handleAttendance = (isAttending: boolean) => {
    const message = isAttending 
      ? `Terima kasih ${guestName}, atas konfirmasi kehadiran Anda. Kami menantikan kedatangan Anda!`
      : `Terima kasih ${guestName}, telah menginformasikan. Kami berharap dapat bertemu dengan Anda lain waktu.`;
    
    alert(message);
  };

  return (
    <section className="py-16 px-4 text-center bg-light chivo-font">
      <h2 className="text-4xl mb-8 cookie-font">Konfirmasi Kehadiran</h2>
      <p className=" mb-6">Mohon konfirmasi kehadiran Anda melalui tombol di bawah ini:</p>
      <div className="flex justify-center space-x-4">
        <button 
          className="btn-white"
          onClick={() => handleAttendance(false)}
        >
          Saya Tidak Bisa Hadir
        </button>
        <button 
          className="btn-primary"
          onClick={() => handleAttendance(true)}
        >
          Saya Akan Hadir
        </button>
      </div>
    </section>
  );
};

export default AttendanceConfirmationSection;
