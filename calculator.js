var inputCounter = 0;
var result = 0;

function add() {
    var inputValue = getElementValue('input')
    var stackValue = getElementValue('stack');

    if (isNaN(inputValue)) {
        return;
    }

    if (!stackValue) {
        getElement('stack').value += inputValue;
        return;
    }

    getElement('stack').value += ' + ' + inputValue;

    result += inputValue;
    inputCounter++;
}

function calculate() {
    console.log('calculate');
}

function getElementValue(id) {
    return document.getElementById(id).value;
}

function getElement(id) {
    return document.getElementById(id);
}
