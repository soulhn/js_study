const body = document.querySelector("body");
//console.log(body);

function changeBackgroundColor() {
  const windowWidth = window.innerWidth;
  //console.log(windowWidth);
  if (windowWidth >= 1400) {
    body.style.backgroundColor = "yellow";
  } else if (windowWidth >= 800) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "skyblue";
  }
}

window.addEventListener("resize", changeBackgroundColor);
