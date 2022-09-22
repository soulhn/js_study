const clockTitle = document.querySelector(".js-clock");
console.log(clockTitle);

function getTime() {
  const xmas = new Date("2022-12-25");
  const nowTime = new Date();
  const getDday = xmas - nowTime;
  console.log(getDday);
  const day = Math.floor(getDday / (1000 * 60 * 60 * 24));
  const hour = Math.floor((getDday / (1000 * 60 * 60)) % 24);
  const min = Math.floor((getDday / (1000 * 60 * 60)) % 60);
  const second = Math.floor((getDday / 1000) % 60);
  console.log(day, hour, min, second);
  clockTitle.innerText = `${day}d ${hour}h ${min}m ${second}s`;
}
getTime();
setInterval(getTime, 1000);
