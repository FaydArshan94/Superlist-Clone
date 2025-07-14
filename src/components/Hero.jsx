import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        ctaRef.current,
        {
          scale: 0.9,
          opacity: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0d0c1b] via-[#131321] to-[#1a1a2e] flex sm:items-center items-start justify-center px-2 overflow-hidden">
      {/* Glow Blobs */}
      <div className="absolute top-1/3 left-[-10%] w-[300px] h-[300px] bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-400 opacity-30 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-10 right-[-5%] w-[250px] h-[250px] bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 blur-[100px] rounded-full z-0" />

      {/* Text content */}
      <div className="relative z-10 max-w-3xl mt-28 text-center text-white">
        <div className=" sm:inline-block hidden px-4 py-2 mb-4 text-sm shadow inset-shadow-cyan-500 shadow-cyan-500/50 bg-purple-500/10 font-bold font-['Haffer'] rounded-full hover:-rotate-2 hover:scale-105 transition-transform">
          <span className="text-zinc-900 text-[10px] font-semibold px-2 py-1 mr-2 rounded-full bg-[#867bff]">NEW</span> Introducing
          AI Meeting Notes in Superlist
        </div>
        <h1 className="text-6xl  sm:text-6xl sm:mt-10 md:text-8xl text-shadow-lg tracking-tight font-['HafferSemiBold']  sm:leading-tighter">
          Stay on top <br />
          <span className="bg-gradient-to-tr font-['HafferSemiBold'] text-[3.5rem] sm:text-8xl px-3  italic sm:px-4 from-red-500 to-orange-500 bg-clip-text text-transparent">
            of everything
          </span>
        </h1>
        <p className="mt-6 sm:text-lg text-md px-3   sm:px-32 text-zinc-100 font-medium text-center font-['Haffer']">
          Superlist generates your meeting notes, tracks follow-ups, and lets
          you manage all your tasks and notes in one place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="sm:px-6 sm:py-3 px-4 py-[6px] font-['Haffer'] shadow-lg sm:font-bold font-semibold text-white bg-gradient-to-tr from-orange-700 to-red-500 rounded-full text-base hover:scale-105   transition-transform ">
            Sign up for free
          </button>
          <button className="sm:px-6 sm:py-3 px-4 py-[6px] font-['Haffer'] bg-black/30 sm:text-zinc-400 text-zinc-500 font-bold rounded-full text-lg  hover:scale-105   transition-transform">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
