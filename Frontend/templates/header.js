document.querySelector('#header');

window.addEventListener('load', function() {
  fetch("/templates/header.template.html?v=1").then(r=>r.text()).then(d=>{
    //console.log(d); /*Subject to CSS if user input is introduced*/
    document.getElementById("header").innerHTML=d;
    // NOTE: innerText for variables.
  })
});