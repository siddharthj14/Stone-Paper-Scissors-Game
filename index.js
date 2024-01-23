var comp;
const array = ["Rock", "Paper", "Scissor"];

document.querySelectorAll(".move").forEach((choice) => {
  choice.addEventListener("click", () => {
    var n = Math.floor(Math.random() * 3);
    comp = array[n];
    document.querySelector(".player").innerHTML = "You Played " + choice.id;
    document.querySelector(".comp").innerHTML = "Computer Played " + comp;
    Result(choice.id, comp);
  });
});

function Result(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    document.querySelector(".result").innerHTML = "It's a Tie!";
  } else if (
    (playerChoice === "Rock" && compChoice === "Scissor") ||
    (playerChoice === "Paper" && compChoice === "Rock") ||
    (playerChoice === "Scissor" && compChoice === "Paper")
  ) {
    document.querySelector(".result").innerHTML = "You Won!";
    document.querySelector(".playerScore").innerHTML++;
  } else {
    document.querySelector(".result").innerHTML = "Computer Won!";
    document.querySelector(".compScore").innerHTML++;
  }
}
