function displayPlayers() {
  fetch("http://127.0.0.1:3000/players")
  .then(response => response.json())
  .then(object => {
    for (const player of object) {
      let element = document.createElement('p');
      element.innerText = player.name;
      document.body.appendChild(element);
    }
  })

}

function submitPlayer(e) {

  e.preventDefault();

  const formData = new FormData(this);

  fetch("http://127.0.0.1:3000/players", {
    method: "POST",
    body: formData
  })
  .then(response => {
    return response.text();
  })
  
}


document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector("form");
  form.addEventListener("submit", submitPlayer);


})
