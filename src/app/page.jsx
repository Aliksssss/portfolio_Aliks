"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-auto">
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 md:gap-8 items-center justify-center">
            {/* title */}
            <h1 className="text-xl md:text-5xl font-bold">
              Crafting Ideas through Code, Building Dreams
            </h1>
            <p className="text-[14px] leading-5  md:text-xl text-justify">
              At <b>Shingru</b>, we&apos;re all about building websites that not
              only look amazing but also deliver results. With a sharp focus on
              speed and precision, we craft user-centric digital solutions that
              get the job done in style.
            </p>
          </div>
          {/* Image Container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src="/hero1.png" alt="" fill className="object-contain" />
          </div>
        </div>
        <div className="w-[70%] mx-[15%] h-[1px] bg-gray-300"></div>
        <div className="h-[90%] text-center flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-4xl font-bold ">
            Experience Results with Us
          </h1>
          <br />
          <p className="text-[14px] leading-5  md:text-xl mb-8">
            We specialize in crafting visually appealing websites with fast load
            times, <br />
            all with a single focus: <b>delivering results.</b>
            <br />
            <br />
            No matter your vision, rest assured – we design with precision{" "}
            <br />
            and a goal-oriented approach. <br />
            <br />
            When our project concludes, you&apos;ll have a stylish website
            <br />
            that effectively accomplishes its objectives.
          </p>
          <Link
            href="/portfolio"
            className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
          >
            View Our Work
          </Link>
        </div>
        <div className="w-[70%] mx-[15%] h-[1px] bg-gray-300"></div>
        <div className="h-2/3 text-center">
          <div className=" py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Principles
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                  Here are the guiding principles that define Our work ethic and
                  approach.
                </p>
              </div>
              <div className="mt-20 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    1. Holistic UX
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    In our work, we prioritize the synergy of design and
                    functionality. Every element is thoughtfully crafted to not
                    only look appealing but also enhance the overall user
                    experience.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    2. Timeless Excellence
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    Our commitment to excellence knows no bounds. we are
                    dedicated to delivering exceptional results, regardless of
                    the time or effort required. Flexibility and dedication are
                    at the core of our work ethic.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    3. Curated Client Focus
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    Quality over quantity is our mantra when it comes to client
                    projects. By limiting the number of projects we undertake,
                    we ensure that each client receives the attention and
                    dedication they deserve, resulting in exceptional outcomes.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    4. Dynamic Collaboration
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    Collaboration is key to bringing ideas to life. Whether
                    leading a project, providing support, or refining existing
                    concepts, we adapt to the unique needs of each
                    collaboration, driving innovation and success.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    5. Elegant Simplicity
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    We believe in simplicity as the ultimate sophistication. Our
                    approach emphasizes clean, minimalistic design paired with
                    efficient functionality, ensuring that every project is
                    executed flawlessly.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    6. Continuous Improvement
                  </h3>
                  <p className="mt-4 text-lg text-gray-700">
                    We am committed to constant growth and refinement. Through
                    ongoing learning and adaptation, We ensure that our work
                    remains at the forefront of industry standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%] mx-[15%] h-[1px] bg-gray-300 rounded"></div>
          <div className="h-1/2 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Looking for a designer/developer?
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              <span className="bg-green-500 h-3 w-3 rounded-full inline-block mr-1"></span>{" "}
              We&apos;re available and ready to collaborate!
            </p>
            <Link
              href="/contact"
              className="p-4 rounded-lg ring-1 ring-black mt-4 "
            >
              Hire Us
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
