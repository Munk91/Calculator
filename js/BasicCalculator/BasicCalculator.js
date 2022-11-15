"use strict";
function input() {
    const inputValue = getInputValue("input");
    const stackElement = getInput("stack");
    if (inputValue && stackElement) {
        stackElement.value += inputValue;
    }
}
function addToStack(operator) {
    const inputValue = getInputValue("input");
    if (!inputValue) {
        return;
    }
    const resultValue = getInputValue("result");
    if (resultValue) {
        resetForm();
    }
    const stackValue = getInputValue("stack");
    const stackValueToAdd = inputValue + " " + operator;
    if (!stackValue) {
        setInputValue("stack", stackValue + stackValueToAdd);
    }
    else {
        setInputValue("stack", stackValue + " " + stackValueToAdd);
    }
    clearInputValue("input");
}
function calculate() {
    const inputValue = getInputValue("input");
    const stackValue = getInputValue("stack");
    const stackToCalculate = stackValue + " " + inputValue;
    setInputValue("stack", stackToCalculate);
    clearInputValue("input");
    const result = new Function("return " + stackToCalculate)();
    setInputValue("result", result);
}
function resetForm() {
    clearInputValue("input");
    clearInputValue("stack");
    clearInputValue("result");
}
