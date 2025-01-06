let display = document.getElementById('display');
let currentInput = ''; // To keep track of input before calculation
alert('test')

// Append number or operator to the display
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// Append operator to the display
function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Calculate the result
function calculate() {
    try {
        currentInput = eval(currentInput); // Use eval to perform the calculation
        display.value = currentInput;
    } catch (e) {
        display.value = 'Error';
        currentInput = ''; // Reset if there's an error
    }
}
