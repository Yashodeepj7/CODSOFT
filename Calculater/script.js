let display = document.getElementById('display');
let equation = '';

function appendNumber(number) {
    equation += number;
    display.textContent = equation;
}

function clearDisplay() {
    equation = '';
    display.textContent = 0;
}

function calculateResult() {
    try {
        equation = eval(equation);
        display.textContent = equation;
    } catch (error) {
        alert('Error: Invalid input.');
        clearDisplay();
    }
}