function randomColor () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`;
}

const btnChangeColor = document.querySelector(".btn");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", function () {
    body.style.backgroundColor = randomColor();
})