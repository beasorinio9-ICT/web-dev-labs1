// Get references to the DOM elements using their IDs
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const resultDisplay = document.getElementById('result');

// Add an event listener to the "Add" button
addButton.addEventListener('click', function() {
    // Get the values from the input fields and convert them to numbers
    // using parseFloat() to handle decimal numbers
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;

    // Calculate the sum
    const sum = num1 + num2;

    // Display the sum in the result paragraph using innerText
    resultDisplay.innerText = sum;
});
