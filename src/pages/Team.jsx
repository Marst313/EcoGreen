import React from "react";
import Ndaru from "../assets/images/Ndaru.png";
import Nyoman from "../assets/images/Nyoman.png";
import Baam from "../assets/images/Baam.png";

const Team = () => {
  return (
    <div className="mx-auto my-24 mt-[30rem] max-w-screen-xl " id="team">
      <h2 className="my-5 text-center text-5xl font-bold">TIM</h2>
      <div className="flex grid-cols-3 flex-col place-items-center items-center justify-center lg:grid">
        <div className="my-10 w-fit items-center text-center">
          <img src={Nyoman} alt="Image Nyoman" />
          <h2 className="mt-5 text-xl font-bold">I Nyoman Karma D.N.W</h2>
          <p className=" font-bold">21.11.4110</p>
        </div>
        <div className="my-10 w-fit text-center">
          <img src={Baam} alt="Image Baam" />
          <h2 className="mt-5 text-xl font-bold">M. Albaab Ridho P</h2>
          <p className=" font-bold">21.11.4057</p>
        </div>
        <div className="my-10 w-fit text-center">
          <img src={Ndaru} alt="Image Ndaru" />
          <h2 className="mt-5 text-xl font-bold">Ndaru Windra Sayidinaa</h2>
          <p className=" font-bold">21.11.4089</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
