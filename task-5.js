const input = document.querySelector('#name-input');
const output = document.getElementById('name-output');


 input.oninput = function() {
    document.getElementById('name-output').innerHTML = input.value
 }