const angles = document.querySelectorAll(".angles");
const checkTriangleBtn = document.querySelector("#isTriangle");
const output = document.querySelector("#output");



function checkTriangleHandler() {
    let sumOfAngles = 0;
    for (let angle of angles) {
        sumOfAngles += Number(angle.value);
    }
    if (sumOfAngles===180) {
        output.innerText = "Hurray, the angles form a triangle 🤩";
    }
    else {
        output.innerText = "Oops, the angles don't form a triangle 😅";
    }
}


checkTriangleBtn.addEventListener("click", checkTriangleHandler);