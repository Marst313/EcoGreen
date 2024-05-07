import React from "react";
import heroImage from "../assets/images/heroImage.png";
import vectorHero from "../assets/images/vectorHero.png";
import chevron from "../assets/images/chevron.png";
import About from "./About";
import Map from "./Map";
import Calculating from "./Calculating";
import Dampak from "./Dampak";
import Team from "./Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="mx-auto mt-20  w-auto max-w-screen-2xl justify-between lg:flex">
        <div className=" flex  w-1/2 flex-col gap-5">
          <div className="mt-16  w-10">
            <h1 className=" text-6xl font-extrabold italic text-[#729975]  ">
              Carbon Emissions.
            </h1>
          </div>
          <div className=" w-5/6">
            <p className="text-justify text-sm leading-relaxed text-black/50">
              Emission is one of several harmful environment aspects which
              affect the global changes in the world. Fuel oil used in
              transportation infrastructure is known as the most important thing
              which produced the intensity of emission. Big city like Jakarta
              with high number of population suffered from air pollution.
            </p>
          </div>
          <div>
            <button className="mt-5 flex h-auto w-auto justify-center rounded-[1.25rem] bg-[#67CC6B] p-3 px-5">
              <p className="text-xl font-bold text-white">Learn More</p>
              <img src={chevron} alt="Circle Right" className="ml-2 mt-1 w-5" />
            </button>
          </div>
        </div>
        <div>
          <img alt="Home Logo" className="w-[40rem]" src={heroImage} />
        </div>
      </div>

      <div>
        <About />
        <Calculating />
        <Map />
        <Dampak />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Home;
