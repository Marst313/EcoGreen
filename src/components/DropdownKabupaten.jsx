import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getWilayah } from "../utils/fetch";

const DropdownKabupaten = ({ data, setData }) => {
  const [dataKab, setDataKab] = useState([]);
  const [loading, setLoading] = useState(true); // Atur loading ke true saat mulai

  const handleChange = (selectedOption) => {
    setData({ ...data, location: selectedOption.label });

    console.log(data);
  };

  const fetchData = async () => {
    try {
      const respData = await getWilayah();
      const formattedData = respData.map((item, index) => ({
        value: index,
        label: item.name,
      }));
      setDataKab(formattedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      r;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Select
      options={dataKab}
      onChange={handleChange}
      placeholder="Pilih Provinsi"
      isSearchable={true}
      required
    />
  );
};

export default DropdownKabupaten;
