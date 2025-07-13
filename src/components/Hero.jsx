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
    <section className="relative min-h-screen bg-gradient-to-br from-[#0d0c1b] via-[#131321] to-[#1a1a2e] flex items-center justify-center px-4 overflow-hidden">
      {/* Glow Blobs */}
      <div className="absolute top-1/3 left-[-10%] w-[300px] h-[300px] bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-400 opacity-30 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-10 right-[-5%] w-[250px] h-[250px] bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 blur-[100px] rounded-full z-0" />

      {/* Text content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        <div className="inline-block px-4 py-1 mb-4 text-sm bg-purple-900/40 rounded-full">
          <span className="text-purple-300 font-medium">NEW</span> Introducing
          AI Meeting Notes in Superlist
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-['HafferSemiBold']  leading-tight">
          Stay on top <br />
          <span className="bg-gradient-to-tr font-['HafferSemiBold'] italic from-red-500 to-orange-500 bg-clip-text text-transparent">
            of everything
          </span>
        </h1>
        <p className="mt-6 text-lg  sm:px-32 text-zinc-100 font-medium text-center font-['Haffer']">
          Superlist generates your meeting notes, tracks follow-ups, and lets
          you manage all your tasks and notes in one place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 text-white bg-gradient-to-tr from-red-500 to-orange-500 rounded-full text-base font-medium">
            Sign up for free
          </button>
          <button className="px-6 py-3 bg-white/10 text-white rounded-full text-base font-medium hover:bg-white/20 transition">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
