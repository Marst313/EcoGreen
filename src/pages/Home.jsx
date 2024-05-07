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
      <div
        className="h-screen w-auto lg:flex"
        style={{
          backgroundImage: `url(${vectorHero})`,
          backgroundSize: "cover",
          top: "-20px",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="m-10 flex h-auto w-1/2 flex-col">
          <div className="mt-16 h-auto w-10">
            <h1 className="text-[78px] font-extrabold italic text-[#729975]  ">
              Carbon Emissions.
            </h1>
          </div>
          <div className="h-auto w-5/6">
            <p className="text-justify font-bold">
              Emission is one of several harmful environment aspects which
              affect the global changes in the world. Fuel oil used in
              transportation infrastructure is known as the most important thing
              which produced the intensity of emission. Big city like Jakarta
              with high number of population suffered from air pollution.
            </p>
          </div>
          <div>
            <button className="mt-5 flex h-auto w-auto justify-center rounded-[1.25rem] bg-[#67CC6B] p-3">
              <p className="text-xl font-bold text-white">Learn More</p>
              <img src={chevron} alt="Circle Right" className="ml-2 mt-1 w-5" />
            </button>
          </div>
        </div>
        <div>
          <img alt="Home Logo" className="h-[90%] w-auto" src={heroImage} />
        </div>
      </div>
      <div>
        <About />
        <Calculating />
        <Map />
        <Dampak />
        <Team />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
