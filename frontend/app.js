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

function setNextQuestion(shuffledQuestions, currentQuestionIndex) {
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
  questionContainer.appendChild(leftOption);
  // Create right button
  const rightOption = document.createElement("div");
  rightOption.setAttribute("class", "card");
  rightOption.setAttribute("Id", "right-option");
  rightOption.innerText = question.rightOption;
  questionContainer.appendChild(rightOption);


  // Add eventlistener
  leftOption.addEventListener("click", selectOption.bind(question));
  rightOption.addEventListener("click", selectOption.bind(question));

}

function selectOption(e) {
  const selected = e.target;
  // Submit option to the server
  let correct = {
    numCorrect: this.numCorrect + 1,
    numIncorrect: this.numIncorrect
  }

  let incorrect = {
    numIncorrect: this.numIncorrect + 1,
    numCorrect: this.numCorrect
  }

  let data;
  if (selected.innerText === this.correctOption) {
    data = correct;
  } else {
    data = incorrect;
  }

  fetch(`http://127.0.0.1:3000/questions/${this.id}`, {
    method: "PATCH",
    headers: {
	     "Content-Type": "application/json",
	     "Accept": "application/json"
     },
    body: JSON.stringify(data)
  })
  .then(response => console.log(response))
  .then(data => console.log(data))
  .catch(err => console.log(err));

  // Display statistics
  Array.from(questionContainer.children).forEach(card => {
    if (card === selected) {
      card.classList.add("selected");
    } else {
      card.classList.add("not-selected");
    }
    if (card.innerText === this.correctOption) {
      card.classList.add("correct");
    } else {
      card.classList.add("incorrect")
    }
  })

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
