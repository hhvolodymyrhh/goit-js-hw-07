const listenElement = document.querySelector("#name-input");
const outputElement = document.querySelector("span#name-output");

listenElement.addEventListener("input", (event) => {
  if (listenElement.value === "" || listenElement.value === " ".repeat(listenElement.value.length)) {
    outputElement.textContent = "Anonymous";
  } else{
        outputElement.textContent = event.currentTarget.value.trim();
  };
})
