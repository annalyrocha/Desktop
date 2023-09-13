let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}


function sinFunction() {
    try {
        currentInput = Math.sin(eval(currentInput)).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function cosFunction() {
    try {
        currentInput = Math.cos(eval(currentInput)).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function tanFunction() {
    try {
        currentInput = Math.tan(eval(currentInput)).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function sqrtFunction() {
    try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}


