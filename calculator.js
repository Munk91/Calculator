var inputCounter = 0;

function add() {
    inputCounter++;
    var inputValue = getElementValue('input')
    var stackValue = getElementValue('stack');

    if (!stackValue) {
        getElement('stack').value += inputValue;
        return;
    }

    getElement('stack').value += ' + ' + inputValue;
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
