function input() {
  const inputValue = getElementValue("input");
  const stackElement = getElement("stack");

  if (inputValue) {
    stackElement.value += inputValue;
  }
}

function addToStack(operator) {
  const inputValue = getElementValue("input");

  if (!inputValue) {
    return;
  }

  const resultValue = getElementValue("result");

  if (resultValue) {
    resetForm();
  }

  const stackValue = getElementValue("stack");
  const stackValueToAdd = inputValue + " " + operator;

  if (!stackValue) {
    getElement("stack").value += stackValueToAdd;
  } else {
    getElement("stack").value += " " + stackValueToAdd;
  }

  clearElementValue("input");
}

function calculate() {
  const inputValue = getElementValue("input");
  const stackElement = getElement("stack");
  const stackValue = getElementValue("stack");

  const stackToCalculate = stackValue + " " + inputValue;
  stackElement.value = stackToCalculate;
  clearElementValue("input");

  const result = new Function("return " + stackToCalculate)();
  getElement("result").value = result;
}

function resetForm() {
  clearElementValue("input");
  clearElementValue("stack");
  clearElementValue("result");
}
