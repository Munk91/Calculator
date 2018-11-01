var inputCounter = 0;
var result = 0;

function add() {
    var inputValue = getElementValue('input')
    var stackValue = getElementValue('stack');

    inputValue = parseInt(inputValue);
    if (isNaN(inputValue)) {
        return;
    }

    if (!stackValue) {
        getElement('stack').value += inputValue;
    } else {
        getElement('stack').value += ' + ' + inputValue;
    }

    result += inputValue;
    getElement('input').value = '';
    getElement('input').focus();
    inputCounter++;
}

function subtract() {
    var inputValue = getElementValue('input')
    var stackValue = getElementValue('stack');

    inputValue = parseInt(inputValue);
    if (isNaN(inputValue)) {
        return;
    }

    if (!stackValue) {
        getElement('stack').value += inputValue;
    } else {
        getElement('stack').value += ' - ' + inputValue;
    }

    result -= inputValue;
    getElement('input').value = '';
    getElement('input').focus();
    inputCounter++;
}

function calculate() {
    getElement('result').value = result;
}

function annuityCalculation() {
    var input = getFormValuesById(
        [
            'amount',
            'period',
            'interval',
            'returnRate',
            'initialAmount'
        ]
    );

    var capital = 0;
    var payments = input.interval * input.period;
    var monthlyReturnRate = Math.pow((1 + input.returnRate / 100), (1 / 12)) - 1;

    capital = (input.amount * ((Math.pow((1 + monthlyReturnRate), payments) - 1) / monthlyReturnRate)) + input.initialAmount;

    getElement('annuityResult').value = capital;
}

function getFormValuesById(ids) {
    var values = {};

    var element;
    for (i = 0; i < ids.length; i++) {
        element = getElement(ids[i]);
        values[element.id] = parseInt(element.value);
    }

    return values;
}

// Helpers
function getElementValue(id) {
    return document.getElementById(id).value;
}

function getElement(id) {
    return document.getElementById(id);
}
