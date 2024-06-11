"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const items = [
  // {
  //   id: 1,
  //   color: "from-red-300 to-blue-300",
  //   title: "Paw Spot",
  //   desc: "React in Rails, Jest, Enzyme, CSS, Reactstrap, Bootstrap, Ruby, implemented APIs for an interactactive application.",
  //   img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   link: "https://lama.dev",
  // },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Travel App",
    desc: "This project is a responsive web application that is also mobile-friendly for outdoor enthusiasts, built using Next.js and React for server-side rendering and dynamic user interfaces. It employs Tailwind CSS for efficient and responsive styling, and TypeScript for robust type safety. Key features include dynamic navigation, visually compelling hero and campsite sections with optimized images, and a feature-rich footer demonstrating UI/UX design skills. The application leverages centralized constants for easy configuration and updates, and static assets are efficiently served from the public directory. ",
    img: "/Travel-App.png",
    link: "https://travel-app-xfj5.onrender.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Pig Latin",
    desc: "A PigLatin Translator showcasing my proficiency in react. Tech Stack: React, JS, and CSS. Key Features Include: real-time translation, user-friendly interface, state management, form handling, custom translation logic, and error handling. This project emphasizes user interaction, real-time data processing, and efficient algorithm implementation.",
    img: "/PigLatinTranslatorImage.png",
    link: "https://piglatin-translator.onrender.com/",
  },
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "",
  // },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 md:gap-8 text-white p-4 md:p-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                  <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
                    {item.title}
                  </h1>
                  <div className="relative w-full h-56 md:h-64 lg:h-80">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <p className="text-sm md:text-lg lg:text-xl">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button className="p-2 md:p-4 lg:p-6 text-sm md:text-lg lg:text-xl bg-white text-gray-600 font-semibold rounded hover:bg-gray-200">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-8 md:gap-16 items-center justify-center text-center">
        <h1 className="text-4xl md:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-sm md:text-lg lg:text-xl">
                Front-end, Backend, & Cloud Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact">
            <button className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;