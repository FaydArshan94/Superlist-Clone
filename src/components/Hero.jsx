import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const newBadgeRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.7"
      )
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(ctaRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        clearProps: "transform",
      })
      .fromTo(
        newBadgeRef.current,
        { y: -10, scale: 0.8, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          clearProps: "transform",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section className="relative  bg-gradient-to-br from-[#0d0c1b] via-[#131321] to-[#1a1a2e] flex items-center justify-center px-4 overflow-hidden">
      {/* Top Left Glow Blob */}
      

      {/* Text content */}
      <div className="relative h-screen mt-20 z-10 max-w-3xl text-center text-white px-2 sm:px-4">
        {/* Top Badge */}
        <div
          ref={newBadgeRef}
          className="inline-flex items-center px-4 cursor-pointer py-1.5 mb-10 font-semibold font-['Haffer'] text-white bg-white/5 border border-white/10  rounded-full hover:-rotate-1 hover:scale-105 transition-transform duration-200 shadow shadow-white/5"
        >
          <span className="text-[10px] font-bold px-2 py-0.5 mr-2 rounded-full bg-[#867bff] text-white">
            NEW
          </span>
          <span className="text-white text-md">
            Introducing AI Meeting Notes in Superlist
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-['HafferSemiBold'] leading-tighter tracking-tight"
        >
          Stay on top
          <br />
          <span
            ref={subtitleRef}
            className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent italic px-2 sm:px-4 text-[3rem] sm:text-7xl md:text-8xl font-['HafferSemiBold']"
          >
            of everything
          </span>
        </h1>

        {/* Description */}
        <p
          ref={textRef}
          className="mt-6 text-base sm:text-lg text-zinc-300 font-medium font-['Haffer'] px-4 sm:px-24"
        >
          Superlist generates your meeting notes, tracks follow-ups, and lets
          you manage all your tasks and notes in one place.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center  transition-opacity duration-300">
          <button
            ref={ctaRef}
            className="px-6 py-2 sm:px-10 sm:py-3 text-base sm:text-lg font-semibold sm:font-bold text-white bg-gradient-to-tr from-orange-700 to-red-500 rounded-full hover:scale-105 transition-transform duration-300 font-['Haffer'] shadow-md shadow-red-500/30"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
