const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function add() {
    let firstNumber = Number(num1.value);
    let secondNumber = Number(num2.value);

    result.innerHTML = "Result: " + (firstNumber + secondNumber);
}

function subtract() {
    let firstNumber = Number(num1.value);
    let secondNumber = Number(num2.value);

    result.innerHTML = "Result: " + (firstNumber - secondNumber);
}

function multiply() {
    let firstNumber = Number(num1.value);
    let secondNumber = Number(num2.value);

    result.innerHTML = "Result: " + (firstNumber * secondNumber);
}

function divide() {
    let firstNumber = Number(num1.value);
    let secondNumber = Number(num2.value);

    if (secondNumber !== 0) {
        result.innerHTML = "Result: " + (firstNumber / secondNumber);
    } else {
        result.innerHTML = "Result: Error (division by zero)";
    }
}