var btnTransLate = document.querySelector("#translate-btn");

var textArea = document.querySelector("#text-area");

var outputBox = document.querySelector("#output-box");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured ", error);
}

function clickEventListner() {
  var inputText = textArea.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputBox.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTransLate.addEventListener("click", clickEventListner);
