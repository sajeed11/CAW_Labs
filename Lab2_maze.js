let wall = document.querySelectorAll(".boundary");
let start = document.getElementById("start");
let end = document.getElementById("end");
let maze = document.getElementById("maze");
let clicked = false;
var percentage = 0;

let status = document.getElementById("status");
console.log(status);
let mazeWidth = maze.offsetWidth - 20; // Width of the maze

// Define audio elements for winning and losing
const winSound = new Audio("win.mp3"); // Replace "win.mp3" with the actual path to your winning sound
const loseSound = new Audio("lose.mp3"); // Replace "lose.mp3" with the actual path to your losing sound

start.addEventListener("click", function () {
  clicked = true;
  status.innerHTML = 'Move your mouse over the "S" to begin.';
  wall.forEach((element) => {
    element.classList.remove("youlose");
    element.classList.remove("youwon");
  });
});

wall.forEach((element) => {
  element.addEventListener("mouseover", function () {
    if (clicked) {
      wall.forEach((element) => {
        element.classList.add("youlose");
      });
      status.innerHTML = "You lose!";
      clicked = false;
      // loseSound.play(); // Play losing sound
    }
  });
});

maze.addEventListener("mouseleave", function () {
  if (clicked) {
    wall.forEach((element) => {
      element.classList.add("youlose");
    });
    status.innerHTML = "You lose!";
    clicked = false;
    // loseSound.play(); // Play losing sound
  }
});

maze.addEventListener("mousemove", function (event) {
  if (clicked) {
    let mouseX = event.clientX - maze.getBoundingClientRect().left; // Mouse X position relative to the maze
    percentage = (mouseX / mazeWidth) * 100; // Calculate the percentage
    status.innerHTML = `Move your mouse over the "S" to begin. Progress: ${percentage.toFixed(
      2
    )}%`;
    if (percentage >= 100) {
      status.innerHTML = "You win!";
      wall.forEach((element) => {
        console.log("end");
        element.classList.add("youwon");
      });
    }
  }
});

let doors = document.querySelectorAll(".door1, .door2, .door3");

doors.forEach((door) => {
  door.addEventListener("mouseover", function () {
    if (clicked) {
      door.classList.add("youlose");
      status.innerHTML = "You lose!";
      clicked = false;
      // loseSound.play(); // Play losing sound

      // boundary.forEach((b) => {
      //   b.classList.add("youlose");
      // });
    }
  });
});
