"use strict";
function annuityCalculation() {
    const input = getFormValuesById([
        "amount",
        "period",
        "interval",
        "returnRate",
        "initialAmount",
    ]);
    let capital = 0;
    const payments = input.interval * input.period;
    const monthlyReturnRate = Math.pow(1 + input.returnRate / 100, 1 / 12) - 1;
    if (input.amount === 0) {
        capital =
            input.initialAmount * Math.pow(1 + input.returnRate / 100, input.period);
    }
    else {
        capital =
            input.amount *
                ((Math.pow(1 + monthlyReturnRate, payments) - 1) / monthlyReturnRate) +
                input.initialAmount;
    }
    capital = Math.round(capital);
    const annuityResultInput = getInput("annuityResult");
    if (!annuityResultInput)
        return;
    annuityResultInput.value = capital.toString();
}
