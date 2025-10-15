let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let scoreXSpan = document.querySelector(".scoreX span");
let scoreOSpan = document.querySelector(".scoreO span");
let turnX = true;
let isWinner = false;
let count = 0;
console.log("hi");

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (!box.innerHTML) {
      if (turnX) {
        box.innerHTML = "X";
        turnX = false;
        box.style.color = "red";
      } else {
        box.innerHTML = "O";
        turnX = true;
        box.style.color = "green";
      }
      check();
      count += 1;
      if (!isWinner && count === 9) showDraw();
    }
    scoreXSpan.innerText = countX;
    scoreOSpan.innerText = countO;
  });
});

function check() {
  winning.forEach((win) => {
    if (
      boxes[win[0]].innerHTML != "" &&
      boxes[win[1]].innerHTML != "" &&
      boxes[win[2]].innerHTML != ""
    ) {
      if (
        boxes[win[0]].innerHTML === boxes[win[1]].innerHTML &&
        boxes[win[1]].innerHTML === boxes[win[2]].innerHTML
      ) {
        isWinner = true;
        showWinner(boxes[win[1]].innerHTML);
      }
    }
  });
}

let countX = JSON.parse(localStorage.getItem("X")) || [0];
scoreXSpan.innerText = countX;
// console.log(countX);
let countO = JSON.parse(localStorage.getItem("O")) || [0];
scoreOSpan.innerText = countO;

function showWinner(win) {
  if (win != " ") {
    // console.log(win, "is Winner");
    result.innerHTML = `${win} is winner`;
    if (win === "X") {
      result.style.color = "red";
      countX++;
      saveCountX();
    } else {
      result.style.color = "green";
      countO++;
      saveCountO();
    }
  }
  disableButtons();
}

function showDraw() {
  console.log("Game Draw!");
  result.innerHTML = `Game Draw!`;
  result.style.color = "royalblue";
  disableButtons();
}

function disableButtons() {
  boxes.forEach((box) => {
    if (!box.innerText) {
      box.innerHTML = " ";
    }
  });
}

function saveCountX() {
  localStorage.setItem("X", JSON.stringify(countX));
}
function saveCountO() {
  localStorage.setItem("O", JSON.stringify(countO));
}

document.querySelector(".scoreX button").addEventListener("click", () => {
  localStorage.removeItem("X");
  countX = [0];
  scoreXSpan.innerHTML = `0`;
});

document.querySelector(".scoreO button").addEventListener("click", () => {
  localStorage.removeItem("O");
  countO = [0];
  scoreOSpan.innerHTML = `0`;
});
