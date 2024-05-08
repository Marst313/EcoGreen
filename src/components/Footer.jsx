import React from "react";
import logoEcoGreen from "../assets/images/logoEcoGreen.png";

const Footer = () => {
  return (
    <div className="w-full rounded-t-3xl bg-gradient-to-r from-[#DAFFCE] to-[#A2F4F8] h-[53vh]">
      <div className="mx-5 lg:mx-auto max-w-screen-xl flex justify-between pt-10">
        <div className="lg:flex">
          <section className="w-full lg:w-72">
            <h2 className="text-2xl font-bold">TENTANG</h2>
            <p className="lg:w-48 text-justify text-base text-[#4F4F4F]">
              Misi untuk Kelestarian Bumi melalui Solusi Ramah Lingkungan.
              Temukan Bagaimana Kami Berkomitmen untuk Menginspirasi Perubahan
              Menuju Gaya Hidup Hijau yang Berkelanjutan.
            </p>
          </section>
          <div>
            <section className="w-80 mt-3 lg:mt-0">
              <h2 className="text-2xl font-bold">ALAMAT</h2>
              <p className="text-[#60655F]">
                Jl. Nusa Indah, Ngringin, Condongcatur, Depok, Sleman, DI.
                Yogyakarta
              </p>
              <h2 className="mt-3 text-2xl font-bold">KONTAK</h2>
              <p className="text-[#60655F]">+62 817619019615</p>
            </section>
          </div>
        </div>
        <div className="mt-10 hidden w-40 sm:block">
          <img src={logoEcoGreen} alt="" className=" w-full" />
        </div>
      </div>
      <div className="mx-auto mb-5 mt-5 h-1 max-w-screen-xl bg-black">
        <h2 className="text-xl text-[#60655F] text-end pt-2 pr-2 lg:pr-0">&copy; ecogreen.2024</h2>
      </div>
    </div>
  );
};

export default Footer;
