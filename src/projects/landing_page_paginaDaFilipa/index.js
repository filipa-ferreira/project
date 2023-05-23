//!fazer mouseover e mouseout nos botões
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");

btn1.addEventListener("mouseover", function() {
  btn1.classList.add("btn-grande");
  btn1.classList.remove("btn");
}, false);

btn1.addEventListener("mouseout", function() {
  btn1.classList.add("btn");
  btn1.classList.remove("btn-grande");
}, false);

btn2.addEventListener("mouseover", function() {
  btn2.classList.add("btn-grande");
  btn2.classList.remove("btn");
}, false);

btn2.addEventListener("mouseout", function() {
  btn2.classList.add("btn");
  btn2.classList.remove("btn-grande");
}, false);