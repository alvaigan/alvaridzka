"use client";

import { useState, useEffect } from "react";
import MainSection from "@/components/view/MainSection";
import OpenerSection from "@/components/view/OpenerSection";
import LoadingScreen from "@/components/LoadingScreen";
import CoupleSection from "@/components/view/CoupleSection";
import QuoteSection from "@/components/view/QuoteSection";
import EventSection from "@/components/view/EventSection";
import MomentSection from "@/components/view/MomentSection";
import WishSection from "@/components/view/WishSection";
import ThankSection from "@/components/view/ThankSection";
import FooterSection from "@/components/view/FooterSection";
import FirstParallaxSection from "@/components/FirstParallaxSection";
import SecondParallaxSection from "@/components/SecondParallaxSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showOpener, setShowOpener] = useState(true);

  useEffect(() => {
    // Function to hide loading screen
    const hideLoadingScreen = () => {
      setLoading(false);
    };

    // Hide loading screen when page fully loads
    if (document.readyState === "complete") {
      hideLoadingScreen();
    } else {
      window.addEventListener("load", hideLoadingScreen);
    }

    // Fallback: hide after 3 seconds if load event doesn't fire
    const fallbackTimer = setTimeout(hideLoadingScreen, 3000);

    return () => {
      window.removeEventListener("load", hideLoadingScreen);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleOpenInvitation = () => {
    setShowOpener(false);
  };

  return (
    <>
      <LoadingScreen isVisible={loading} />
      <div className="flex flex-col justify-center items-center bg-gray-300">
        <div className="flex flex-col justify-center min-w-full sm:min-w-full md:min-w-lg md:max-w-lg bg-[#ECDCCB]">
          {showOpener ? (
            <OpenerSection onOpen={handleOpenInvitation} />
          ) : (
            <>
              <MainSection />
                <FirstParallaxSection />
              <CoupleSection />
                <SecondParallaxSection />
              <QuoteSection />
              <EventSection />
              <MomentSection />
              <WishSection />
              <ThankSection />
              <FooterSection />
            </>
          )}
        </div>
      </div>
    </>
  );
}
