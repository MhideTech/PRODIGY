const weatherInfo = document.querySelector("#weather-info");
const locationForm = document.querySelector("#location-form");
const locationInput = document.querySelector("#location-input");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener('click', function(e){
    e.preventDefault()

    const query = locationInput.value;    
    
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '16b5b415b1msh7cfdea873864269p13a51bjsn5ec40d5e83c6',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    async function getWeatherData() {
        try {
            weatherInfo.innerHTML = ``
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);

            data
              ? (weatherInfo.innerHTML = `
                <img src=${data.current.condition.icon} alt='' />
                <h2>${data.current.temp_c}<sup>o</sup>C</h2>
                <h3>${data.current.condition.text}</h3> 
                <p>${data.location.name}, ${data.location.country}</p>              

                <div class="more-info">
                    <div class="info">
                        <i class="fa-solid fa-cloud"></i>
                        <div class="text">
                            <p>${data.current.feelslike_c} <sup>o</sup>C</p>
                            <span>Feels like</span>
                        </div>
                    </div>
                    <div class="info">
                        <i class="fa-solid fa-snowflake"></i>
                        <div class="text">
                            <p>${data.current.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                </div>
            `)
              : (weatherInfo.innerHTML = `
                <p>${data.error.message}</p>
            `);
            console.log(data.error.message);
        } catch (error) {
            
            console.error(error);
        }

    }

    getWeatherData();    
})