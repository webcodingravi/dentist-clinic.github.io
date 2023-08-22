/****navbar scroll */

let nav = document.querySelector(".navbar");
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
 if(document.documentElement.scrollTop > 20) {
     nav.classList.add('scroll-on');
     mybutton.style.display = "block";
 }else{
  nav.classList.remove('scroll-on');
  mybutton.style.display = "none";

 }

}

/******navbar hide */

let Navbar = document.querySelectorAll(".nav-link");
let Navcollapse = document.querySelector(".navbar-collapse.collapse");

Navbar.forEach(function(a) {
   a.addEventListener("click", function() {
      Navcollapse.classList.remove("show");
   })
});


/****BUTTON SLIDE TOP */

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
