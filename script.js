'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

let sendEmail = document.getElementById("sendemail");
sendEmail.addEventListener('click', function(e){
  e.preventDefault()
  console.log('hiiii')
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let number = document.getElementById('number').value;
  let message = document.getElementById('message').value;
  let body = 'name'+ name + '<br/> email: '+ email + '<br/> number: ' + number + '<br/> message: '+ message;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "musiclover7781@gmail.com",
    Password : "E41F8764381257A8BA6FCC7942457F11AD7B",
    To : 'musiclover7781@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : body,
}).then(
  message => alert(message)
);

})