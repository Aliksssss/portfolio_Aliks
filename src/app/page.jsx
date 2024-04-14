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
      <div>
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
          <div className="h-1/2 lg:h-full lg:w-1/2 lg:mt-4 relative flex justify-center items-center">
            <Image
              src="/cimage.png"
              alt="Hero image"
              width={350}
              height={350}
            />
          </div>

          <div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col gap-8 items-center justify-center mt-16">
            <h1 className="text-4xl font-bold">Turning designs into code</h1>
            <p className="md:text-lg">
              I'm currently pursuing my Bachelor of Technology in Computer
              Science and Engineering at Academy of Technology. I'm aspiring to
              become a Software Development Engineer. Interested in learning Web
              technologies.
            </p>
            <div className="w-full flex gap-4">
            <Link href='/portfolio'>
                
                  <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-red-200 hover:text-black">
                    View My Work
                  </button>
                
              </Link>
              <Link href='/contact'>
              <button className="p-4 rounded-lg ring-1 ring-black hover:bg-black
              hover:text-white
              ">
                Contact Me
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
