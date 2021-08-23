const baseValue = document.querySelector("#base");
const heightValue = document.querySelector("#height");
const calcBtn = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function calculateHypotenuse() {
    const base = Number(baseValue.value);
    const height= Number(heightValue.value);
    const hypotenuse = Math.sqrt(base**2+height**2);
    output.innerText = "The length of hypotenuse is " + hypotenuse;
}

calcBtn.addEventListener("click", calculateHypotenuse);