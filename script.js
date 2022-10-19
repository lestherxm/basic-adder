const numOne = document.querySelector('#numOne');
const numTwo = document.querySelector('#numTwo');
const btnCalc = document.querySelector('#btnCalc');
const result = document.querySelector('#result');

btnCalc.addEventListener('click', ()=>{
    result.value = parseFloat(numOne.value) + parseFloat(numTwo.value);
});

