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
  function loseGame() {
    increment -= 10;
    document.getElementById("status").innerText = "you Lost\n" + increment;
    end_btn.removeEventListener("mouseover", winGame);
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].removeEventListener("mouseover", loseGame);
      outside_maze[i].style.borderColor = "red";
    }
  }
  function startGame() {
    document.getElementById("status").innerText = "Game Started.\n" + increment;

    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].style.borderColor = "initial";
      outside_maze[i].addEventListener("mouseover", loseGame);
    }
    end_btn.addEventListener("mouseover", winGame);
  }
  function winGame() {
    increment += 5;
    document.getElementById("status").innerText = "You Won\n" + increment;
    end_btn.removeEventListener("mouseover", winGame);
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].removeEventListener("mouseover", loseGame);
    }
  }
  function resetGame() {
    increment = 0;
    document.getElementById("status").innerText = "Game Started.\n" + increment;
    end_btn.addEventListener("mouseover", winGame);
    for (i = 0; i < outside_maze.length - 1; i++) {
      outside_maze[i].addEventListener("mouseover", loseGame);
      outside_maze[i].style.borderColor = "initial";
    }
  }
});
