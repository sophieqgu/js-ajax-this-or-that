const questionContainer = document.getElementById("question-container");
//leftOption = document.getElementById("left-option");
//rightOption = document.getElementById("right-option");
let shuffledQuestions, currentQuestionIndex = 0;
let currentScore = 0;


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
  currentQuestionIndex++;
}

function resetState() {
  while (questionContainer.firstChild) {
    questionContainer.firstChild.removeEventListener("click", selectOption);
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
  const select = selectOption.bind(question);
  leftOption.addEventListener("click", select, {once: true});
  rightOption.addEventListener("click", select, {once: true});
  questionContainer.addEventListener("click", preventClick.bind(select));
}

// Prevent click on the sibling again
function preventClick() {
  Array.from(questionContainer.children).forEach(card => {
    card.removeEventListener("click", this);
  });
}

function selectOption(e) {
  const selected = e.target;
  selected.classList.add("selected");
  if (selected.innerText === this.correctOption) {
    currentScore += 10;
    console.log(currentScore);
  }
  // Submit option to the server
  let correct = {
    numCorrect: this.numCorrect + 1,
    numIncorrect: this.numIncorrect
  }

  let incorrect = {
    numIncorrect: this.numIncorrect + 1,
    numCorrect: this.numCorrect
  }

  let data = selected.innerText === this.correctOption ? correct : incorrect;

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
  let correctPercentage = Math.round(this.numCorrect / (this.numCorrect + this.numIncorrect) * 100);
  Array.from(questionContainer.children).forEach(card => {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    card.appendChild(content);
    if (card.innerText === this.correctOption) {
      card.classList.add("correct");
      content.innerText = `${correctPercentage}%`;
    } else {
      card.classList.add("incorrect")
      content.innerText = `${100 - correctPercentage}%`;
    }
  })


  // Proceed to next question
  if (currentQuestionIndex < shuffledQuestions.length) {
    setTimeout(() => setNextQuestion(), 2000);
  } else {
    setTimeout(() => askPlayerName(), 2000);
  }
}

function displayScore() {
  if (currentScore > 50) {
    return `We have <span>${currentScore}%</span> overlap of interest! We have so much to talk about!`
  } else {
    return `We have <span>${currentScore}%</span> overlap of interest! As if we are complete different people!`
  }
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
  let name = new FormData(this).get("name");
  const formData = {
    name: name,
    score: currentScore
  }

  fetch("http://127.0.0.1:3000/players", {
    method: "POST",
    headers: {
	     "Content-Type": "application/json",
	     "Accept": "application/json"
     },
    body: JSON.stringify(formData)
  })
  .then(response => {
    console.log(response);
  });
  e.target.innerHTML = "";
  displayPlayers();
}

function askPlayerName() {
  resetState();
  // Create a wrapper
  const wrapper = document.createElement('div');
  wrapper.setAttribute("class", "form__group");
  // Create a greeting
  const result = document.createElement('h2');
  result.innerHTML = displayScore();
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
  name.setAttribute("placeholder", "Leave a name?");
  name.setAttribute("autocomplete", "off");
  const label = document.createElement("label");
  label.setAttribute("for", "name");
  label.setAttribute("class", "form__label");
  label.innerHTML = "Name --> PRESS ENTER"
  // Append the input element to the form
  form.append(name);
  form.append(label);

  // Append the greeting and form the to the wrapper
  wrapper.appendChild(result);
  wrapper.appendChild(form);

  // Append the wrapper to the document body;
  document.body.appendChild(wrapper);

  // Add eventlistener
  form.addEventListener("submit", submitPlayerName);
}

document.addEventListener("DOMContentLoaded", function() {
  //loadQuestion();
  askPlayerName();

})
