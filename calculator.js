const add = (...args) => {
    const arr = Array.from(args);
    return arr.reduce((num, sum) => sum + num)
};

const subtract = (...args) => {
    const arr = Array.from(args);
    return arr.reduce((a,b) => a - b);
};

const multiply = (...args) => {
    const arr = Array.from(args);
    return arr.reduce((a, b) => a * b);
}

const divide = (...args) => {
    const arr = Array.from(args);
    return arr.reduce((a, b) => b == 0 ? `!You Shouldn't try that!` : a / b);
}

const buttons = document.querySelectorAll('.operand, .operator, .float');
const display = document.getElementById('display');
const enter = document.getElementById('enter');
const regex = /[^\d.]/g;

buttons.forEach(button => {
    button.addEventListener('click', (e) => display.textContent += e.target.textContent)
});

let str = "";
enter.addEventListener('click', () => {
    str = str.concat(display.textContent);
    const sign = (str.match(regex)).join('');
    const [a, b] = str.split(regex);
    switch(sign) {
        case '/':
            display.textContent= divide(a, b);
            break;
        
        case '*':
            display.textContent = multiply(a, b);
            break;

        case '-':
            display.textContent = subtract(a, b);
            break;

        case '+':
            display.textContent = add(a, b);
            break;
    }
});

const erase = document.getElementById('erase');
erase.addEventListener('click', () => display.textContent = "")