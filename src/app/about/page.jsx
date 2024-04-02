"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-scroll [&::-webkit-scrollbar]:hidden lg:flex"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-justify">
              At <b>Shingru</b>, we&apos;re passionate about innovation, dedicated to
              exceeding expectations. Specializing in bespoke websites and
              applications, we empower businesses in the digital landscape. Our
              mission: blend creativity and technical expertise to bring your
              vision to life.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Where innovation meets excellence, paving way for digital
              success.{" "}
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 517 303"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.4 52.9602C66.334 44.2689 73.8273 35.2421 81.1046 25.9889C86.7104 18.861 102.995 2.78755 93.9602 2.01337C83.3706 1.106 67.4134 14.3246 60.4201 19.8378C45.4743 31.6204 32.4637 45.6643 21.3868 61.12C15.7721 68.9542 -1.73321 89.4454 2.71779 100.922C4.16333 104.65 7.83593 107.478 11.4888 109.102C22.4389 113.972 49.2716 116.272 59.6488 117.711C75.6912 119.936 103.358 119.844 112.658 137.189C120.692 152.174 109.353 171.582 101.062 183.413C89.1139 200.464 72.8005 216.013 54.0134 225.255C44.0046 230.179 29.7421 234.46 20.2356 225.471C8.87394 214.727 7.5052 177.4 29.8623 178.507C40.675 179.042 49.6061 189.219 55.3644 197.049C65.9925 211.501 73.0663 228.315 80.5644 244.48C87.1726 258.727 93.1708 273.653 102.144 286.653C106.678 293.222 111.558 296.043 117.36 300.96"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M142.383 108.406C142.342 116.554 141.951 124.697 141.234 132.815C143.062 128.706 145.398 124.993 148.527 122.311C157.962 114.225 166.567 136.39 168.385 141.756C170.228 147.2 171.19 153.135 174.111 158.19C180.241 168.798 189.067 161.691 194.225 153.992C200.002 145.368 203.285 135.371 205.087 125.301C205.161 124.89 205.221 124.277 205.269 123.605C205.263 122.359 205.297 121.165 205.366 120.044C205.447 118.71 205.423 121.457 205.269 123.605C205.317 133.289 207.775 146.12 215.007 152.212C223.253 159.159 228.214 144.52 229.428 139.166C230.588 134.051 229.902 120.657 233.422 132.977C237.474 147.159 241.226 161.37 245.882 175.383C246.119 176.096 247.054 181.174 249.372 180.071C256.694 176.588 262.705 163.728 266.422 157.485C269.047 153.079 271.698 148.522 274.262 143.849C274.559 132.358 275.784 120.917 279.058 109.561C279.632 107.571 284.504 89.2589 290.852 91.0574C293.438 91.79 292.379 96.6856 292.119 98.1233C289.282 113.816 282.192 129.392 274.262 143.849C273.894 158.091 274.951 172.41 275.299 186.743C293.906 164.446 316.154 144.657 336.262 123.975C341.496 118.592 355.52 106.186 344.885 100.395C333.519 104.745 303.509 115.005 302.276 106.762C301.566 102.02 315.103 98.8829 317.425 98.4036C325.666 96.7023 334.839 96.519 342.845 99.4805C343.607 99.7626 344.286 100.068 344.885 100.395C355.52 106.186 341.496 118.592 336.262 123.975C316.154 144.657 293.906 164.446 275.299 186.743C275.412 191.385 275.451 196.028 275.342 200.67C274.959 217.082 273.331 233.62 268.495 249.422C265.883 257.957 261.688 269.843 253.741 275.379C248.349 279.134 242.746 275.919 240.539 270.304C235.993 258.734 240.839 244.611 245.35 234.024C252.774 216.605 263.277 201.15 275.299 186.743C274.951 172.41 273.894 158.091 274.262 143.849C271.698 148.522 269.047 153.079 266.422 157.485C262.705 163.728 256.694 176.588 249.372 180.071C247.054 181.174 246.119 176.096 245.882 175.383C241.226 161.37 237.474 147.159 233.422 132.977C229.902 120.657 230.588 134.051 229.428 139.166C228.214 144.52 223.253 159.159 215.007 152.212C207.775 146.12 205.317 133.289 205.269 123.605C205.221 124.277 205.161 124.89 205.087 125.301C203.285 135.371 200.002 145.368 194.225 153.992C189.067 161.691 180.241 168.798 174.111 158.19C171.19 153.135 170.228 147.2 168.385 141.756C166.567 136.39 157.962 114.225 148.527 122.311C145.398 124.993 143.062 128.706 141.234 132.815C138.193 139.655 136.562 147.593 135.037 153.703C132.321 164.585 130.398 175.639 127.816 186.55C127.24 188.983 125.399 195.807 124.711 193.402C123.023 187.495 123.072 180.095 122.523 174.14C119.31 139.321 114.285 102.586 118.795 67.7194C119.257 64.1495 125.108 35.3718 134.193 48.3325C137.357 52.8472 138.514 59.2599 139.365 64.4466C141.73 78.8641 142.454 93.8309 142.383 108.406Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M126.254 205.803C136.306 174.333 142.22 141.403 142.383 108.406C142.454 93.8309 141.73 78.8641 139.365 64.4466C138.514 59.2599 137.357 52.8472 134.193 48.3325C125.108 35.3718 119.257 64.1495 118.795 67.7194C114.285 102.586 119.31 139.321 122.523 174.14C123.072 180.095 123.023 187.495 124.711 193.402C125.399 195.807 127.24 188.983 127.816 186.55C130.398 175.639 132.321 164.585 135.037 153.703C137.479 143.922 140.191 129.456 148.527 122.311C157.962 114.225 166.567 136.39 168.385 141.756C170.228 147.199 171.19 153.135 174.111 158.19C180.241 168.798 189.067 161.691 194.225 153.992C200.002 145.368 203.285 135.371 205.087 125.301C205.397 123.573 205.473 118.293 205.366 120.044C204.763 129.874 206.845 145.336 215.007 152.212C223.253 159.159 228.214 144.52 229.428 139.166C230.588 134.051 229.902 120.657 233.422 132.977C237.474 147.159 241.226 161.37 245.882 175.383C246.119 176.096 247.054 181.174 249.372 180.071C256.694 176.588 262.705 163.728 266.422 157.485C277.164 139.45 288.364 118.889 292.119 98.1233C292.379 96.6856 293.438 91.79 290.852 91.0574C284.504 89.2589 279.632 107.571 279.058 109.561C270.412 139.552 276.056 170.129 275.342 200.67C274.959 217.082 273.331 233.62 268.495 249.422C265.883 257.957 261.688 269.843 253.741 275.379C248.349 279.134 242.746 275.919 240.539 270.304C235.993 258.734 240.839 244.611 245.35 234.024C264.262 189.647 303.161 158.02 336.262 123.975C341.791 118.289 357.13 104.765 342.845 99.4805C334.839 96.519 325.666 96.7023 317.425 98.4036C315.103 98.8829 301.566 102.02 302.276 106.762C303.721 116.421 344.678 100.675 348.852 98.7996C355.766 95.6944 362.163 91.7505 368.181 87.2308C369.824 85.9963 373.357 81.4525 373.052 83.4529C371.122 96.0963 366.403 107.199 366.944 120.478C367.103 124.397 367.369 131.134 370.886 134.049C376.426 138.642 383.369 129.661 385.975 126.187C392.681 117.248 396.377 105.262 403.849 97.0043C404.915 95.8266 404.416 100.118 404.372 101.687C404.175 108.648 403.758 115.995 406.056 122.716C412.587 141.818 427.73 119.076 432.894 111.298C433.885 109.805 447.32 83.0668 449.974 85.2774C471.895 103.539 498.182 78.1333 515 63.9193"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Material UI
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GSAP
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SERVICE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Ways we can help you
            </motion.h1>
            {/* Services LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* Services LIST ITEM */}
              <div className="flex justify-between h-48 ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/*TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Website Development
                  </div>
                  {/*DESC */}
                  <div className="p-3 text-xs italic">
                    In search of a website that&apos;s both visually stunning
                    and flawlessly functional? Look no further! We specialize in
                    crafting, building, and hosting websites designed to elevate
                    your business. Rest assured, we deliver results.{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4  bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    SEO Mastery
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-xs italic">
                    Ensuring your revolutionary products reach a wider audience
                    starts with a top-ranking on Google. We employ the best SEO
                    practices to guarantee your content gets the visibility it
                    deserves!{" "}
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Product Design{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-xs italic">
                    Escape the drag-and-drop dilemma! Elevate your website with
                    a bespoke code solution tailored to your needs. Get ready to
                    own a sleek, lightning-fast site!{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4  bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
