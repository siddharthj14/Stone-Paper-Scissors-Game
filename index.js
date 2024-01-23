let comp;
const result = document.querySelector(".result");
const array = ["Rock", "Paper", "Scissor"];

document.querySelectorAll(".move").forEach((choice) => {
  choice.addEventListener("click", () => {
    var n = Math.floor(Math.random() * 3);
    comp = array[n];
    document.querySelector(".player").innerHTML = `You Played ${choice.id}`;
    document.querySelector(".comp").innerHTML = `Computer Played ${comp}`;
    Result(choice.id, comp);
  });
});

function Result(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    result.innerHTML = "It's a Tie!";
    result.style.color = "#fbff00";
  } else if (
    (playerChoice === "Rock" && compChoice === "Scissor") ||
    (playerChoice === "Paper" && compChoice === "Rock") ||
    (playerChoice === "Scissor" && compChoice === "Paper")
  ) {
    result.innerHTML = "You Won!";
    result.style.color = "#08eb32";
    document.querySelector(".playerScore").innerHTML++;
  } else {
    result.innerHTML = "You lost!";
    result.style.color = "#f31919";
    document.querySelector(".compScore").innerHTML++;
  }
}
