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
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
oneButton.addEventListener("click", () => {
    let value = 1;
    
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
twoButton.addEventListener("click", () => {
    let value = 2;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    } 
})
threeButton.addEventListener("click", () => {
    let value = 3;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
fourButton.addEventListener("click", () => {
    let value = 4;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
fiveButton.addEventListener("click", () => {
    let value = 5;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
sixButton.addEventListener("click", () => {
    let value = 6;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
sevenButton.addEventListener("click", () => {
    let value = 7;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
eightButton.addEventListener("click", () => {
    let value = 8;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
})
nineButton.addEventListener("click", () => {
    let value = 9;
    if (isOperandActive === true) {
        display.textContent = value
        isOperandActive = false
    }
    else {
        if (display.textContent.includes(".")) {display.textContent += value}
        else {display.textContent = Number(display.textContent) * 10 + value}; 
    }
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
let isOperandActive = false;
let operand = ''
let operandSecondTime = 0;

resetButton.addEventListener("click", () => {
    display.textContent = 0;
    firstNumber = false;
    secondNumber = false;
})

let roundNumber = (numb) => {
    if (Number.isInteger(numb)) {
        return numb;
     } else {
        let lengthNumb = numb.toString().split('.')[1].length;
        if (lengthNumb > 5) {return numb.toFixed(5)}
        else {return numb.toFixed(lengthNumb)}
     }
}

let operate = (secondNumber, firstNumber, operand) => {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operand) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return roundNumber(firstNumber * secondNumber);
    case '/': 
        if (secondNumber === 0) { return "GET REKT"}
        else {
             return roundNumber(firstNumber / secondNumber)}
  }
}

equalsButton.addEventListener("click",() => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    if (firstNumber === false) {}
    else if (secondNumber === false) {display.textContent = firstNumber}
    else {display.textContent = operate(firstNumber, secondNumber, operand)}
    operandSecondTime = 0;
})

plusButton.addEventListener("click", () => {
    if (operandSecondTime > 1) {
        display.textContent = operate(firstNumber, secondNumber, operand)
    }
    else {operandSecondTime += 1}

    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "+"
    display.textContent = firstNumber;
    isOperandActive = true;
})

minusButton.addEventListener("click", () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "-"
    display.textContent = firstNumber;
    isOperandActive = true;
})

divisionButton.addEventListener("click", () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "/"
    display.textContent = firstNumber;
    isOperandActive = true;
})

multiplyButton.addEventListener("click" , () => {
    secondNumber = firstNumber
    firstNumber = display.textContent;
    operand = "*"
    display.textContent = firstNumber;
    isOperandActive = true;
})

plusMinusButton.addEventListener("click", () => {
    display.textContent = -1 * Number(display.textContent);
})

percentButton.addEventListener("click", () => {
    display.textContent = Number(display.textContent) / 100
})

dotButton.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {display.textContent += "."}
})


/* 
TODO: 
3. Add automatic calculations after pressing operand for the second time -> doesnt work currently
4. keyboard support ??
*/