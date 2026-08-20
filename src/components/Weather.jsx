import { useEffect, useState } from 'react';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://open-meteo.com')
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p>Loading weather...</p>;

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
      <h3>🌤️ Quick Weather Widget (NYC)</h3>
      <p>Temperature: <strong>{weather.temperature}°C</strong></p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
    </div>
  );
}
