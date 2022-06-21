let firstNumber;
let secondNumber;
const arithmetic = () => {
    firstNumber = Number(prompt('Enter First Number'));
    secondNumber = Number(prompt('Enter Second Number'));
    let mathSymbol = prompt('Select your mathematical symbol: +, -, *, /, %');

    if(mathSymbol == '+') {
        addNumbers();
    } else if(mathSymbol == '-') {
        subtractNumbers();
    } else if(mathSymbol == '*') {
        multiplyNumbers();
    } else if(mathSymbol == '/') {
        divideNumbers();
    } else {
        modulo();
    }
};

arithmetic();

function addNumbers() {
    alert(`The result is ${firstNumber + secondNumber}`);
}

function subtractNumbers() {
    alert(`The result is ${firstNumber - secondNumber}`);
}

function multiplyNumbers() {
    alert(`The result is ${firstNumber * secondNumber}`);
}

function divideNumbers() {
    alert(`The result is ${firstNumber / secondNumber}`);
}

function modulo() {
    alert(`The result is ${firstNumber % secondNumber}`);
}
