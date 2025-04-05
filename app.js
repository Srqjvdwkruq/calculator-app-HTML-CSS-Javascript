// DOM elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = ''; // เก็บค่าที่ผู้ใช้ป้อน

// Loop through buttons and add event listeners
buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const value = button.textContent; // Get text content of button
        handleInput(value); // Call handleInput function with button value
    });
});

// Function to handle input from buttons
function handleInput(value) {
    if (value === 'RESET') {
        currentInput = ''; // If RESET is pressed, clear current input
    } else if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1); // If DELETE is pressed, remove last character from input
    } else if (value === '=') {
        try {
            const formatted = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
            currentInput = eval(formatted).toString();
        } catch {
            currentInput = 'ERROR';
        }
    } else {
        currentInput += value; // Append button value to current input
    }
    display.value = currentInput; // Update display with current input
}