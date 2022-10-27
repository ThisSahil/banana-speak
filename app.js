var btnTransLate = document.querySelector("#translate-btn");

var textArea = document.querySelector("#text-area");

var outputBox = document.querySelector("#output-box");

outputBox.innerHTML = "Hello Jii";

btnTransLate.addEventListener("click", function clickEventListner() {
  outputBox.innerHTML = "ajdfjsdvn " + textArea.value;
});
