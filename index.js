// script.js
// Function to handle play button click
function playMusic(event) {
    var songElement = event.target.parentElement;
    var songName = songElement.querySelector('h3').innerText;
    var artistName = songElement.querySelector('p').innerText;
    
    // Replace this alert with actual music playback logic
    alert(`Now playing: ${songName} by ${artistName}`);
  }
  
  // Attach event listeners to all play buttons
  var playButtons = document.querySelectorAll('.play-button');
  playButtons.forEach(function(button) {
    button.addEventListener('click', playMusic);
  });
  