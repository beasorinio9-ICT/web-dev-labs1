function addNumbers() {
    // Get the values from the input fields by their IDs
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Add the numbers
    const sum = num1 + num2;
    
    // Get the element where the result will be displayed
    const resultElement = document.getElementById('result');
    
    // Update the innerText of the result element with the sum
    resultElement.innerText = sum;
}
