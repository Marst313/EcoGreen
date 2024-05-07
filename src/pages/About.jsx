import React from "react";
import vectorSecond from "../assets/images/vectorSecond.png";
import imageAbout from "../assets/images/imageAbout.png";

const About = () => {
  return (
    <div className="mx-auto  mt-44 max-w-screen-xl">
      <div className="flex justify-center">
        <div className="ml-10 flex w-1/2 flex-col justify-center">
          <div className="mb-5">
            <h1 className="text-6xl font-extrabold text-[#729975]">
              Jejak Karbon
            </h1>
          </div>
          <div className="w-[70%]">
            <p className="text-justify text-black/50">
              Emisi adalah salah satu dari beberapa aspek lingkungan yang
              berbahaya mempengaruhi perubahan global di dunia. Bahan bakar
              minyak yang digunakan di infrastruktur transportasi dikenal
              sebagai hal yang paling penting yang menghasilkan intensitas
              emisi. Kota besar seperti Jakarta dengan tingginya jumlah penduduk
              yang menderita polusi udara.
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
