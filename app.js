//Element selection

const bodyFrame = document.querySelector("body");
const inputGradient1 = document.querySelector("#specialColor1");
const inputGradient2 = document.querySelector("#specialColor2");
let colorValue = document.querySelector("h3");

// Function for selecting linear gradient
// bodyFrame.addEventListener("click", function () {
//   bodyFrame.style.background = "green";
// });
function gradient() {
  bodyFrame.style.background =
    "linear-gradient(to right , " +
    inputGradient1.value +
    ", " +
    inputGradient2.value +
    " )";
  colorValue.textContent = ` The Rgb color of input 1 is :${inputGradient1.value} , Rgb color of input 2  is : ${inputGradient2.value}  `;
}

inputGradient1.addEventListener("input", gradient);
inputGradient2.addEventListener("input", gradient);
