document.querySelector('#header');

window.addEventListener('load', function() {
  header.innerHTML = `    
  <div class="left-section">
      <div class="logo-container">
      <a href="/set-lists/index.html"><img class="site-logo" src="/header/TempLogo.png"></a>
      </div>
    </div>
    <div class="middle-section">
      <div class="sets-link">
        <a href="/set-lists/index.html">Sets</a>
      </div>
      <div class="decks-link">
        <a href="">Decks</a>
      </div>
    </div>
    <div class="right-section">
      <div class="sign-in-link">
        <a href="">Sign in</a>
      </div>
      <div class="register-link">
        <a href="">Register</a>
      </div>
    </div>`;
});