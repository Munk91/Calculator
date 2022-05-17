const { time } = require("console");

function calculateCountdown() {
  const input = getFormValuesById([
    "capital",
    "capitalGoal",
    "amount",
    "interval",
    "returnRate",
  ]);

  const timeInYears =
    Math.log(input.capitalGoal / input.capital) /
    Math.log(1 + input.returnRate / 100);
  console.log(timeInYears);
  const timeInYears2 =
    Math.log(input.capitalGoal / input.capital) /
    (Math.log(1 + input.returnRate / 100) *
      (input.amount / (input.period / 12) / (input.returnRate / 100)));
  console.log(timeInYears2);
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
