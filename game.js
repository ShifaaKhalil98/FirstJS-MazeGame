document.addEventListener("DOMContentLoaded", function (event) {
  //declarations
  var increment = 0;
  document.getElementById("status").innerText =
    'Begin by moving your mouse over the "S".\n' + increment;
  start_btn = document.getElementById("start");
  end_btn = document.getElementById("end");
  outside_maze = document.getElementsByClassName("boundary");
  // listeners
  start_btn.addEventListener("click", resetGame);
  start_btn.addEventListener("mouseover", startGame);

  // functions
  function startGame() {
    document.getElementById("status").innerText = "Game Started.\n" + increment;
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].style.borderColor = "initial";
      outside_maze[i].addEventListener("mouseover", loseGame);
    }
    end_btn.addEventListener("mouseover", winGame);
  }
  function loseGame() {
    increment -= 10;
    document.getElementById("status").innerText = "you Lost\n" + increment;
    end_btn.removeEventListener("mouseover", winGame);
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].removeEventListener("mouseover", loseGame);
      outside_maze[i].style.borderColor = "red";
    }
    back_to_initial();
  }
  function winGame() {
    increment += 5;
    document.getElementById("status").innerText = "You Won\n" + increment;
    end_btn.removeEventListener("mouseover", winGame);
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].removeEventListener("mouseover", loseGame);
    }
    back_to_initial();
  }
  function resetGame() {
    increment = 0;
    document.getElementById("status").innerText = "Game Started.\n" + increment;
    end_btn.addEventListener("mouseover", winGame);
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].addEventListener("mouseover", loseGame);
      outside_maze[i].style.borderColor = "initial";
    }
    back_to_initial();
  }
  //gameB __incomplete__
  play_with_div = document.getElementsByClassName("example")[0];
  play_with_div.innerText = "Click for gameB";
  play_with_div.style.textAlign = "center";
  play_with_div.style.fontSize = "15px";
  play_with_div.addEventListener("click", startGameB);
  initial_position = start_btn.getBoundingClientRect();

  function back_to_initial() {
    start_btn.style.position = "absolute";
    start_btn.style.right = initial_position.right;
    start_btn.style.left = initial_position.left;
    start_btn.style.top = initial_position.top;
    start_btn.style.bottom = initial_position.bottom;
  }
  function touches(p1, p2) {
    document.addEventListener("mousemove", function () {
      var rect1 = p1.getBoundingClientRect();
      var rect2 = p2.getBoundingClientRect();
      if (rect1.right > rect2.left) {
        return true;
      }
    });
  }
  event1 = new Event("touchEnd");
  if (touches(start_btn, end_btn)) {
    document.dispatchEvent(event1);
  }
  event2 = new Event("touchBorder");
  for (i = 0; i < outside_maze.length - 1; i++) {
    if (touches(start_btn, outside_maze[i])) {
      document.dispatchEvent(event2);
    }
  }
  function startGameB() {
    document.addEventListener("mousemove", function (e) {
      start_btn.style.top = e.clientY - 170 + "px";
      start_btn.style.left = e.clientX - 450 + "px";
    });
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].style.borderColor = "initial";
      outside_maze[i].addEventListener("mouseover", loseGame);
    }
    document.addEventListener("touchEnd", winGame);
    ocument.addEventListener("touchBorder", loseGame);
    document.getElementById("status").innerText = "Game Started.\n" + increment;
  }
});
