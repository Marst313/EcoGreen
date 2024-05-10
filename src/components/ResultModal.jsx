import React, { useEffect, useState } from "react";
import {
  getCarbonReductionRecommendations,
  getEmissionStatus,
} from "../utils/function";

import ayam from "../assets/images/ayam.png";
import sapi from "../assets/images/bio.png";
import ikan from "../assets/images/Daging.png";
const ResultModal = ({
  openModal,
  setOpenModal,

  data,
  setData,

  hasilEmisi,
  setHasilEmisi,
}) => {
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(ayam);

  const recommendations = getCarbonReductionRecommendations(data);

  useEffect(() => {
    const resultStatus = getEmissionStatus(hasilEmisi);

    setStatus(resultStatus);

    if (resultStatus === "Bahaya") {
      setFile(ayam);
    } else if (resultStatus === "Aman") {
      setFile(sapi);
    } else if (resultStatus === "Normal") {
      setFile(ikan);
    }
  }, [hasilEmisi]);

  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex h-full w-full  flex-col items-center   justify-center gap-8 bg-white/10 px-5 backdrop-blur-md transition-all duration-500  ${openModal === 5 ? "translate-x-0" : "translate-x-full"} `}
    >
      <h1 className="mx-auto  w-fit max-w-screen-xl self-start justify-self-start text-4xl font-bold text-secondaryGreen">
        Emisi Karbon Yang Kamu Lakukan
      </h1>
      {/* close button */}
      <button
        className="absolute right-5 top-5"
        type="button"
        onClick={() => setOpenModal(false)}
      >
        <label htmlFor="close-button" className="sr-only">
          Close Button
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={45}
          height={45}
          viewBox="0,0,256,256"
          className="hover:text-red-500"
          id="close-button"
        >
          <g
            fill="#d01b1b"
            fillRule="nonzero"
            stroke="none"
            strokeWidth={1}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={10}
            strokeDasharray=""
            strokeDashoffset={0}
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(3.55556,3.55556)">
              <path d="M19,15c-1.023,0 -2.04812,0.39087 -2.82812,1.17188c-1.562,1.562 -1.562,4.09425 0,5.65625l14.17188,14.17188l-14.17187,14.17188c-1.562,1.562 -1.562,4.09425 0,5.65625c0.78,0.78 1.80513,1.17188 2.82813,1.17188c1.023,0 2.04812,-0.39088 2.82813,-1.17187l14.17188,-14.17187l14.17188,14.17188c1.56,1.562 4.09525,1.562 5.65625,0c1.563,-1.563 1.563,-4.09325 0,-5.65625l-14.17187,-14.17187l14.17188,-14.17187c1.562,-1.562 1.562,-4.09425 0,-5.65625c-1.56,-1.561 -4.09625,-1.562 -5.65625,0l-14.17187,14.17188l-14.17187,-14.17187c-0.78,-0.78 -1.80513,-1.17187 -2.82812,-1.17187z" />
            </g>
          </g>
        </svg>
      </button>
      <h1>{status}</h1>

      <img src={file} alt="" className="h-5 w-5" />

      <p>{data.gender}</p>
      <p>{data.age}</p>

      {recommendations.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}

      <h5>Hasil Emisi Kamu adalah {hasilEmisi}</h5>
    </div>
  );
};

export default ResultModal;
