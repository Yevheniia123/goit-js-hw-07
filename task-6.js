let inputRef = document.getElementById("validation-input");
const dataLength = inputRef.getAttribute("data-length");
inputRef.onblur = function () {
  if (Number(dataLength) === inputRef.value.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};
