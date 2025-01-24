"use client";
import { useLoading } from "@/providers/LoadingProvider";
import Game from "./(home)/Game";
import Intro from "./(home)/Intro";
import TheOrigins from "./(home)/TheOrigins";
import { useEffect } from "react";
import GetNFT from "./(home)/GetNFT";

export default function Home() {
  const { isLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
      document.getElementById("text-loading")?.classList.add("loaded");
      document.getElementById("text-container")?.classList.add("loaded");
      document
        .getElementById("loadingOverlay")
        ?.classList.add("loaded-clippath");
    }
  }, [isLoading]);

  return (
    <div>
      <Intro />
      <Game />
      <TheOrigins />
      <GetNFT />
    </div>
  );
}
