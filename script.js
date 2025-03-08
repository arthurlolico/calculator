function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(firstNumber,secondNumber,operator) {
    if(operator === "+")
        return add(firstNumber,secondNumber);
    else if(operator === "-")
        return subtract(firstNumber,secondNumber);
    else if(operator === "x")
        return multiply(firstNumber,secondNumber);
    else
        return divide(firstNumber,secondNumber);
}

function calculator() {
    let firstNumber, operator, secondNumber;
}

calculator ()