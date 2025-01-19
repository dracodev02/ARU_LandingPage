"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team1 from "@/public/assets/team_1.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import arrowPixel from "@/public/assets/arrowpixel.svg";
import example1 from "@/public/assets/example1.png";
import { useLoading } from "@/providers/LoadingProvider";

const Intro = () => {
  const { isLoading } = useLoading();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const introSec = document.getElementById("introSec");
    const textContainer = document.getElementById("text-container");
    const team1 = document.getElementById("team1");
    const slogen = document.getElementById("slogen");
    const theStoryText = document.getElementById("theStoryText");

    const theStoryShowCase = document.getElementById("theStoryShowCase");
    const theStoryShowCaseItems = gsap.utils.toArray(".theStoryShowCaseItem");

    const textShowCase = document.getElementById("text-showCase");
    const spanShowCase = gsap.utils.toArray(".spanShowCase");

    if (
      introSec &&
      textContainer &&
      team1 &&
      slogen &&
      theStoryText &&
      theStoryShowCase &&
      theStoryShowCaseItems &&
      textShowCase &&
      spanShowCase
    ) {
      // gsap.to(textContainer, {
      //   y: 0,
      //   ease: "power1.out",
      // });

      gsap.to(theStoryShowCaseItems, {
        opacity: 0,
        ease: "power1.in",
      });

      gsap.to(spanShowCase, {
        x: "50px",
        opacity: 0,
        ease: "power1.in",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introSec,
          start: "top top",
          end: "+=" + introSec?.offsetHeight,
        },
      });

      // tl.to(textContainer, {
      //   y: () => +(introSec.offsetHeight * 0.4), // Điều chỉnh tỷ lệ để kiểm soát tốc độ
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: introSec,
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: true, // Liên kết animation với scroll
      //   },
      // });

      tl.to(team1, {
        y: () => +(introSec.offsetHeight * 0.6), // Điều chỉnh tỷ lệ để kiểm soát tốc độ
        ease: "none",
        scrollTrigger: {
          trigger: introSec,
          start: "top top",
          end: "bottom top",
          scrub: true, // Liên kết animation với scroll
        },
      });

      tl.to(theStoryText, {
        y: () => +(introSec.offsetHeight * 0.2), // Điều chỉnh tỷ lệ để kiểm soát tốc độ
        ease: "none",
        scrollTrigger: {
          trigger: introSec,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const tl2 = gsap.timeline({
        ease: "power1.in",
        scrollTrigger: {
          trigger: theStoryShowCase,
          start: "top bottom",
          end: "+=" + theStoryShowCase.offsetHeight,
          scrub: true,
        },
      });

      theStoryShowCaseItems.forEach((item: any, index) => {
        tl2.to(
          item,
          {
            stagger: 0.3,
            opacity: 1,
            ease: "power1.in",
          },
          (1 / theStoryShowCaseItems.length) * index
        );
      });

      const tl3 = gsap.timeline({
        ease: "power1.in",
        scrollTrigger: {
          trigger: textShowCase,
          start: "top center",
          end: "+=" + textShowCase.offsetHeight,
          scrub: true,
        },
      });

      spanShowCase.forEach((item: any, index) => {
        tl3.to(
          item,
          {
            stagger: 0.5,
            x: "0px",
            opacity: 1,
            ease: "power1.in",
          },
          (1 / spanShowCase.length) * index
        );
      });
    }
  }, []);

  return (
    <>
      <div id="introSec" className="relative">
        <div
          id="text-container"
          className={`absolute z-[1] left-0 right-0 mx-auto translate3d_title transition-loading`}
        >
          <h1 className="text-center uppercase text-[5vw] leading-[1em] text-white w-fit mx-auto">
            Experience
          </h1>
          <h1 className="text-center uppercase text-[5vw] leading-[1em] text-[#f3e549] w-fit mx-auto">
            adventurous
          </h1>
          <h1 className="text-center uppercase text-[5vw] leading-[1em] gradient-text-title w-fit mx-auto">
            Journey
          </h1>
          <p className="text-center uppercase text-xl mt-4">
            冒険的な旅を体験する
          </p>
        </div>
        <div
          id="sec1Marquee"
          className="w-full py-2 bg-[#34FF7B] absolute z-[0] left-0 top-[65.9375em]"
        >
          <Marquee className="uppercase">
            <div className="mx-6">
              <h1 className="text-[36px] text-black">Build on Abstract</h1>
            </div>
            <div className="mx-6">
              <Image
                src={arrowPixel.src}
                alt="arrowPixel"
                width={48}
                height={48}
                className="h-full aspect-square"
              />
            </div>
            <div className="mx-6">
              <h1 className="text-[36px] text-black italic font-medium">
                Pixelated Open-World
              </h1>
            </div>
            <div className="mx-6">
              <Image
                src={arrowPixel.src}
                alt="arrowPixel"
                width={48}
                height={48}
                className="h-full aspect-square"
              />
            </div>
            <div className="mx-6">
              <h1 className="text-[36px] text-black">Build on Abstract</h1>
            </div>
            <div className="mx-6">
              <Image
                src={arrowPixel.src}
                alt="arrowPixel"
                width={48}
                height={48}
                className="h-full aspect-square"
              />
            </div>

            <div className="mx-6">
              <h1 className="text-[36px] text-black italic font-medium">
                Pixelated Open-World
              </h1>
            </div>
            <div className="mx-6">
              <Image
                src={arrowPixel.src}
                alt="arrowPixel"
                width={48}
                height={48}
                className="h-full aspect-square"
              />
            </div>
            <div className="mx-6">
              <h1 className="text-[36px] text-black">Build on Abstract</h1>
            </div>

            <div className="mx-6">
              <Image
                src={arrowPixel.src}
                alt="arrowPixel"
                width={48}
                height={48}
                className="h-full aspect-square"
              />
            </div>
            <div className="mx-6">
              <h1 className="text-[36px] text-black italic font-medium">
                Pixelated Open-World
              </h1>
            </div>
            <div className="mx-6">
              <Image
                src={arrowPixel.src}
                alt="arrowPixel"
                width={48}
                height={48}
                className="h-full aspect-square"
              />
            </div>
          </Marquee>
        </div>
        <div
          id="team1"
          className="absolute inline-block w-[69em] right-[-2.875em] top-[20.75em] z-[0]"
        >
          <Image
            src={team1}
            alt="team1"
            className="w-full"
            width={1000}
            height={1000}
          />
        </div>

        <div id="slogen" className="pt-[89.125em] relative flex">
          <h2
            id="theStoryText"
            className="absolute top-[74.125em] uppercase w-full"
          >
            <span className="text-[2.5rem]">The story</span>
          </h2>
          <div className="flex flex-col gap-y-10 max-w-[70%] ml-[15.8333em]">
            <h2 className="p-2 w-fit uppercase text-[1vw]">
              Farm, tame, and fight in a pixelated open world! Aru World lets
              you grow crops, befriend beasts, and battle enemies. Built fully
              on-chain with @AbstractChain
            </h2>
            <h2 className="uppercase text-center text-[2vw] border p-2 w-fit bg-white text-black">
              Grow crops, fruit, trees
            </h2>
            <h2 className="uppercase text-center text-[2vw] border p-2 w-fit bg-white text-black">
              Craft weapons and chances to get mythical items
            </h2>
            <h2 className="uppercase text-center text-[2vw] border p-2 w-fit bg-white text-black">
              solely Explore dungeons, or with your team
            </h2>
            <h2 className="uppercase text-center text-[2vw] border p-2 w-fit bg-white text-black">
              Be the top and conquer others
            </h2>
          </div>
        </div>
      </div>
      <div id="theStoryShowCase" className="mt-[-.625em] relative z-[1]">
        <Image
          src={example1}
          alt="example1"
          className="theStoryShowCaseItem opacity-0 w-[30%] ml-[25em] mb-[1em]"
          width={1000}
          height={1000}
        />

        <Image
          id="theStoryShowCase2"
          src={example1}
          alt="example1"
          className="theStoryShowCaseItem opacity-0 w-[40%] ml-[30em] mb-[-3%]"
          width={1000}
          height={1000}
        />

        <div
          id="theStoryShowCase3"
          className="theStoryShowCaseItem opacity-0 relative w-[50%] ml-[35em] group"
        >
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

        <div id="text-showCase" className="-mt-[14em]">
          <div className="mb-[4em] max-w-[25%] ml-[6em]">
            <p className="uppercase">
              <span className="spanShowCase block">Dungeon play</span>

              <span className="spanShowCase block">Level up your skills</span>

              <span className="spanShowCase block">earn rewards</span>

              <span className="spanShowCase block">be the legends</span>
            </p>
          </div>
          <div>
            <p className="uppercase ml-[8em]">
              <span className="spanShowCase block">
                Full of mechanism to play your way
              </span>

              <span className="ml-[4em] spanShowCase block">
                Get hype with your fav. Characters
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
