const weatherInfo = document.querySelector("#weather-info");
const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

const apiKey = "ad0bc7db00479b56ea95ce14e43f543e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherData(location) {
  const response = await fetch(
    `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  console.log(data)
  return data;
}

function displayWeather(data) {
  const { name, weather, main } = data;
  const weatherDescription = weather[0].description;
  const temperature = main.temp;
  const feelsLike = main.feels_like;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Weather: ${weatherDescription}</p>
    <p>Temperature: ${temperature}°C</p>
    <p>Feels Like: ${feelsLike}°C</p>
  `;
}

locationForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value;
  if (location) {
    try {
      const weatherData = await getWeatherData(location);
      displayWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      weatherInfo.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    }
  } else {
    weatherInfo.innerHTML = `<p>Please enter a location.</p>`;
  }
});
