const buttons = document.querySelectorAll(".change-color");

function changeColor(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    changeColor(button.attributes["data-color"].value)
  );
});
