"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero2.svg" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Jordyn Jensen
          </h1>
          <h2 className="text-3xl md:text4xl font-bold">Full Stack Software Engineer</h2>
          <h3 className="text-xl md:text-2xl font-bold: 200">React | Typescript | Javascipt | Rails | Azure</h3>
          {/* DESC */}
          <p className="md:text-xl">
          I'm a Full-Stack Software Developer specializing in React, Typescript, Javascript, Rails, and Azure. My current interests include Python and Flask. I had a 3 month internship at SurgAlign, and have built applications for the biomedical industry. I bring empathy, analytical rigor, and a drive for improvement to every project. My background is in nursing where I completed the RN new grad program for medical-surgical floor and have over 1 year of experience.
          </p>
          
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio"><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black">
              View My Work
              </button>
            </Link>
            <Link href="/contact"><button className="p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white">
              Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
