var inputCounter = 0;
var result = 0;

function input() {
  var inputValue = getElementValue("input");
  var stackValue = getElementValue("stack");
}

function add() {
  var inputValue = getElementValue("input");
  var stackValue = getElementValue("stack");

  inputValue = parseInt(inputValue);
  if (isNaN(inputValue)) {
    return;
  }

  if (!stackValue) {
    getElement("stack").value += inputValue;
  } else {
    getElement("stack").value += " + " + inputValue;
  }

  result += inputValue;
  getElement("input").value = "";
  getElement("input").focus();
  inputCounter++;
}

function subtract() {
  var inputValue = getElementValue("input");
  var stackValue = getElementValue("stack");

  inputValue = parseInt(inputValue);
  if (isNaN(inputValue)) {
    return;
  }

  if (!stackValue) {
    getElement("stack").value += inputValue;
  } else {
    getElement("stack").value += " - " + inputValue;
  }

  result -= inputValue;
  getElement("input").value = "";
  getElement("input").focus();
  inputCounter++;
}

function calculate() {
  getElement("result").value = result;
}
