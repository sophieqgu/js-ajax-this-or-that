const questionContainer = document.getElementById("question-container");
//const leftOption = document.getElementById("left-option");
//const rightOption = document.getElementById("right-option");
let shuffledQuestions, currentQuestionIndex = 0;


function loadQuestion() {
  questionContainer.classList.remove("hidden");

  fetch("http://127.0.0.1:3000/questions")
    .then(response => response.json())
    .then(data => {
      const questions = data;
      shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
      setNextQuestion(shuffledQuestions, currentQuestionIndex);
    })
    .catch(err => console.log(err.message));
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
  while (questionContainer.firstChild) {
    questionContainer.removeChild(questionContainer.firstChild);
  }
}

function showQuestion(question) {
  // Create left button
  const leftOption = document.createElement("div");
  leftOption.setAttribute("class", "card");
  leftOption.setAttribute("Id", "left-option");
  leftOption.innerText = question.leftOption;
  leftOption.addEventListener("click", selectOption);
  questionContainer.appendChild(leftOption);
  // Create right button
  const rightOption = document.createElement("div");
  rightOption.setAttribute("class", "card");
  rightOption.setAttribute("Id", "right-option");
  rightOption.innerText = question.rightOption;
  rightOption.addEventListener("click", selectOption);
  questionContainer.appendChild(rightOption);
}

function selectOption(e) {

}

function displayPlayers() {
  fetch("http://127.0.0.1:3000/players")
  .then(response => response.json())
  .then(object => {
    for (const player of object) {
      let element = document.createElement('p');
      element.innerText = player.name;
      document.body.appendChild(element);
    }
  });
}

function submitPlayerName(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("http://127.0.0.1:3000/players", {
    method: "POST",
    body: formData
  })
  .then(response => {
    console.log(response);
  });
  e.target.innerHTML = "";
  displayPlayers();
}

function askPlayerName() {
  // Create a wrapper
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "form__group");
  // Generate a form
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");
  // Create an input element for Name
  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("name", "name");
  name.setAttribute("id", "name");
  name.setAttribute("class", "form__field");
  name.setAttribute("placeholder", "Who are you?");
  name.setAttribute("autocomplete", "off");
  const label = document.createElement("label");
  label.setAttribute("for", "name");
  label.setAttribute("class", "form__label");
  label.innerHTML = "Name --> PRESS ENTER"
  // Append the input element to the form
  form.append(name);
  form.append(label);
  // Append the form the to the wrapper
  wrapper.appendChild(form);
  // Append the wrapper to the document body;
  document.body.appendChild(wrapper);
  // Add eventlistener
  form.addEventListener("submit", submitPlayerName);
}


document.addEventListener("DOMContentLoaded", function() {
  loadQuestion();
// askPlayerName();

})
