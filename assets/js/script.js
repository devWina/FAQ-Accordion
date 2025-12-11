const questions = document.querySelectorAll(".question-title");
const answers = document.querySelectorAll(".answer");
const plusIcons = document.querySelectorAll(".plus-icon");
const minusIcons = document.querySelectorAll(".minus-icon");

questions.forEach((question, i) => {
  question.addEventListener("click", (e) => {
    answers.forEach((answer, j) => {
      // console.log(j, i);
      if (j !== i) {
        answer.classList.remove("max-h-64");
        answer.classList.add("max-h-0");
        plusIcons[j].classList.remove("hidden");
        minusIcons[j].classList.add("hidden");
      }
    });

    if (answers[i].classList.contains("max-h-0")) {
      answers[i].classList.remove("max-h-0");
      answers[i].classList.add("max-h-64");
      plusIcons[i].classList.add("hidden");
      minusIcons[i].classList.remove("hidden");
    } else {
      answers[i].classList.remove("max-h-64");
      answers[i].classList.add("max-h-0");
      plusIcons[i].classList.remove("hidden");
      minusIcons[i].classList.add("hidden");
    }
    // console.log(answers[i]);
  });
});
