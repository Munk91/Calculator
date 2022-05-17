function annuityCalculation() {
  var input = getFormValuesById([
    "amount",
    "period",
    "interval",
    "returnRate",
    "initialAmount",
  ]);

  var capital = 0;
  var payments = input.interval * input.period;
  var monthlyReturnRate = Math.pow(1 + input.returnRate / 100, 1 / 12) - 1;

  if (input.amount === 0) {
    capital =
      input.initialAmount * Math.pow(1 + input.returnRate / 100, input.period);
  } else {
    capital =
      input.amount *
        ((Math.pow(1 + monthlyReturnRate, payments) - 1) / monthlyReturnRate) +
      input.initialAmount;
  }

  capital = Math.round(capital);

  getElement("annuityResult").value = capital;
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
