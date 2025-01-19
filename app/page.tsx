"use client";
import { useLoading } from "@/providers/LoadingProvider";
import Game from "./(home)/Game";
import Intro from "./(home)/Intro";
import TheOrigins from "./(home)/TheOrigins";
import { useEffect } from "react";

export default function Home() {
  const { isLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
    } else {
      document.getElementById("text-loading")?.classList.add("loaded");
      document.getElementById("text-container")?.classList.add("loaded");
      document
        .getElementById("loadingOverlay")
        ?.classList.add("loaded-clippath");
      setTimeout(() => {}, 1000); // hoàn thành animation mới được scroll
    }
  }, [isLoading]);

  return (
    <div>
      {/* <video src="/videos/BrandFootage1.mp4" autoPlay loop muted /> */}
      <Intro />
      <TheOrigins />
      <Game />
      {/* <div className="bg-red-400 h-[2000px] w-full"></div> */}
    </div>
  );
}
