// Get DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const resultDisplay = document.getElementById('result');

// Add button click event
addButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "⚠️ Please enter both numbers!";
        resultDisplay.style.color = "#dc3545";
        return;
    }

    const sum = num1 + num2;
    resultDisplay.innerText = `✅ ${num1} + ${num2} = ${sum}`;
    resultDisplay.style.color = "#28a745";
});

// Clear button click event
clearButton.addEventListener('click', () => {
    num1Input.value = '';
    num2Input.value = '';
    resultDisplay.innerText = '';
});
