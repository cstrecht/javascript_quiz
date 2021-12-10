// Show the question:
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

// Display the quiz area:
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    // Progress moving bar:
    let perc = Math.floor((currentQuestion / questions.length) * 100);
    document.querySelector(".progress-bar").style.width = `${perc}%`;

    // display the questions:
    document.querySelector(".score").style.display = "none";
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = q.question;
    // display the options:
    let optionsHtml = " ";
    for (let i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1 + ")"
      }</span> ${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml;

    // Click event to select the right answer:
    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClicked);
    });
  } else {
    // there's no more questions, show the score at the end:
  }
}
function optionClicked(event) {
  let choosenOption = parseInt(event.target.getAttribute("data-op"));
  if (questions[currentQuestion].answer === choosenOption) {
    correctAnswers++;
  }
  currentQuestion++;
  showQuestion();
}
