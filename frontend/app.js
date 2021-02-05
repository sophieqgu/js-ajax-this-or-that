function displayPlayers() {
  fetch("http://127.0.0.1:3000/players")
  .then(response => response.json())
  .then(json => {
    for (const player of json) {
      let element = document.createElement('p');
      element.innerText = player.name;
      document.body.appendChild(element);
    }
  })

}

document.addEventListener("DOMContentLoaded", function() {
  displayPlayers();
})
