const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  // you can add more quiz here
];

let i = 0;
let score = 0;

function onsubmitted() {
  if (i > 0 && i <= quizData.length) {
    // Not the first question, check the previous answer
    const selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.id === quizData[i - 1].correct) {
        score++;
      }
      selectedOption.checked = false; // Clear the selection
    } else {
      if (i < quizData.length) {
        alert("Please select an answer before proceeding.");
      }
      return; // Don't go to the next question if nothing is selected
    }
  }
  if (i >= quizData.length) {
    if (i > quizData.length) {
      location.reload();
      score = 0;
      return;
    }
    let el = document.querySelectorAll(".submit");
    el[0].textContent = "ReStart";
    document.querySelector(
      ".question"
    ).textContent = `Your score is ${score}/${quizData.length}`;
    document.querySelector(".options").innerHTML = "";
    i++;
    return;
  }
  if (i >= 0) {
    document.querySelector(".home-page").style.display = "none";
    document.querySelector(".quiz-body").style.display = "flex";
    let el = document.querySelector(".quiz-body");
  }
  document.querySelector(".submit").textContent = "Submit";
  let q = document.querySelector(".question");
  q.innerHTML = quizData[i].question;

  let options = document.querySelectorAll("label");
  options[0].innerHTML = quizData[i].a;
  options[1].innerHTML = quizData[i].b;
  options[2].innerHTML = quizData[i].c;
  options[3].innerHTML = quizData[i].d;
  i++;
}
