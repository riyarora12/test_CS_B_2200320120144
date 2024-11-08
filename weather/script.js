
const apiKey = "bd5d6db1c55613f81c60eed85271139e";

async function getWeather() {
  const city = document.getElementById("city").value;
  const weatherResult = document.getElementById("weatherResult");
  const error = document.getElementById("error");

  weatherResult.innerHTML = "";
  error.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found or API error occurred");
    }

    const data = await response.json();

    weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
  } catch (err) {
    error.innerHTML = err.message;
  }
}
