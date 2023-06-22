//Variables
let first = "0";
let op = "", previousOp = "";
let second = "0";
let getFirst = true;
const display = document.querySelector(".display");

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
    a = parseFloat(a);
    b = parseFloat(b);

    if (op === "+")
        return add(a, b);
    else if (op === "-")
        return subtract(a, b);
    else if (op === "x")
        return multiply(a, b);
    else if (op === "÷")
        return divide(a, b);
    else if (op === "√")
        return Math.sqrt(b);
}


/*Actually using calculator*/


//Get number input
const nums = document.querySelectorAll(".num");
nums.forEach((num) => {
    num.addEventListener("click", () => {
        if (getFirst) {
            first += num.textContent;
            display.textContent = first;
        }
        else {
            second += num.textContent;
            display.textContent = second;
        }
    });
});

//Get operator
const operations = document.querySelectorAll(".ops");
operations.forEach((operation) => {
    operation.addEventListener("click", () => {

        //Color
        if (previousOp === "") {
            previousOp = operation;
        }
        else if (previousOp != operation) {
            previousOp.setAttribute("style", "background-color:  rgb(227, 227, 227);");
            previousOp = operation;
        }

        operation.setAttribute("style", "background-color: rgb(122, 182, 255);");
        op = operation.textContent;
        getFirst = false;
    });
});

//Operate
const results = document.querySelectorAll(".oneOp");
results.forEach((result) => {
    result.addEventListener("click", () => {
        if (result.textContent === "=") {
            display.textContent = operate(op, first, second);
        }
    })
})