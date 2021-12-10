// Show the question:
let currentQuestion = 0;
showQuestion();

// Display the questions:
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    // questions:
    document.querySelector(".score").style.display = "none";
    document.querySelector(".quiz").style.display = "block";
    document.querySelector(".question").innerHTML = q.question;

    // options:
    let optionsHtml = " ";
    for (let i in q.options) {
      optionsHtml += `<div data-op="i" class="option">${q.options[i]}</div>`;
    }

    document.querySelector(".option").innerHTML = optionsHtml;
  } else {
    // there's no more questions, show the score at the end:
  }
}
