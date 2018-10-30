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
    inputCounter++;
}

function calculate() {
    console.log(result);
}

function getElementValue(id) {
    return document.getElementById(id).value;
}

function getElement(id) {
    return document.getElementById(id);
}
