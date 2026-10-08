let currentNumber = "";
let previousNumber = "";
let selectedOperator = null;

const currentDisplay = document.getElementById("currentValue");
const previousDisplay = document.getElementById("previousValue");


function updateDisplay() {

    currentDisplay.textContent =
        currentNumber || "0";

    if (selectedOperator && previousNumber !== "") {

        previousDisplay.textContent =
            previousNumber + " " + getOperatorSymbol(selectedOperator);

    } else {

        previousDisplay.textContent = "";
    }
}


/* ================= NUMBER ================= */

function appendNumber(number) {

    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    if (number === "." && currentNumber === "") {
        currentNumber = "0";
    }

    currentNumber += number;

    updateDisplay();
}


/* ================= OPERATOR ================= */

function chooseOperator(operator) {

    if (currentNumber === "" && previousNumber === "") {
        return;
    }

    if (currentNumber === "" && previousNumber !== "") {
        selectedOperator = operator;
        updateDisplay();
        return;
    }

    if (previousNumber !== "" && selectedOperator !== null) {

        calculate();

    } else {

        previousNumber = currentNumber;
        currentNumber = "";
    }

    selectedOperator = operator;

    updateDisplay();
}


/* ================= CALCULATE ================= */

function calculate() {

    if (
        previousNumber === "" ||
        currentNumber === "" ||
        selectedOperator === null
    ) {
        return;
    }

    const num1 = Number(previousNumber);
    const num2 = Number(currentNumber);

    let result;

    switch (selectedOperator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":

            if (num2 === 0) {

                currentNumber = "Cannot divide by 0";
                previousNumber = "";
                selectedOperator = null;

                updateDisplay();

                return;
            }

            result = num1 / num2;
            break;

        default:
            return;
    }

    currentNumber = String(
        Number(result.toFixed(10))
    );

    previousNumber = "";
    selectedOperator = null;

    updateDisplay();
}


/* ================= DELETE ================= */

function deleteNumber() {

    currentNumber =
        currentNumber.slice(0, -1);

    updateDisplay();
}


/* ================= CLEAR ================= */

function clearCalculator() {

    currentNumber = "";
    previousNumber = "";
    selectedOperator = null;

    updateDisplay();
}


/* ================= OPERATOR SYMBOL ================= */

function getOperatorSymbol(operator) {

    switch (operator) {

        case "+":
            return "+";

        case "-":
            return "−";

        case "*":
            return "×";

        case "/":
            return "÷";

        default:
            return operator;
    }
}


/* Initial display */

updateDisplay();