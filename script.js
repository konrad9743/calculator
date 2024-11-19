let blueButtons = document.getElementsByClassName("blue-button");
let orangeButtons = document.getElementsByClassName("orange-button");
let greenButtons = document.getElementsByClassName("green-button")

for (button of blueButtons) {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "lightblue"
    })
}
for (button of orangeButtons) {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "red"
    })
}
for (button of greenButtons) {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "lightgreen"
    })
}
let display = document.getElementById("display");

let zeroButton = document.getElementById("zero")
let oneButton = document.getElementById("one")
let twoButton = document.getElementById("two")
let threeButton = document.getElementById("three")
let fourButton = document.getElementById("four")
let fiveButton = document.getElementById("five")
let sixButton = document.getElementById("six")
let sevenButton = document.getElementById("seven")
let eightButton = document.getElementById("eight")
let nineButton = document.getElementById("nine")

zeroButton.addEventListener("click", () => {
    let value = 0;
    display.textContent = Number(display.textContent) * 10 + value;
})
oneButton.addEventListener("click", () => {
    let value = 1;
    display.textContent = Number(display.textContent) * 10 + value;
})
twoButton.addEventListener("click", () => {
    let value = 2;
    display.textContent = Number(display.textContent) * 10 + value; 
})
threeButton.addEventListener("click", () => {
    let value = 3;
    display.textContent = Number(display.textContent) * 10 + value;
})
fourButton.addEventListener("click", () => {
    let value = 4;
    display.textContent = Number(display.textContent) * 10 + value;
})
fiveButton.addEventListener("click", () => {
    let value = 5;
    display.textContent = Number(display.textContent) * 10 + value;
})
sixButton.addEventListener("click", () => {
    let value = 6;
    display.textContent = Number(display.textContent) * 10 + value;
})
sevenButton.addEventListener("click", () => {
    let value = 7;
    display.textContent = Number(display.textContent) * 10 + value;
})
eightButton.addEventListener("click", () => {
    let value = 8;
    display.textContent = Number(display.textContent) * 10 + value;
})
nineButton.addEventListener("click", () => {
    let value = 9;
    display.textContent = Number(display.textContent) * 10 + value;
})

let resetButton = document.getElementById("reset")
let plusMinusButton = document.getElementById("plus/minus")
let percentButton = document.getElementById("percent")
let divisionButton = document.getElementById("division")
let multiplyButton = document.getElementById("multiply")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let dotButton = document.getElementById("dot")
let equalsButton = document.getElementById("equals")

isPrevious = false;
previousNumber = 0;
previousOperand = '';

resetButton.addEventListener("click", () => {
    display.textContent = 0;
})
plusButton.addEventListener("click", () => {
    if (isPrevious) {
        display.textContent = previousNumber + Number(display.textContent)
    }
    else {
        isPrevious = true;
        previousNumber = Number(display.textContent);
        display.textContent = 0;
    }
})

