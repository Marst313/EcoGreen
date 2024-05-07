import React from "react";
import vectorSecond from "../assets/images/vectorSecond.png";
import imageAbout from "../assets/images/imageAbout.png";

const About = () => {
  return (
    <div className="mx-auto  mt-44 max-w-screen-2xl">
      <div className="flex justify-center">
        <div className="ml-10 flex w-1/2 flex-col justify-center">
          <div className="mb-5">
            <h1 className="text-[64px] font-extrabold text-[#729975]">
              Jejak Carbon
            </h1>
          </div>
          <div className="w-[70%]">
            <p className="text-justify text-black/50">
              Emission is one of several harmful environment aspects which
              affect the global changes in the world. Fuel oil used in
              transportation infrastructure is known as the most important thing
              which produced the intensity of emission. Big city like Jakarta
              with high number of population suffered from air pollution.
            </p>
          </div>
        </div>
        <div className="mr-10 w-1/2">
          <img src={imageAbout} alt="Image About" className="" />
        </div>
      </div>
    </div>
  );
};

export default About;
