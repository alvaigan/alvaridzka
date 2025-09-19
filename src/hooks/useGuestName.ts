"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useGuestName = () => {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    if (searchParams) {
      const name = searchParams.get("to");
      if (name) {
        setGuestName(decodeURIComponent(name));
      }
    }
  }, []);

  return guestName;
};
