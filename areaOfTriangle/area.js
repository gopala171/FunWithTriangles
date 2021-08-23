const baseValue = document.querySelector("#base");
const heightValue = document.querySelector("#height");
const calcBtn = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function calculateArea() {
    const base = Number(baseValue.value);
    const height= Number(heightValue.value);
    const area = (base*height)/2;
    output.innerText = "The area of the triangle is " + area; 
}

calcBtn.addEventListener("click", calculateArea);