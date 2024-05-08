import React from "react";
import vectorSecond from "../assets/images/vectorSecond.png";
import imageAbout from "../assets/images/imageAbout.png";

const About = () => {
  return (
    <div className="mx-auto mt-32 max-w-screen-xl lg:mt-44" id="about">
      <div className="mx-2 justify-center lg:mx-0 lg:flex">
        <div className="mx-3 flex flex-col justify-center gap-5 lg:mx-0 lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-[#729975] lg:text-6xl">
            Jejak Karbon
          </h1>
          <p className="text-justify text-sm leading-relaxed text-black/50 lg:max-w-lg">
            Emisi adalah salah satu dari beberapa aspek lingkungan yang
            berbahaya mempengaruhi perubahan global di dunia. Bahan bakar minyak
            yang digunakan di infrastruktur transportasi dikenal sebagai hal
            yang paling penting yang menghasilkan intensitas emisi. Kota besar
            seperti Jakarta dengan tingginya jumlah penduduk yang menderita
            polusi udara.
          </p>
        </div>
        <div>
          <img src={imageAbout} alt="Image About" className="mt-5 lg:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default About;
