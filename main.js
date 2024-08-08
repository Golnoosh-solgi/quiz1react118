const images = [
  "angular.png",
  "angular.png",
  "aurila.png",
  "aurila.png",
  "backbone.png",
  "backbone.png",
  "ember.png",
  "ember.png",
  "javascript.png",
  "javascript.png",
  "react.png",
  "react.png",
];

let firstSquare = "";
let secondSquare = "";
let turnCount = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  shuffle(images);
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.image = images[i];
    const img = document.createElement("img");

    img.src = images[i];
    square.appendChild(img);
    square.addEventListener("click", handleSquareClick);
    grid.appendChild(square);
  }
}

function handleSquareClick(event) {
  const square = event.currentTarget;
  if (square === firstSquare || square.classList.contains("matched")) return;
  square.querySelector("img").style.display = "block";

  if (!firstSquare) {
    firstSquare = square;
  } else {
    secondSquare = square;

    turnCount++;

    if (firstSquare.dataset.image === secondSquare.dataset.image) {
      firstSquare.classList.add("matched");
      secondSquare.classList.add("matched");
      firstSquare = "";
      secondSquare = "";
    } else {
      setTimeout(() => {
        firstSquare.querySelector("img").style.display = "none";

        secondSquare.querySelector("img").style.display = "none";

        firstSquare = "";

        secondSquare = "";
      }, 1000);
    }
  }
}

document.getElementById("reset").addEventListener("click", createBoard);

document.getElementById("clear-board").addEventListener("click", () => {
  document.getElementById("scoreboard").innerHTML =
    "<tr><th>نام</th><th>امتیاز</th></tr>";
});

createBoard();
