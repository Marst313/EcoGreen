import React from "react";
import logoEcoGreen from "../assets/images/logoEcoGreen.png";

const Footer = () => {
  return (
    <div className="h-[50vh] w-full rounded-t-3xl bg-gradient-to-r from-[#DAFFCE] to-[#A2F4F8]">
      <div className="mx-10 flex justify-between pt-10">
        <div className="mx-10 flex">
          <section className="w-72">
            <h2 className="text-2xl font-bold">ABOUT</h2>
            <p className="w-48 text-justify text-[100%] text-[#4F4F4F]">
              Misi untuk Kelestarian Bumi melalui Solusi Ramah Lingkungan.
              Temukan Bagaimana Kami Berkomitmen untuk Menginspirasi Perubahan
              Menuju Gaya Hidup Hijau yang Berkelanjutan.
            </p>
          </section>
          <div>
            <section className="w-80">
              <h2 className="text-2xl font-bold">ADDRESS</h2>
              <p className="text-[#60655F]">
                Jl. Nusa Indah, Ngringin, Condongcatur, Depok, Sleman, DI.
                Yogyakarta
              </p>
            </section>
            <section className="mt-3">
              <h2 className="text-2xl font-bold">CONTACT</h2>
              <p className="text-[#60655F]">+62 817619019615</p>
            </section>
          </div>
        </div>
        <div className="mr-10 mt-10 w-40">
          <img src={logoEcoGreen} alt="" className=" w-full" />
        </div>
      </div>
          <div className="h-1 mx-20 bg-black mt-5"></div>
          <div className="text-end mx-20 mt-4">
              <h2 className="text-xl text-[#60655F]">&copy; ecogreen.2024</h2>
          </div>
    </div>
  );
};

export default Footer;