let blueButtons = document.getElementsByClassName("blue-button");
let orangeButtons = document.getElementsByClassName("orange-button");
let greenButtons = document.getElementsByClassName("green-button")

for (let button of blueButtons) {
    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = "lightblue"
    })
}
for (let button of orangeButtons) {
    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = "red"
    })
}
for (let button of greenButtons) {
    button.addEventListener("mousedown", () => {
        button.style.backgroundColor = "lightgreen"
    })
}

for (let button of blueButtons) {
    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "blue"
    })
}
for (let button of orangeButtons) {
    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "orange"
    })
}
for (let button of greenButtons) {
    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "green"
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

let firstNumber = false;
let secondNumber = false;
let operand = ''

resetButton.addEventListener("click", () => {
    display.textContent = 0;
    firstNumber = false;
    secondNumber = false;
})

let operate = (secondNumber, firstNumber, operand) => {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operand) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    case '/': 
        if (secondNumber == 0) {return "get rekt"}
        else {return firstNumber / secondNumber}
  }
    
}

equalsButton.addEventListener("click",() => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    console.log(firstNumber, secondNumber, operand)
    if (firstNumber == false) {}
    else if (secondNumber == false) {display.textContent = firstNumber}
    else {display.textContent = operate(firstNumber, secondNumber, operand)}
})

plusButton.addEventListener("click", () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "+"
    display.textContent = 0;
})

minusButton.addEventListener("click", () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "-"
    display.textContent = 0;
})

divisionButton.addEventListener("click", () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "/"
    display.textContent = 0;
})

multiplyButton.addEventListener("click" , () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "*"
    display.textContent = 0;
})

plusMinusButton.addEventListener("click", () => {
    display.textContent = -1 * Number(display.textContent);
})


// for 7 it doesnt work properly
percentButton.addEventListener("click", () => {
    display.textContent = Number(display.textContent) / 100
})

// adds dot, but when adding number after dot the dot is deleted.
dotButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {display.textContent += "."}
})