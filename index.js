var comp;

document.querySelector(".rock").addEventListener("click", function () {
  comp = getCompChoice();
  document.querySelector(".player").innerHTML = "You Played Rock";
  document.querySelector(".comp").innerHTML = "Computer Played " + comp;
  Rock(comp);
});

document.querySelector(".paper").addEventListener("click", function () {
  comp = getCompChoice();
  document.querySelector(".player").innerHTML = "You Played Paper";
  document.querySelector(".comp").innerHTML = "Computer Played " + comp;
  Paper(comp);
});

document.querySelector(".scissor").addEventListener("click", function () {
  comp = getCompChoice();
  document.querySelector(".player").innerHTML = "You Played Scissor";
  document.querySelector(".comp").innerHTML = "Computer Played " + comp;
  Scissor(comp);
});

function Rock(comp) {
  switch (comp) {
    case "Rock":
      document.querySelector(".result").innerHTML = "It's a Tie!";
      break;
    case "Paper":
      document.querySelector(".result").innerHTML = "Computer Won!";
      document.querySelector(".compScore").innerHTML++;
      break;
    case "Scissor":
      document.querySelector(".result").innerHTML = "You Won!";
      document.querySelector(".playerScore").innerHTML++;
      break;

    default:
      break;
  }
}

function Paper(comp) {
  switch (comp) {
    case "Rock":
      document.querySelector(".result").innerHTML = "You Won!";
      document.querySelector(".playerScore").innerHTML++;
      break;
    case "Paper":
      document.querySelector(".result").innerHTML = "It's a Tie!";
      break;
    case "Scissor":
      document.querySelector(".result").innerHTML = "Computer Won!";
      document.querySelector(".compScore").innerHTML++;
      break;

    default:
      break;
  }
}

function Scissor(comp) {
  switch (comp) {
    case "Rock":
      document.querySelector(".result").innerHTML = "Computer Won!";
      document.querySelector(".compScore").innerHTML++;
      break;
    case "Paper":
      document.querySelector(".result").innerHTML = "You Won!";
      document.querySelector(".playerScore").innerHTML++;
      break;
    case "Scissor":
      document.querySelector(".result").innerHTML = "It's a Tie!";
      break;
    default:
      break;
  }
}

function getCompChoice() {
  var array = ["Rock", "Paper", "Scissor"];
  var n = Math.floor(Math.random() * 3);
  return array[n];
}
