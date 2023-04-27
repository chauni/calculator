"use strict";

//gather inputs

const addBtnEl = document.getElementById('addBtn');
addBtnEl.onclick = onAddBtnClicked;

const subtractBtnEl = document.getElementById('subtractBtn')
subtractBtnEl.onclick = onSubtractBtnClicked;

const multiplyBtnEl = document.getElementById('multiplyBtn')
multiplyBtnEl.onclick = onMultiplyBtnClicked;

const divideBtnEl = document.getElementById('divideBtn')
divideBtnEl.onclick = onDivideBtnClicked;

const num1El = document.getElementById('number1Field');
const num2El = document.getElementById('number2Field');

const answerEl = document.getElementById('answerField');

//perform calculation
function onAddBtnClicked() {

    const answer = +num1El.value + +num2El.value
    answerEl.value = answer;
}

function onSubtractBtnClicked() {

    const answer = +num1El.value - +num2El.value
    answerEl.value = answer;
}

function onMultiplyBtnClicked() {

    const answer = +num1El.value * +num2El.value
    answerEl.value = answer;
}

function onDivideBtnClicked() {

    const answer = +num1El.value / +num2El.value
    answerEl.value = answer;
}