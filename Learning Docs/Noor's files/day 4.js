// 1. Add
function add(a, b) {
  return a + b;
}

// 2. Subtract
function subtract(a, b) {
  return a - b;
}

// 3. Multiply
function multiply(a, b) {
  return a * b;
}

// 4. Divide
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}