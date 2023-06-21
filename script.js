//Variables
let first = 0;
let op = "";
let second = 0;

//Addition function
function add (a, b) {
    return a + b;
}

//Subtraction function
function subtract (a, b) {
    return a - b;
}

//Multiplication function
function multiply (a, b) {
    return a * b;
}

//Division function
function divide (a, b) {
    return a / b;
}

//Operate function
function operate (op, a, b) {
    if (op === "add")
        return add(a, b);
    else if (op === "subtract")
        return subtract(a, b);
    else if (op === "multiply")
        return multiply(a, b);
    else if (op === "divide")
        return divide(a, b);
}