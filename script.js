let numbers = ["0","1"];
let operations = ["+","-","X","/"];

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
    else if(operator === "X")
        return multiply(firstNumber,secondNumber);
    else
        return divide(firstNumber,secondNumber);
}

function showOperation(display,buttonText){
    let flag = 0;
    for(let i = 0; i < operations.length && flag === 0 ; i++) {
        if(numbers[i] === buttonText)
            flag = 1;
    }

    display.textContent = display.textContent.concat(" ", buttonText);
}

function showNumber(display,buttonText,indexNumber) {
    if(display.textContent === "0")
        display.textContent = buttonText;
    else {
        let disp = display.textContent;
        let length = disp.length;
        if(disp[length - 1] === "+" || disp[length - 1] === "-" || disp[length - 1] === "X" || disp[length - 1] === "/") 
            display.textContent = display.textContent.concat(" ",buttonText);
        else {
            display.textContent = display.textContent.concat(buttonText);
        }
    }
}

function finalValue(display) {
    let terms = display.textContent.split(" ");
    terms.map((term) => console.log(term));
    let result;
    if(terms.length === 3) {
        result = operate(parseInt(terms[0]),parseInt(terms[2]),terms[1]);
    }
    display.textContent = result;
}

function analysis(display,buttonText) {
    let flag = 0;

    if(buttonText === "="){
        finalValue(display);
        return 0;
    }

    //Checks if the pressed button is a number
    for(let i = 0; i < numbers.length && flag === 0 ; i++) {
        if(numbers[i] === buttonText)
            flag = 1;
    }

    if(flag === 1)
        showNumber(display,buttonText);

    //If is not a number, it is an operation
    else
        showOperation(display,buttonText);

}

function calculator() {
    let firstNumber, operator, secondNumber;

    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            analysis(display,button.textContent);
        })
    })
}

calculator();

