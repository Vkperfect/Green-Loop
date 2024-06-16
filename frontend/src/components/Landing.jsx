import React from "react";
import { useEffect } from "react";
import Typewriter from "react-typewriter-animate";
import Aos from "aos";
import "react-typewriter-animate/dist/Typewriter.css";
import Process from "./Process";
import Signup from './Signup'
import Signin from "./Signin";
require("@lottiefiles/lottie-player");

const Landing = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-screen"
      >
        <div className="text-7xl font-bold w-[50%] pt-32 pl-16 leading-tight">
          Manage your waste with{" "}
          <span className="text-[#33cc33]">
            <Typewriter
              dataToRotate={[[{ type: "word", text: "GreenLoop" }]]}
              timeBeforeDelete="2000"
              timeBeforeWriteNewRotateData={1000}
              loop="true"
            />
          </span>
        </div>
      </div>

      <div className="flex h-[400px] w-4/5 mx-auto mt-12 gap-24">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="/waste-animation.json"
        ></lottie-player>

        <div className="lg:w-[40%]  w-4/5 pr-8  ">
          <p className=" text-3xl md:text-5xl font-bold text-[#167EA3]">
            About Us{" "}
          </p>
          <p
            className="text-black mt-4 text-justify mb-6"
            data-aos="fade-up"
            data-aos-delay="=300"
          >
            Welcome to GreenLoop! We're your go-to for sustainable scrap
            management. Our mission: to make recycling easy and eco-friendly.
            With cutting-edge technology and a commitment to the environment,
            we're here to streamline your scrap disposal and help build a
            greener future. Join us in our journey toward sustainability, one
            loop at a time.
            <br />
            <br />
          </p>
          <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Know more...
          </button>
        </div>
      </div>

        

            {/* How we work */}
      <Process/>
    </div>
  );
};

export default Landing;
