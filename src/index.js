//import axios from "axios";
/*function currentTime(response) {
  let formattedTime = `${response.dayOfWeek} ${response.time}`;
  let time = document.querySelector("#currentTime");
  time.innerHTML = formattedTime;
}*/

function getCoordinates(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "0cade312aa440618836af6e6fd05e7ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateInformation);
}
function retrievePosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
}
function updateInformation(response) {
  //let latitude = response.data.coord.lat;
  //let longitude = response.data.coord.lon;
  document.querySelector("#currentDegree").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#tempMin").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#tempMax").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#cityName").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  /*axios
    .get(
      `https://www.timeapi.io/api/Time/current/coordinate?latitude=${latitude}&longitude=${longitude}`
    )
    .then(currentTime);*/
}
function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#searchBox");
  if (searchCity.value !== "") {
    let currentCity = searchCity.value;
    let apiKey = "0cade312aa440618836af6e6fd05e7ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateInformation);
  } else {
    alert("You should enter a city name!");
  }
}

let searchForm = document.querySelector("#searchCity");
searchForm.addEventListener("submit", search);

let button = document.querySelector("#currentLocation");
button.addEventListener("click", retrievePosition);
