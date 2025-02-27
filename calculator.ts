const addButton = document.getElementById("add-btn") as HTMLButtonElement;
const subtractButton = document.getElementById("subtract-btn") as HTMLButtonElement;
const multiplyButton = document.getElementById("multiply-btn") as HTMLButtonElement;
const divideButton = document.getElementById("divide-btn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

function getNumbers(): [number, number] {
    const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    return [num1, num2];
}

// Addition
addButton.addEventListener("click", () => {
    const [num1, num2] = getNumbers();
    result.innerText = `Result: ${num1 + num2}`;
});

// Subtraction
subtractButton.addEventListener("click", () => {
    const [num1, num2] = getNumbers();
    result.innerText = `Result: ${num1 - num2}`;
});

// Multiplication
multiplyButton.addEventListener("click", () => {
    const [num1, num2] = getNumbers();
    result.innerText = `Result: ${num1 * num2}`;
});

// Division
divideButton.addEventListener("click", () => {
    const [num1, num2] = getNumbers();
    if (num2 !== 0) {
        result.innerText = `Result: ${num1 / num2}`;
    } else {
        result.innerText = "Error: Division by zero!";
    }
});
