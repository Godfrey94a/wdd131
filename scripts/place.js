// Footer: current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Static weather values for this stage of the course (units: metric, °C / km/h)
const temperature = 34; // °C
const windSpeed = 12; // km/h

// Returns the wind chill factor for a given temperature (°C) and wind speed (km/h)
function calculateWindChill(tempC, windKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

// Only calculate wind chill when it is meaningful for the metric units used here:
// temperature <= 10°C and wind speed > 4.8 km/h. Otherwise, it isn't applicable.
let windChillResult;
if (temperature <= 10 && windSpeed > 4.8) {
  windChillResult = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillResult = "N/A";
}

document.getElementById("windChill").textContent = windChillResult;