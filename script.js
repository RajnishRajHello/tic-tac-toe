let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
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

function showWinner(win) {
  if (win != " ") {
    // console.log(win, "is Winner");
    result.innerHTML = `${win} is winner`;
    if (win === "X") {
      result.style.color = "red";
    } else {
      result.style.color = "green";
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

// function webWork() {
//   const navbar = document.querySelector(".navbar");
//   const content = document.querySelector(".navContent");

//   let isOpen = false;
//   let count = 0;
//   navbar.addEventListener("click", () => {
//     if (!isOpen) {
//       gsap.to(content, {
//         x: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       });
//     } else {
//       gsap.to(content, {
//         x: "-100%",
//         duration: 0.6,
//         ease: "power2.out",
//       });
//       count -= 2;
//     }
//     isOpen = !isOpen;
//   });

//   document.body.addEventListener("click", () => {
//     count += 1;
//     if (isOpen && (count % 2 === 0 || (count * -1) % 2 === 0)) {
//       gsap.to(content, {
//         x: "-100%",
//         duration: 0.6,
//         ease: "power2.out",
//       });
//       isOpen = !isOpen;
//       count = 0;
//     }
//   });
// }

function menuTask() {
  const menu = document.querySelector(".navContent");
  const btn = document.querySelector(".navbar");
  let menuOpen = false;

  //function to open menu
  function openMenu() {
    gsap.to(menu, {
      x: 0,
      duration: 0.6,
      ease: "power3.out",
    });
    menuOpen = true;

    //start listening for outside clicks
    document.addEventListener("click", handleOutsideClicks);
  }

  //function to close menu
  function closeMenu() {
    gsap.to(menu, {
      x: "-120%",
      duration: 0.6,
      ease: "power3.out",
    });
    menuOpen = false;

    //stop listening for outside clicks
    document.removeEventListener("click", handleOutsideClicks);
  }

  // toggle with hamburger button
  btn.addEventListener("click", (e) => {
    //prevent immediate outside click firing
    e.stopPropagation();

    menuOpen ? closeMenu() : openMenu();
  });

  // handle outside clicks
  function handleOutsideClicks(e) {
    //if click is not inside menu or hamburger button
    if (!menu.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  }
}
menuTask();
