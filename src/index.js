let now = new Date();
let minute = now.getMinutes();
let hour = now.getHours();
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(now.getMinutes());
console.log(now.getHours());
console.log(now.getDay());
console.log(weekday);

let today = weekday[now.getDay()];
let current = document.querySelector("p2");
current.innerHTML = `${today} ${hour}:${minute}`;

function showTemp(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#cityEntry");
  cityElement.innerHTML = response.data.city;

  console.log(response.data);
  console.log(temperatureElement);
  console.log(cityElement);
}

function convertToCel(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature - 32) * (5 / 9));
  console.log(temperature);
}
function convertToFah(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
  console.log(temperature);
}

let celTemp = document.querySelector("#celsius-temp");
celTemp.addEventListener("click", convertToCel);
let fahTemp = document.querySelector("#fahrenheit-temp");
fahTemp.addEventListener("click", convertToFah);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#cityEntry");
  let citySearch = document.querySelector("#city-search");
  let city = citySearch.value;
  cityElement.innerHTML = citySearch.value;
  let apiKey = "e7b3f4obebt21aeffd4fe6d8a0da7143";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=" +
    city +
    "&key=" +
    apiKey +
    "&units=imperial";

  console.log(apiUrl);
  console.log(apiKey);
  console.log(city);
  axios.get(apiUrl).then(showTemp);
  cityElement.innerHTML = city;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function converToNight(event) {
  event.preventDefault();
  let skyElement = document.querySelector("#sky");
  let sky = skyElement.innerHTML;
  if (hour >= "17") {
    skyElement.innerHTML = "🌙";
  } else if (hour > "5") {
    skyElement.innerHTML = "🌤";
  }
  console.log(sky);
}

function handlePosition(position) {
  let p1 = document.querySelector("p1");
  p1.innerHTML = console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
