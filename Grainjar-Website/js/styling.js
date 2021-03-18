'use strict';

console.log('Hello World, Javascript is online');

let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');

btnAdd.addEventListener('click',()=>{
    input.value = parseInt(input.value) + 1;
});

btnSubtract.addEventListener('click',()=>{
     input.value = parseInt(input.value) - 1;
});

if (input.value == 1) {
    document.getElementById("subtract").disabled = true;
}
    else {
        document.getElementById("subtract").removeAttribute('disabled');
    }