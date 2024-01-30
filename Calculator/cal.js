const buttons = document.querySelectorAll('button');
const inputBox = document.querySelector('input');
let lastInput = false;
const operators = ['+', '-', '%', '*', '/'];

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        switch (button.innerHTML) {
            case 'pow': inputBox.value += "**";
                break;
            case 'C': handleReset();
                break;
            case '⌫': handleBackspace();
                break;
            case '=': handleResult();
                break;
            default:
                inputBox.value += button.innerHTML;
                lastInput = operators.includes(button.innerHTML);
        }
    })
});

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', '.', '%', '(', ')'];
    if (key === 'Backspace' || validButtons.includes(key)) {
        switch (key) {
            case '=': handleResult();
                break;
            case 'Backspace': handleBackspace();
                break;
            default:
                inputBox.value += key;
        }
    }
})


function handleReset() {
    inputBox.value = '';
}

function handleBackspace() {
    inputBox.value = inputBox.value.slice(0, -1);
}


function handleResult() {
    const consecutiveOperatorsRegex = /[+\-*%/]{2,}/;
    if (consecutiveOperatorsRegex.test(inputBox.value)) {
        inputBox.value = 'Error';
        return;
    }

    if (inputBox.value.includes('%')) {
        inputBox.value = inputBox.value.replace(/%/g, '/100');
    }
    if (inputBox.value.includes('*π')) {
        inputBox.value = inputBox.value.replace(/π/g, '3.14');
    } else if (inputBox.value.includes('π')) {
        inputBox.value = inputBox.value.replace(/π/g, '*3.14');
    }

    inputBox.value = eval(inputBox.value);
}





