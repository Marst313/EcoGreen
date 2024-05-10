// Faktor Emisi
const faktorEmisiEnergi = {
  Solar: 0.5, // Faktor emisi listrik, contoh 0.5 kg CO2/kWh
  Gas: 2, // Faktor emisi gas, contoh 2 kg CO2/m3
  Listrik: 0.5, // Faktor emisi gas, contoh 2 kg CO2/m3
};

const faktorEmisiTransport = {
  Motor: 0.7, // Faktor emisi motor, contoh 0.1 kg CO2/km
  Mobil: 0.2, // Faktor emisi mobil, contoh 0.2 kg CO2/km
  Pesawat: 0.65, // Faktor emisi pesawat, contoh 0.5 kg CO2/km
  Kereta: 0.5, // Faktor emisi pesawat, contoh 0.5 kg CO2/km
};

const faktorEmisiMeat = {
  Ayam: 6, // Faktor emisi ayam, 6 kg CO2/kg
  Sapi: 27, // Faktor emisi sapi, 27 kg CO2/kg
  Ikan: 5, // Faktor emisi ikan, 5 kg CO2/kg
};

const faktorEmisiMilk = {
  Susu: 1, // Faktor emisi susu, 1 kg CO2/liter
  Keju: 8, // Faktor emisi keju, 8 kg CO2/kg
  Yogurt: 2, // Faktor emisi yogurt, 2 kg CO2/liter
};

// Fungsi untuk menghitung emisi karbon
export const calculateCarbonEmissions = (data) => {
  // Emisi dari penggunaan energi di rumah
  let emisiEnergi = Math.floor(
    data.energyMonth * faktorEmisiEnergi[data.energyType],
  );

  // Emisi dari transportasi
  let emisiTransport = Math.floor(
    data.km * faktorEmisiTransport[data.transport],
  );

  // Emisi dari makanan
  let emisiMeat = faktorEmisiMeat[data.meat] * data.timeMeat;
  let emisiMilk = faktorEmisiMilk[data.milk] * data.timeMilk;

  // Total emisi karbon
  let totalEmisi = emisiEnergi + emisiTransport + emisiMeat + emisiMilk;

  return totalEmisi;
};
// Batas emisi
const batasAman = 100; // 100 kg CO2
const batasNormal = 300; // 300 kg CO2

// Fungsi untuk menentukan status emisi
export const getEmissionStatus = (totalEmisi) => {
  if (totalEmisi < batasAman) {
    return "Aman"; // Emisi rendah
  } else if (totalEmisi >= batasAman && totalEmisi <= batasNormal) {
    return "Normal"; // Emisi sedang
  } else {
    return "Bahaya"; // Emisi tinggi
  }
};

// Fungsi untuk memberikan rekomendasi untuk mengurangi emisi karbon
export const getCarbonReductionRecommendations = (data) => {
  const recommendations = [];

  // Rekomendasi untuk energi rumah
  if (data.energyMonth > 100) {
    // Misalnya, penggunaan energi lebih dari 100 kWh
    recommendations.push(
      "Kurangi penggunaan energi rumah dengan menggunakan perangkat hemat energi dan mematikan peralatan saat tidak digunakan.",
    );
  }

  // Rekomendasi untuk transportasi
  if (data.km > 200) {
    // Misalnya, jika perjalanan lebih dari 200 km per minggu
    recommendations.push(
      "Kurangi penggunaan kendaraan bermotor. Cobalah berjalan kaki, bersepeda, atau menggunakan transportasi umum.",
    );
  }

  // Rekomendasi untuk konsumsi daging
  if (data.timeMeat > 5) {
    // Misalnya, jika konsumsi daging lebih dari 5 kg per minggu
    recommendations.push(
      "Kurangi konsumsi daging. Pilih daging dengan emisi karbon rendah atau tambahkan lebih banyak makanan nabati.",
    );
  }

  // Rekomendasi untuk produk susu
  if (data.timeMilk > 2) {
    // Misalnya, jika konsumsi susu lebih dari 2 liter per minggu
    recommendations.push(
      "Kurangi konsumsi produk susu. Cobalah susu nabati atau produk susu dengan emisi karbon lebih rendah.",
    );
  }

  return recommendations;
};
