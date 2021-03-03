const gameContainer = document.getElementById("game-container");
// const activeRoom = gameContainer.getElementById("active-room");
// const consoleBar = gameContainer.getElementById("consol-bar");
let gamePosition = gameContainer.getBoundingClientRect();

const cursor = document.querySelector(".cursor");

const mouse = {
  x: gameContainer.width / 2,
  y: gameContainer.height / 2,
  click: false,
};

document.getElementById("start").onclick = function () {
  window.location.href = "./play.html";
};

// document.getElementById("start").onclick = gameStart () {
//   window.location.href = "/play.html";
// };

function hideElement(elementID) {
  let item = document.getElementById("elementID");
  if (item.style.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}

gameContainer.addEventListener("mousedown", (event) => {
  mouse.x = event.x - gamePosition.left;
  mouse.y = event.y - gamePosition.top;
  mouse.click = true;
});
