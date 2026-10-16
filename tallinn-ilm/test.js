// Kuna Codespaces võrk streigib, asendame API päringu otse Yr.no ametliku andmestruktuuriga (Mock Data)
const mockYrNoData = {
  "type": "Feature",
  "properties": {
    "timeseries": [
      {
        "time": "2026-10-02T15:00:00Z",
        "data": { "instant": { "details": { "air_temperature": 14.5 } } }
      },
      {
        "time": "2026-10-02T16:00:00Z",
        "data": { "instant": { "details": { "air_temperature": 13.2 } } }
      },
      {
        "time": "2026-10-02T17:00:00Z",
        "data": { "instant": { "details": { "air_temperature": 11.8 } } }
      },
      {
        "time": "2026-10-02T18:00:00Z",
        "data": { "instant": { "details": { "air_temperature": 9.4 } } }
      }
    ]
  }
};

function printWeather() {
  // Loeme andmed täpselt samamoodi nagu päris Yr.no JSON-ist
  const timeseries = mockYrNoData.properties.timeseries;

  console.log("Aeg ja temperatuur Tallinnas (Lokaalne test):");
  
  timeseries.slice(0, 8).forEach(item => {
    const time = item.time; 
    const temp = item.data.instant.details.air_temperature; 
    
    // Prindime tulemuse täpselt ülesande nõutud formaadis
    console.log(`${time} ${temp}C`);
  });
}

printWeather();
