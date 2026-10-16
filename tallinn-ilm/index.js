async function getTallinnWeather() {
  // ÕIGE API AADRESS KOOS TALLINNA KOORDINAATIDEGA
  const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.5&lon=24.7";

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Kohustuslik User-Agent unikaalse nimega, et vältida 403 vigu
        'User-Agent': 'TallinnWeatherExercise/1.0 ([email protected])'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP viga! Staatus: ${response.status}`);
    }

    // Loeme andmed puhta JSON-ina
    const data = await response.json();
    const timeseries = data.properties.timeseries;

    console.log("Aeg ja temperatuur Tallinnas:");

    timeseries.slice(0, 8).forEach(function (item) {
      const time = item.time;
      const temp = item.data.instant.details.air_temperature;

      console.log(`${time} ${temp}C`);
    });

  } catch (error) {
    console.error("Viga andmete pärimisel:", error.message);
  }
}

getTallinnWeather();
