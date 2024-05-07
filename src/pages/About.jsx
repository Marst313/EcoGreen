import React from "react";
import vectorSecond from "../assets/images/vectorSecond.png";
import imageAbout from "../assets/images/imageAbout.png";

const About = () => {
  return (
    <div
      className="h-screen w-auto p-10"
      style={{
        backgroundImage: `url(${vectorSecond})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex justify-center mt-10">
        <div className="flex flex-col w-1/2 justify-center ml-10">
          <div className="mb-5">
            <h1 className="text-[64px] text-[#729975] font-extrabold">Jejak Carbon</h1>
          </div>
          <div className="w-[70%]">
            <p className="text-justify text-[#949695]">
              Emission is one of several harmful environment aspects which
              affect the global changes in the world. Fuel oil used in
              transportation infrastructure is known as the most important thing
              which produced the intensity of emission. Big city like Jakarta
              with high number of population suffered from air pollution.
            </p>
          </div>
        </div>
        <div className="w-1/2 mr-10">
          <img
            src={imageAbout}
            alt="Image About"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
