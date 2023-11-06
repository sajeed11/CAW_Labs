let wall = document.querySelectorAll(".boundary");
let start = document.getElementById("start");
let end = document.getElementById("end");
let maze = document.getElementById("maze");
let clicked = false;

let status = document.getElementById("status");
let mazeWidth = maze.offsetWidth - 10;
console.log(mazeWidth);

start.addEventListener("click", function () {
  clicked = true;
  status.innerHTML = 'Move your mouse over the "S" to begin.';
  wall.forEach((element) => {
    element.classList.remove("youlose");
    element.classList.remove("youWin");
  });
});

end.addEventListener("mouseover", function () {
  if (clicked) {
    status.innerHTML = "You win!";
   
  }
   wall.forEach((element) => {
     element.classList.add("youWin");
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

maze.addEventListener('mousemove', function (event) {
  if (clicked) {
    const mouseX = event.clientX - maze.getBoundingClientRect().left;
    const per = (mouseX / mazeWidth) * 100;
    status.innerHTML = `Your Progress is ${per.toFixed(2)}%`;
    if (per.toFixed(2) > 100) {
      status.innnerHTML = 'You Won';
    }
  }
} )
