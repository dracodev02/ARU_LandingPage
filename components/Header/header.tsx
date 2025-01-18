"use client";
import Link from "next/link";
import { useEffect } from "react";
import logoAru from "@/assets/logoAru.svg";
import Image from "next/image";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  useEffect(() => {
    const scollScale = () => {
      const header = document.getElementById("header");
      if (header) {
        window.scrollY > 100
          ? (header.style.fontSize = "0.7em")
          : (header.style.fontSize = "1em");
      }
    };
    window.addEventListener("scroll", scollScale);
    return () => window.removeEventListener("scroll", scollScale);
  }, []);

  return (
    <div
      id="header"
      className="fixed top-[1em] w-full transition-all duration-500 z-10"
    >
      <div className="w-[12em] absolute left-[1em]">
        <p>あるあるの世界</p>
        <p>
          <span className="block">Farm, Tame</span>
          <span className="block">Fight in a pixelated open world</span>
        </p>
        <Image
          src={logoAru}
          alt="logoAru"
          width={100}
          height={100}
          className="w-[4em] mt-1"
        />
      </div>
      <div className="absolute flex flex-col gap-y-[0.5em] right-[1em]">
        <Link href="#" className="font-bold uppercase text-end">
          Home
        </Link>
        <Link href="#" className="font-bold uppercase text-end">
          Game
        </Link>
        <Link href="#" className="font-bold uppercase text-end">
          Contact
        </Link>
        <div className="flex justify-end gap-[0.2em]">
          <Link href="#">
            <FaXTwitter />
          </Link>
          <Link href="#">
            <FaTelegram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
