export const getWilayah = async () => {
  try {
    const resp = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
    );

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
