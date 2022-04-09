
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

//local save toggletheme=dark
const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


const dt = document.querySelector(".dt");
const lt = document.querySelector(".lt");

dt.addEventListener("click", btnClick);
lt.addEventListener("click", btnClick);

function btnClick() {
    console.log(dt.classList);
    dt.classList.toggle("hidden");
    console.log(lt.classList);
    lt.classList.toggle("hidden");
  }
