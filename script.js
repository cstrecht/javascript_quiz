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

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClicked);
    });
  } else {
    finishQuiz();
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

// when there's no more questions:
function finishQuiz() {
  // hide the quiz area;
  // show the score and the final message
  let points = Math.floor((correctAnswers / questions.length) * 100);

  if (points < 30) {
    document.querySelector(".scoreText").innerHTML =
      "Looks like you need to practice 😳";
  } else if (points >= 30 && points < 60) {
    document.querySelector(".scoreText").innerHTML = "You are getting there 🙏🏻";
  } else if (points >= 60 && points < 90) {
    document.querySelector(".scoreText").innerHTML = "Keep working 🔥";
  } else if (points >= 90 && points <= 100) {
    document.querySelector(".scoreText").innerHTML = "Congratulations! 🥳";
  }

  document.querySelector(".score").style.display = "block";
  document.querySelector(".quiz").style.display = "none";
  // complete the progressing bar:
  document.querySelector(".progress-bar").style.width = "100%";

  document.querySelector(".percentage").innerHTML = `${points}%`;
  document.querySelector(
    ".scoreMessage"
  ).innerHTML = `You got ${correctAnswers} correct answers out of 10`;
}
