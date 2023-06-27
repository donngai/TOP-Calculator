//Variables
let op = "", previousOp = "";
let first =  "", second = "";
let negFirst = false; negSecond = false;
let decFirst = false; decSecond = false;
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
    negFirst = false;
    negSecond = false;
    decFirst = false;
    decSecond = false;
    previousOp.setAttribute("style", "background-color:  rgb(227, 227, 227);");
}

//Continue operations
function keepOperating() {
    getFirst = false;
    second = "";
    negSecond = false;
    decSecond = false;
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

            if (first.length < 10)
                first += num.textContent;

            display.textContent = first;
        }
        else {
            if (parseFloat(second) === 0)
                second = "";

            if (second.length < 10)
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

                if (!first.includes("."))
                    decFirst = false;
            }
            else if (!getFirst) {
                if (second != "" || parseFloat(second) != 0) {
                    second = second.slice(0, second.length - 1);
                    display.textContent = second;
                }

                if (!second.includes(".")) 
                    decSecond = false;
            }
            else {
                reset();
            }
        }
        else if (result.textContent === "+/-") {
            if (getFirst) {
                if (first.length > 0 && parseFloat(first) != 0) {
                    if (!negFirst) {
                        first = "-" + first;
                        negFirst = true;
                    }
                    else {
                        first = first.slice(1);
                        negFirst = false;
                    }

                    display.textContent = first;
                }
            }
            else {
                if (second.length > 0 && parseFloat(second) != 0) {
                    if (!negSecond) {
                        second = "-" + second;
                        negSecond = true;
                    }
                    else {
                        second = second.slice(1);
                        negSecond = false;
                    }

                    display.textContent = second;
                }   
            }
        }
        else if (result.textContent === ".") {
            if (getFirst) {
                if (!decFirst) {
                    first += ".";
                    decFirst = true;
                    display.textContent = first;
                }
            }
            else {
                if (!decSecond) {
                    second += ".";
                    decSecond = true;
                    display.textContent = second;
                }
            }
        }
    });
});