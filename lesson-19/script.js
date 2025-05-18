const dateDay = document.querySelector('.date__day');
const dateMonth = document.querySelector('.date__month');
const dateYear = document.querySelector('.date__year');
const dateHours = document.querySelector('.date__hours');
const dateMinutes = document.querySelector('.date__minutes');

const weatherIcon = document.querySelector('.weather__icon');
const weatherTemperature = document.querySelector('.weather__temperature');
const weatherState = document.querySelector('.weather-state');
const weatherWindSPeed = document.querySelector('.weather-wind-speed');
const weatherLocation = document.querySelector('.weather__location');

const widgetUpdate = document.querySelector('.widget__update');
const widgetError = document.querySelector('.widget__error');

widgetUpdate.addEventListener('click', fetchData);


async function fetchData() {
    try {
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.080304005037675&lon=33.42430060595435&units=metric&lang=uk&appid=df61f0f04d92b420c7076af07e1d1d5f');
        let data = await response.json();

        updateWeather(data);
    } catch (error) {
        widgetError.classList.add('is-visible');
        console.error('Error:', error);
    }
}

function updateTime() {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    dateDay.innerText = day + ':';
    dateMonth.innerText = month + ':';
    dateYear.innerText = year;
    dateHours.innerText = hour + ':';
    dateMinutes.innerText = minute;
}

function  updateWeather(data) {
    const currentItem = data.weather[0];

    weatherTemperature.innerText = Math.trunc(data.main.temp) + '°';
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${currentItem.icon}.png` );
    weatherState.innerText = currentItem.description;
    weatherLocation.innerText = data.name;
    weatherWindSPeed.innerText = Math.trunc(data.wind.speed) + ' м/с';
}

fetchData();
updateTime();
setInterval(updateTime, 1000);

