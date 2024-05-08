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
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="mx-auto w-auto max-w-screen-xl lg:mt-20 ">
        <div className="mt-10 w-full items-center justify-between lg:flex">
          <div className="mx-3 flex flex-col gap-5 lg:mx-0 lg:w-1/2">
            <h1 className="text-5xl font-extrabold italic text-[#729975] lg:text-6xl">
              Emisi Karbon.
            </h1>
            <div>
              <img
                alt="Home Logo"
                className="mt-3 w-[40rem] lg:hidden"
                src={heroImage}
              />
            </div>
            <p className="text-justify text-sm  leading-relaxed text-black/50 lg:max-w-lg">
              Emisi merupakan salah satu dari beberapa aspek lingkungan
              berbahaya yang mempengaruhi perubahan global di dunia. Bahan bakar
              minyak yang digunakan pada infrastruktur transportasi diketahui
              merupakan bahan terpenting yang menghasilkan intensitas emisi.
              Kota besar seperti Jakarta dengan jumlah penduduk yang tinggi
              menderita akibat polusi udara.
            </p>
            <button className="flex w-fit justify-center rounded-[1.25rem] bg-[#67CC6B] p-3 lg:mt-2">
              <p className="text-xl font-bold text-white">Lebih Lanjut</p>
              <MdOutlineKeyboardDoubleArrowRight
                className="h-7 w-10"
                style={{ color: "white" }}
              />
            </button>
          </div>
          <div className="w-1/2">
            <img
              alt="Home Logo"
              className="mt-3 hidden w-[40rem] sm:block lg:mt-0"
              src={heroImage}
            />
          </div>
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
