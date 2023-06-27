//Variables
let first = "";
let op = "", previousOp = "";
let second = "";
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
    if (a === "")
        a = "0";
    if (b === "")
        b = "0";

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

//Reset function
function reset() {
    getFirst = true;
    first = "";
    second = "";
    previousOp.setAttribute("style", "background-color:  rgb(227, 227, 227);");
}

//Continue operations
function keepOperating() {
    getFirst = false;
    second = "";
    previousOp.setAttribute("style", "background-color:  rgb(227, 227, 227);");
}


/*Actually using calculator*/

//Get number input
const nums = document.querySelectorAll(".num");
nums.forEach((num) => {
    num.addEventListener("click", () => {
        if (getFirst) {
            if (parseFloat(first) === 0)
                first = "";

            first += num.textContent;
            display.textContent = first;
        }
        else {
            if (parseFloat(second) === 0)
                second = "";

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
            first = parseFloat(operate(op, first, second).toFixed(9));
            display.textContent = first;
            keepOperating();
        }
        else if (result.textContent === "C") {
            display.textContent = "";
            reset();
        }
        else if (result.textContent === "DEL") {
            if (getFirst) {
                if (first != "" || parseFloat(first) != 0) {
                    first = first.slice(0, first.length - 1);
                    display.textContent = first;
                }
            }
            else {
                if (second != "" || parseFloat(second) != 0) {
                    second = second.slice(0, second.length - 1);
                    display.textContent = second;
                }
            }
        }
    })
})