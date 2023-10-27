let wall = document.querySelectorAll(".boundary");
let start = document.getElementById("start");
let end = document.getElementById("end");
let maze = document.getElementById("maze");
let clicked = false;

let status = document.getElementById("status");
console.log(status);

start.addEventListener("click", function () {
  clicked = true;
  status.innerHTML = 'Move your mouse over the "S" to begin.';
  wall.forEach((element) => {
    element.classList.remove("youlose");
  });
});

end.addEventListener("mouseover", function () {
  if (clicked) {
    status.innerHTML = "You win!";
  }
});

wall.forEach((element) => {
  element.addEventListener("mouseover", function () {
    if (clicked) {
      wall.forEach((element) => {
        element.classList.add("youlose");
      });
      status.innerHTML = "You lose!";
      clicked = false;
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
  }
});
