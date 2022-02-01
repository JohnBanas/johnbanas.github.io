const pdfButton = document.getElementById("resume-show");
const iframeDisplay = document.getElementById("pdf");

let isDisplaying = false;

const controlDisplay = (e) => {
  e.preventDefault();
  if (isDisplaying) {
    iframeDisplay.setAttribute("style", "display: none")
    isDisplaying = false;
  } else {
    iframeDisplay.removeAttribute("style");
    isDisplaying = true;
  }
}



pdfButton.addEventListener("click", controlDisplay);
