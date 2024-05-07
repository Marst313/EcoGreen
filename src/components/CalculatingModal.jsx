import React from "react";

const CalculatingModal = ({ openModal }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-full bg-black/40 backdrop-blur-md ${openModal ? "" : "hidden"}`}
    >
      <h1>test modal</h1>
    </div>
  );
};

export default CalculatingModal;
