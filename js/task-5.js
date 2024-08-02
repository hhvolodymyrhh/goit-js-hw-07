function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodySelect = document.querySelector("body");
const buttonSelect = document.querySelector(".change-color");
const spanInput = document.querySelector(".color");

buttonSelect.addEventListener("click", (event) => {
  const getColor = getRandomHexColor();
  spanInput.textContent = getColor;
  bodySelect.style.backgroundColor = getColor;  
})




