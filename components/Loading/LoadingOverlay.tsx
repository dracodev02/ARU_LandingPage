// components/LoadingOverlay.tsx
"use client";

import React from "react";
import { useLoading } from "@/providers/LoadingProvider";

export default function LoadingOverlay() {
  return (
    <div
      id="loadingOverlay"
      className={`w-full h-full fixed top-0 left-0 z-[9998] bg-black text-white overflow-hidden loading-clippath`}
    >
      <div
        id="text-loading"
        className="absolute z-[9999] left-0 right-0 mx-auto translate3d_title transition-loading"
      >
        <h1 className="text-center uppercase text-[5vw] leading-[1em]">
          Experience
        </h1>
        <h1 className="text-center uppercase text-[5vw] leading-[1em]">
          adventurous
        </h1>
        <h1 className="text-center uppercase text-[5vw] leading-[1em]">
          Journey
        </h1>
        <p className="text-center uppercase text-xl mt-4">
          冒険的な旅を体験する
        </p>
      </div>
    </div>
  );
}
