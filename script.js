function checkPin() {
  const pin = document.getElementById('pin-input').value;
  if (pin === "1985") {
    const music = document.getElementById('bg-music');
    music.play().then(() => {
      // Show content only after music starts
      document.getElementById('login-screen').style.display = "none";
      document.getElementById('main-content').style.display = "block";
      startDecorations();

      // Fade in text after a short delay
      const message = document.querySelector('.message');
      message.classList.add('fade-in');
    }).catch(err => {
      alert("Tap the play button to start the music 🎵");
    });
  } else {
    alert("Wrong PIN, try again ❤️");
  }
}



function playMusic() {
  const music = document.getElementById('bg-music');
  music.play();
}

// Floating hearts and roses
function startDecorations() {
  const decorations = document.querySelector('.decorations');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = Math.random() > 0.5 ? "❤️" : "🌹";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    decorations.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 1000);
}
