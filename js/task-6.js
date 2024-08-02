function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodySelect = document.querySelector("body");
const selectDiv = document.querySelector("#boxes");
const selectInputNum = document.querySelector("input[type=number]");
const selectButtonCreate = document.querySelector("button[data-create]");
const selectButtonDestroy = document.querySelector("button[data-destroy]");

selectButtonCreate.addEventListener("click", createBoxes);
function createBoxes(amount) {
  destroyBoxes();
    amount = parseFloat(selectInputNum.value);
   if (amount >= 0 && amount <= 100) {
      let numGrow = 10;
        for (let i = 0; i < amount; i++) {
          const newDiv = document.createElement("div");
          numGrow += 10;
            newDiv.style.width = 20 + numGrow + "px";
            newDiv.style.height = 20 + numGrow + "px";
          newDiv.style.backgroundColor = getRandomHexColor();
          
            selectDiv.appendChild(newDiv);
        }
      selectInputNum.value = "";
    }
}

selectButtonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() { selectDiv.innerHTML = ""; }