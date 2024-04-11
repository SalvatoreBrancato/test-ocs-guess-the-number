const numeroRandomico = Math.floor(Math.random() * 100) + 1;

const button = document.querySelector('button');

const inputNumber = document.querySelector('input');

const myNumber = document.querySelector('#myNumber');

const myResult = document.querySelector('#result');

const myAttemps = document.querySelector('#attemps');

let counter = 0;

button.addEventListener('click', ()=>{
    const valueNumber = inputNumber.value;
    if(valueNumber < numeroRandomico){
        counter += 1;
        myNumber.innerHTML += `<p>Il numero da te inserito (${valueNumber}) è minore del numero segreto</p>`;
        myAttemps.innerHTML = `Tentativi: ${counter}`
    } else if(valueNumber > numeroRandomico){
        counter += 1;
        myNumber.innerHTML += `<p>Il numero da te inserito (${valueNumber}) è maggiore del numero segreto</p>`;
        myAttemps.innerHTML = `Tentativi: ${counter}`
    } else {
        counter += 1;
        myNumber.innerHTML += `<p>Hai indovinato il numero segreto (${valueNumber})</p>`;
        myAttemps.innerHTML = `Tentativi: ${counter}`
        button.setAttribute('disabled', 'true')
    }
})

console.log(numeroRandomico)