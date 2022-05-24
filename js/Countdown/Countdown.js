function calculateCountdown() {
  const input = getFormValuesById([
    "capital",
    "capitalGoal",
    "amount",
    "interval",
    "returnRate",
  ]);

  const timeInYears =
    Math.log(
      (input.capitalGoal * (input.returnRate / 100)) /
        (input.amount * input.interval) +
        1
    ) /
      Math.log(1 + input.returnRate / 100) -
    1;

  getElement("timeResult").value = timeInYears;
}

function setTime() {
  const now = new Date();
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
