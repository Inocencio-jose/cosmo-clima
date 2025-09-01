const apikey = SUA_API_KEY; // Substitua pela sua chave da API da OpenWeather
const apiCountryURL = "https://flagcdn.com/48x36/";
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElemet = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const weather = document.querySelector("#weather-data");

// Função para buscar dados do clima
const getweatherData = async (city) => {
    const apiweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const res = await fetch(apiweatherUrl);
    const data = await res.json();
    
    return data;
}

// Função para exibir os dados
const showWeatherData = async (city) => {
    weather.classList.add("hide");
    searchBtn.disabled = true;
    document.querySelector("#loading").classList.remove("hide");
    document.querySelector("#error-message").classList.add("hide");

    try {
        const data = await getweatherData(city);

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        cityElement.innerText = data.name;
        tempElemet.innerText = parseInt(data.main.temp);
        descElement.innerText = data.weather[0].description;
        weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        countryElement.setAttribute("src", `${apiCountryURL}${data.sys.country.toLowerCase()}.png`);
        umidityElement.innerText = `${data.main.humidity}%`;
        windElement.innerText = `${data.wind.speed} km/h`;

        weather.classList.remove("hide");
    } catch (error) {
        console.error("Erro ao buscar dados do clima:", error);
        document.querySelector("#error-message").classList.remove("hide");
        weather.classList.add("hide");
    } finally {
        document.querySelector("#loading").classList.add("hide");
        searchBtn.disabled = false;
    }
};

// Evento de clique
searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    if (city !== "") {
        await showWeatherData(city);
        cityInput.value = "";
    } else {
        document.querySelector("#error-message").classList.remove("hide");
    }
});

cityInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
