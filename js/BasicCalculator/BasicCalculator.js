var inputCounter = 0;
var result = 0;

function input() {
  var inputValue = getElementValue("input");
  var stackValue = getElementValue("stack");
  var inputElement = getElement("input");
  var stackElement = getElement("stack");

  if (inputValue) {
    stackElement.value += inputValue;
  }
}

function addToStack(operator) {
  var inputValue = getElementValue("input");
  var stackValue = getElementValue("stack");

  var stackValue;

  if (!inputValue) {
    return;
  }

  stackValue = inputValue + ' ' + operator;

  if (!stackValue) {
    getElement("stack").value += stackValue;
  } else {
    getElement("stack").value += " " + stackValue;
  }

  clearElementValue("input");
}

function calculate() {
  // str split on space
  // if operator is +
  //   result += input
  // else if operator is -
  //   result -= input
  // else if operator is *
  //   result *= input
  // else if operator is /
  //   result /= input
  // else if operator is %
  //   result %= input
  // else if operator is ^
  //   result ^= input
  // else if operator is =
  // else if operator is !
  // else if operator is (
  // else if operator is )
  // else if operator is sqrt
  // else if operator is sin
  // else if operator is cos
  // else if operator is tan
  // else if operator is log
  // else if operator is ln
  // else if operator is pi
  // else if operator is e

  getElement("result").value = 'WORK IN PROGRESS';
}
