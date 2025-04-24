function playAgain() {
    const video = document.getElementById('myVideo');
    video.currentTime = 0;
    video.play();
  }
  
  function rateMovie() {
    const ratingArea = document.getElementById('ratingArea');
    ratingArea.innerHTML = `
      <p>Rate this movie:</p>
      <button onclick="submitRating(1)">1</button>
      <button onclick="submitRating(2)">2</button>
      <button onclick="submitRating(3)">3</button>
      <button onclick="submitRating(4)">4</button>
      <button onclick="submitRating(5)">5</button>
    `;
  }
  
  function submitRating(score) {
    alert("Thanks for rating: " + score);
    document.getElementById('ratingArea').innerHTML = '';
  }
  