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
      <div className="mx-auto w-auto max-w-screen-xl lg:mt-20 lg:flex lg:justify-between">
        <div className="flex justify-between gap-12 bg-amber-700">
          <div className="mx-3 lg:mx-0 w-1/2 ">
            <h1 className="mx-2 text-5xl font-extrabold italic text-[#729975] lg:mx-0 lg:text-6xl  ">
              Emisi Karbon.
            </h1>
            <p className="text-justify max-w-lg text-sm leading-relaxed text-black/50">
              Emisi merupakan salah satu dari beberapa aspek lingkungan
              berbahaya yang mempengaruhi perubahan global di dunia. Bahan bakar
              minyak yang digunakan pada infrastruktur transportasi diketahui
              merupakan bahan terpenting yang menghasilkan intensitas emisi.
              Kota besar seperti Jakarta dengan jumlah penduduk yang tinggi
              menderita akibat polusi udara.
            </p>
            <button className="mx-2 flex justify-center rounded-[1.25rem] bg-[#67CC6B] p-3 lg:mx-0 lg:mt-2">
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
              className="mt-3 w-[40rem] lg:mt-0"
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
