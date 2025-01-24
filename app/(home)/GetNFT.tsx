import Marquee from "react-fast-marquee";
import Image from "next/image";
import arrowPixel from "@/public/assets/arrowpixel.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GetNFT = () => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // const sliderNft = document.getElementById("slider-nft");
    // if (sliderNft) {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: sliderNft,
    //       start: "top center",
    //       end: "+=" + sliderNft?.offsetHeight,
    //       scrub: true,
    //     },
    //   });
    //   tl.to(
    //     sliderNft,
    //     {
    //       x: "-100%",
    //     },
    //     0
    //   );
    // }
  }, []);

  return (
    <div className="bg-[#34FF7B] py-[2em]">
      <div className="w-full py-2 bg-[#34FF7B] z-[0] left-0 top-[65.9375em]">
        <Marquee className="uppercase">
          <div className="mx-6">
            <h1 className="uppercase text-[36px] text-black">Get the nft</h1>
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
              join the IP wolrd
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
            <h1 className="uppercase text-[36px] text-black">Get the nft</h1>
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
              join the IP wolrd
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
            <h1 className="uppercase text-[36px] text-black">Get the nft</h1>
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
              join the IP wolrd
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
      <Marquee direction="right" className="flex py-[4em] gap-[1em]">
        {Array.from({ length: 10 }, (_, i) => (
          <Image
            src={"/assets/nft-demo.png"}
            alt=""
            width={1000}
            height={1000}
            key={i}
            className={`w-[200px] h-[200px] shadow-img ${
              i % 2 == 0 ? "rotate-12" : "-rotate-12"
            }`}
          />
        ))}
      </Marquee>
      <p className="uppercase text-center underline text-black">get it now!</p>
    </div>
  );
};

export default GetNFT;
