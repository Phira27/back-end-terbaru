// Function to calculate ISPU
const calculateISPU = (Ia, Ib, Xa, Xb, Xx) => {
    return ((Ia - Ib) / (Xa - Xb)) * (Xx - Xb) + Ib;
  };
  
  // Function to convert ISPU value to category
  const getISPUCategory = (value) => {
    if (value >= 0 && value <= 50) return "Baik";
    if (value >= 51 && value <= 100) return "Sedang";
    if (value >= 101 && value <= 200) return "Tidak Sehat";
    if (value >= 201 && value <= 300) return "Sangat Tidak Sehat";
    if (value >= 301) return "Berbahaya";
    return "Data Tidak Valid";
  };
  
  // Upper and lower bounds for each parameter
  const NO2_bounds = [
    { Ia: 50, Ib: 0, Xa: 100, Xb: 0 },
    { Ia: 100, Ib: 51, Xa: 200, Xb: 101 },
    { Ia: 200, Ib: 101, Xa: 1000, Xb: 201 },
  ];
  
  const PM10_bounds = [
    { Ia: 50, Ib: 0, Xa: 50, Xb: 0 },
    { Ia: 100, Ib: 51, Xa: 150, Xb: 51 },
    { Ia: 200, Ib: 101, Xa: 350, Xb: 151 },
    { Ia: 300, Ib: 201, Xa: 420, Xb: 351 },
    { Ia: 500, Ib: 301, Xa: 500, Xb: 421 },
  ];
  
  const PM25_bounds = [
    { Ia: 50, Ib: 0, Xa: 15.5, Xb: 0 },
    { Ia: 100, Ib: 51, Xa: 55.4, Xb: 15.6 },
    { Ia: 200, Ib: 101, Xa: 150.4, Xb: 55.5 },
    { Ia: 300, Ib: 201, Xa: 250.4, Xb: 150.5 },
    { Ia: 500, Ib: 301, Xa: 500, Xb: 250.5 },
  ];
  
  // Calculate ISPU using bounds
  const calculateISPUWithBounds = (bounds, concentration) => {
    for (let i = 0; i < bounds.length; i++) {
      if (concentration <= bounds[i].Xa) {
        return calculateISPU(
          bounds[i].Ia,
          bounds[i].Ib,
          bounds[i].Xa,
          bounds[i].Xb,
          concentration
        );
      }
    }
    return null; // Invalid value
  };
  
  // Function to calculate all ISPU values
  function calculateAllISPU(data) {
    const ispu_no2 = calculateISPUWithBounds(NO2_bounds, data.NO2_concentration);
    const ispu_pm10 = calculateISPUWithBounds(PM10_bounds, data.PM10_concentration);
    const ispu_pm25 = calculateISPUWithBounds(PM25_bounds, data.PM25_concentration);
  
    const ispu_average = (ispu_no2 + ispu_pm10 + ispu_pm25) / 3;
  
    return {
      ispu_no2,
      ispu_pm10,
      ispu_pm25,
      ispu_average,
      category_no2: getISPUCategory(ispu_no2),
      category_pm10: getISPUCategory(ispu_pm10),
      category_pm25: getISPUCategory(ispu_pm25),
      category_average: getISPUCategory(ispu_average)
    };
  }
  
  module.exports = {
    calculateAllISPU
  };