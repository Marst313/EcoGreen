import React from "react";
import vectorHero from "../assets/images/vector2.png";
import Sepeda from "../assets/images/Sepeda.png";
import Pohon from "../assets/images/Pohon.png";
import Matahari from "../assets/images/Matahari.png";
import CardDampak from "../components/CardDampak";

const Dampak = () => {
  return (
    <div>
      <div
        className="absolute  -z-10 -mt-[30rem] h-full w-full"
        style={{
          backgroundImage: `url(${vectorHero})`,
          backgroundSize: "cover",
          height: "100rem",
        }}
      ></div>

      <div className="mx-auto mt-28 max-w-screen-xl">
        <div className="flex items-center justify-center text-center">
          <h2 className=" my-5 font-bold text-[#729975] lg:w-[50%] lg:text-3xl">
            Dampak Manfaat Dari Pengurangan Emisi Carbon Bagi Lingkungan Sekitar
          </h2>
        </div>
        <div className="flex grid-cols-3 flex-col items-center justify-center lg:grid">
          <CardDampak
            imgSrc={Sepeda}
            title={"ImageBicycle"}
            name={"Kesehatan Manusia yang Lebih Baik"}
          />
          <CardDampak
            imgSrc={Pohon}
            title={"ImageTree"}
            name={"Pemulihan Ekosistem"}
          />
          <CardDampak
            imgSrc={Matahari}
            title={"ImageSun"}
            name={"Perlindungan Kualitas Udara"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dampak;
