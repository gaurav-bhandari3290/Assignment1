document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.querySelector('.row input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(this.innerText);
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === 'Enter') {
            event.preventDefault();
            calculateResult();
        } else if (isCalculatorButton(key) || key === 'Backspace') {
            event.preventDefault();
            handleKeyPress(key);
        }
    });

    const equalButton = document.querySelector('#equal');
    if (equalButton) {
        equalButton.addEventListener('click', function() {
            calculateResult();
        });
    }

    function handleButtonClick(value) {
        switch (value) {
            case '=':
                calculateResult();
                break;
            case 'C':
                clearInput();
                break;
            case '⌫':
                handleBackspace();
                break;
            case '%':
                handlePercent();
                break;
            default:
                inputField.value += value;
        }
    }

    function handlePercent() {
        const currentInput = inputField.value;
        const lastChar = currentInput.slice(-1);

        if (lastChar !== '%') {
            inputField.value += '%';
        }
    }

    function handleBackspace() {
        const currentInput = inputField.value;
        inputField.value = currentInput.slice(0, -1);
    }

    function handleKeyPress(key) {
        if (key === 'Backspace') {
            handleBackspace();
        } else {
            inputField.value += key;
        }
    }

    function isCalculatorButton(key) {
        const validButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*','/', '.', '%'];
        return validButtons.includes(key);
    }

    function calculateResult() {
        try {
            const result = evaluateExpression(inputField.value);
            inputField.value = result;
        } catch (error) {
            inputField.value = 'Error'||'Undefined';
            setTimeout(clearInput, 1000);
        }
    }

    function clearInput() {
        inputField.value = '';
    }

    function evaluateExpression(expression) {
        let tokens = tokenize(expression);
        let values = [];
        let operators = [];

        for (let token of tokens) {
            if (!isNaN(token)) {
                values.push(parseFloat(token));
            } else if (token === '%') {
                values.push(values.pop() / 100);
            } else if (isOperator(token)) {
                while (operators.length && precedence(operators[operators.length - 1]) >= precedence(token)) {
                    values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
                }
                operators.push(token);
            }
        }

        while (operators.length > 0) {
            values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
        }

        return values.pop();
    }

    function tokenize(expression) {
        let result = [];
        let numberBuffer = [];

        for (let char of expression) {
            if (isOperator(char) || char === '%') {
                if (numberBuffer.length) {
                    result.push(numberBuffer.join(''));
                    numberBuffer = [];
                }
                result.push(char);
            } else if (char >= '0' && char <= '9' || char === '.') {
                numberBuffer.push(char);
            }
        }

        if (numberBuffer.length) {
            result.push(numberBuffer.join(''));
        }

        return result;
    }

    function isOperator(token) {
        return ['+', '-', '*', '/'].includes(token);
    }

    function precedence(operator) {
        if (operator === '+' || operator === '-') {
            return 1;
        } else if (operator === '*' || operator === '/') {
            return 2;
        }
        return 0;
    }

    function applyOperator(operator, b, a) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    throw new Error("Cannot divide by zero.");
                }
                return a / b;
            default:
                throw new Error("Invalid operator: " + operator);
        }
    }
});
