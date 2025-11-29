document.querySelector('#header');

window.addEventListener('load', function() {
  header.innerHTML = `    
  <div class="right-section"><img class="site-logo" src="/header/TempLogo.png"></div>
  <div class="middle-section">Home</div>
  <div class="left-section">Left-section</div>`;
});