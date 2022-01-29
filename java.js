

const htmlEl = document.getElementsByTagName('html')[0];
const toggleTheme = (theme) => {
  htmlEl.dataset.theme = theme;
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














