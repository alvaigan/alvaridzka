"use client";

import React, { useEffect, useState } from "react";
import { useGuestName } from "@/hooks/useGuestName";
import { confirmGuest, isGuestConfirm } from "@/app/actions";

const AttendanceConfirmationContent = () => {
  const guestName = useGuestName();
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [attendance, setAttendance] = useState<boolean>(false);

  useEffect(() => {
    if (guestName) {
      isGuestConfirm(guestName).then((isConfirmed) => {
        console.log("isConfirmed", isConfirmed);
        if (isConfirmed) {
          setConfirmed(true);
        }
      });
    }
  }, []);

  const handleAttendance = (isAttending: boolean) => {
    if (confirmed) {
      return;
    }

    const message = isAttending
      ? `Terima kasih ${guestName}, atas konfirmasi kehadiran Anda. Kami menantikan kedatangan Anda!`
      : `Terima kasih ${guestName}, telah menginformasikan. Kami berharap dapat bertemu dengan Anda lain waktu.`;

    !confirmed &&
      confirmGuest(guestName, isAttending)
        .then((data: any) => {
          setConfirmed(true);
          setAttendance(isAttending);

          alert(message);
        })
        .catch((error) => {
          console.log(error);
          alert("Terjadi kesalahan saat mengirim konfirmasi kehadiran.");
        });
  };

  return (
    <section className="py-16 px-4 text-center bg-light chivo-font">
      <h2 className="text-4xl mb-8 cookie-font">Konfirmasi Kehadiran</h2>
      {confirmed && (
        <div className="flex justify-center bg-[#4D412A] text-white p-4 my-3 rounded-lg">
          <div className="flex flex-col items-center">
            <p className="text-sm">
              Terima Kasih <span className="font-semibold">{guestName}</span> Atas Konfirmasi Kehadiran Anda
            </p>
          </div>
        </div>
      )}

      <p className=" mb-6">
        Mohon konfirmasi kehadiran Anda melalui tombol di bawah ini:
      </p>
      <div className="flex justify-center space-x-4">
        <button
          className={`btn-white ${confirmed ? "disabled" : ""}`}
          onClick={() => handleAttendance(false)}
        >
          Saya Tidak Bisa Hadir
        </button>
        <button
          className={`btn-primary ${confirmed ? "disabled" : ""}`}
          onClick={() => handleAttendance(true)}
        >
          Saya Akan Hadir
        </button>
      </div>
    </section>
  );
};

const AttendanceConfirmationSection = () => {
  return <AttendanceConfirmationContent />;
};

export default AttendanceConfirmationSection;
