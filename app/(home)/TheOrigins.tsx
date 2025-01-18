"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import example1 from "@/assets/example1.png";

const TheOrigins = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sec2 = document.getElementById("sec2");
    const sec2Items = gsap.utils.toArray(".sec-2-item");
    const sec2Container = document.getElementById("sec2-container");

    if (sec2 && sec2Items && sec2Container) {
      sec2.style.maxWidth = window.innerWidth + "px";

      // gsap.to(sec2Container, {
      //   scrollTrigger: {
      //     pin: true,
      //     start: "top top",
      //     end: "bottom bottom",
      //   },
      // });

      gsap.to(sec2Items, {
        x: "60em",
        y: "30em",
        scale: 0.6,
        rotate: "-27deg",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec2Container,
          pin: true,
          scrub: true,
          start: "center center",
          end: "+=" + sec2?.offsetWidth,
        },
      });

      sec2Items.forEach((item: any, index) => {
        tl.to(
          item,
          {
            x: "0em",
            y: "0em",
            scale: 1,
            rotate: "0deg",
            ease: "none",
          },
          (1 / sec2Items.length) * index
        );

        tl.to(
          item,
          {
            x: "-60em",
            y: "-30em",
            scale: 0.6,
            rotate: "27deg",
            ease: "none",
          },
          (1 / sec2Items.length) * index + 0.5
        );
      });
    }
  }, []);

  return (
    <div id="sec2-container" className="relative mt-[15rem]">
      <div className="mx-auto w-fit -translate-y-[5em]">
        <h2 className="text-[12em] text-center uppercase leading-[1em] w-fit">
          the origins
        </h2>
        <p className="text-end text-[1.5em]">//Coming soon//</p>
      </div>
      <div id="sec2" className="relative h-[318px] max-h-[318px]">
        <div className="absolute sec-2-item w-[35%] group border grid place-items-center top-0 left-0 right-0 mx-auto">
          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[6deg] scale-[0.8]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[15deg] scale-[0.6]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full group-hover:scale-[0.4] group-hover:rotate-[20deg] transition-all duration-700"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute sec-2-item w-[35%] group border grid place-items-center top-0 left-0 right-0 mx-auto">
          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[6deg] scale-[0.8]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[15deg] scale-[0.6]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full group-hover:scale-[0.4] group-hover:rotate-[20deg] transition-all duration-700"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute sec-2-item w-[35%] group border grid place-items-center top-0 left-0 right-0 mx-auto">
          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[6deg] scale-[0.8]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[15deg] scale-[0.6]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full group-hover:scale-[0.4] group-hover:rotate-[20deg] transition-all duration-700"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute sec-2-item w-[35%] group border grid place-items-center top-0 left-0 right-0 mx-auto">
          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[6deg] scale-[0.8]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[15deg] scale-[0.6]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full group-hover:scale-[0.4] group-hover:rotate-[20deg] transition-all duration-700"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute sec-2-item w-[35%] group border grid place-items-center top-0 left-0 right-0 mx-auto">
          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[6deg] scale-[0.8]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full rotate-[15deg] scale-[0.6]"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="absolute w-full h-full group-hover:scale-[0.4] group-hover:rotate-[20deg] transition-all duration-700"
            width={1000}
            height={1000}
          />

          <Image
            src={example1}
            alt="example1"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default TheOrigins;
