const btn = document.getElementById("toggle-Btn");
const start = document.getElementById("motion");

btn.addEventListener("click", moveBtn);

function moveBtn() {
  btn.classList.toggle("move");
  btn.classList.toggle("color");
  start.classList.toggle("motion");

}
