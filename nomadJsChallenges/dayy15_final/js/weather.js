// 위치 정보를 받을 때
function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "b7c47ebbe129f0a2919f0d07380d0c9a";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `날씨 : ${data.weather[0].main}`;
      city.innerText = `지역 : ${data.name}`;
    });
}
// 위치 정보를 받지 못할 때
function GeoNo() {
  alert("위치 정보를 받을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoNo);
