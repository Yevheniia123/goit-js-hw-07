const decrementRef = document.querySelector("#counter button[data-action='decrement']");
const incrementRef = document.querySelector("#counter button[data-action='increment']");
let counterValue = document.querySelector("#value");
let gValue = 0;
const changeInputValue = () => {counterValue.textContent = gValue};
let decrement = () => gValue -= 1;
decrementRef.addEventListener('click', () => {decrement(), changeInputValue()});
const increment = () => gValue += 1;
incrementRef.addEventListener('click', () =>{ increment(), changeInputValue()}); 


