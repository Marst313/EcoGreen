// Faktor Emisi
const faktorEmisiEnergi = {
  solar: 0.5, // Faktor emisi listrik, contoh 0.5 kg CO2/kWh
  gas: 2, // Faktor emisi gas, contoh 2 kg CO2/m3
};

const faktorEmisiTransport = {
  motor: 0.1, // Faktor emisi motor, contoh 0.1 kg CO2/km
  mobil: 0.2, // Faktor emisi mobil, contoh 0.2 kg CO2/km
  pesawat: 0.5, // Faktor emisi pesawat, contoh 0.5 kg CO2/km
};

const faktorEmisiMeat = {
  ayam: 6, // Faktor emisi ayam, 6 kg CO2/kg
  sapi: 27, // Faktor emisi sapi, 27 kg CO2/kg
  ikan: 5, // Faktor emisi ikan, 5 kg CO2/kg
};

const faktorEmisiMilk = {
  susu: 1, // Faktor emisi susu, 1 kg CO2/liter
  keju: 8, // Faktor emisi keju, 8 kg CO2/kg
  yogurt: 2, // Faktor emisi yogurt, 2 kg CO2/liter
};

// Fungsi untuk menghitung emisi karbon
export const calculateCarbonEmissions = (data) => {
  // Emisi dari penggunaan energi di rumah
  let emisiEnergi = data.energyMonth * faktorEmisiEnergi[data.energyType];

  // Emisi dari transportasi
  let emisiTransport = data.km * faktorEmisiTransport[data.transport];

  // Emisi dari makanan
  let emisiMeat = faktorEmisiMeat[data.meat] * data.timeMeat;
  let emisiMilk = faktorEmisiMilk[data.milk] * data.timeMilk;

  // Total emisi karbon
  let totalEmisi = emisiEnergi + emisiTransport + emisiMeat + emisiMilk;

  return totalEmisi;
};
