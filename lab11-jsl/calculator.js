// Get all elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const clearButton = document.getElementById('clearButton');
const resultDisplay = document.getElementById('result');

// Function to safely get numbers
function getNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.style.color = "#dc3545"; // red
        resultDisplay.innerText = "⚠️ Please enter valid numbers!";
        return null;
    }
    return { num1, num2 };
}

// Display result
function showResult(value) {
    resultDisplay.style.color = "#28a745"; // green
    resultDisplay.innerText = `✅ ${value}`;
}

// Add
addButton.addEventListener('click', () => {
    const nums = getNumbers();
    if (!nums) return;
    showResult(nums.num1 + nums.num2);
});

// Subtract
subtractButton.addEventListener('click', () => {
    const nums = getNumbers();
    if (!nums) return;
    showResult(nums.num1 - nums.num2);
});

// Multiply
multiplyButton.addEventListener('click', () => {
    const nums = getNumbers();
    if (!nums) return;
    showResult(nums.num1 * nums.num2);
});

// Divide
divideButton.addEventListener('click', () => {
    const nums = getNumbers();
    if (!nums) return;
    if (nums.num2 === 0) {
        resultDisplay.style.color = "#dc3545";
        resultDisplay.innerText = "❌ Cannot divide by zero!";
        return;
    }
    showResult(nums.num1 / nums.num2);
});

// Clear all fields
clearButton.addEventListener('click', () => {
    num1Input.value = "";
    num2Input.value = "";
    resultDisplay.innerText = "--";
    resultDisplay.style.color = "#28a745";
});
