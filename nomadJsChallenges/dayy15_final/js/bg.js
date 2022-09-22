const images = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg", "bg5.jpeg"];

const random = Math.floor(Math.random() * images.length) + 1;

document.body.style.backgroundImage = ` url(./img/bg${random}.jpeg)`;
