import React from "react";
import Select from "react-select";

// Buat fungsi untuk menghasilkan kelipatan dua
const generateEvenNumbers = (start, end) => {
  const evenNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push({ value: i, label: i.toString() });
    }
  }
  return evenNumbers;
};

// Daftar kelipatan dua antara 2 hingga 100
const evenNumbers = generateEvenNumbers(2, 100);

const DropdownEvenNumbers = ({ setData, data }) => {
  const handleChange = (selectedOption) => {
    setData({ ...data, people: selectedOption.label });
  };

  return (
    <div>
      <h2>Pilih Jumlah Orang (Kelipatan Dua)</h2>
      <Select
        options={evenNumbers}
        onChange={handleChange}
        placeholder="Pilih Jumlah Orang"
        isSearchable={true}
      />
    </div>
  );
};

export default DropdownEvenNumbers;
