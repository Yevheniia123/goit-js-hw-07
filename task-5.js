const input = document.querySelector("#name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  if (input.value.length > 0) {
    output.textContent = event.target.value;
  } else {
    output.textContent = "незнакомец";
  }
});
