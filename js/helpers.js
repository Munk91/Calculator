"use strict";
function getInputValue(id) {
    const element = document.getElementById(id);
    if (!element)
        return;
    return element.value;
}
function setInputValue(id, value) {
    const element = document.getElementById(id);
    if (!element)
        return;
    element.value = value;
}
function clearInputValue(id) {
    const element = document.getElementById(id);
    if (!element)
        return;
    element.value = "";
}
function getInput(id) {
    return document.getElementById(id);
}
function getFormValuesById(ids) {
    let values = {};
    let element;
    for (let i = 0; i < ids.length; i++) {
        element = getInput(ids[i]);
        if (!element)
            continue;
        values[element.id] = parseInt(element.value);
    }
    return values;
}
