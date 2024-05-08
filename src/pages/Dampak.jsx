import React from "react";
import vectorHero from "../assets/images/vectorHero.png";
import Sepeda from "../assets/images/Sepeda.png";
import Pohon from "../assets/images/Pohon.png";
import Matahari from "../assets/images/Matahari.png";
import CardDampak from "../components/CardDampak";

const Dampak = () => {
  return (
    <div>
      <div
        className="mx-auto mt-28 max-w-screen-xl"
        // style={{
        //   backgroundImage: `url(${vectorHero})`,
        //   backgroundSize: "cover",
        //   height: "100vh",
        //   width: "100%",
        // }}
      >
        <div className="flex items-center justify-center text-center">
          <h2 className=" my-5 lg:w-[50%] lg:text-3xl font-bold text-[#729975]">
            Dampak Manfaat Dari Pengurangan Emisi Carbon Bagi Lingkungan Sekitar
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center lg:grid grid-cols-3">
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
