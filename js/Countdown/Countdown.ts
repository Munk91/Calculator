function calculateCountdown() {
  const input = getFormValuesById([
    "capital",
    "capitalGoal",
    "amount",
    "interval",
    "returnRate",
  ]);

  console.table(input);

  const timeInYears =
    Math.log(
      (input.capitalGoal * (input.returnRate / 100)) /
        (input.amount * input.interval) +
        1
    ) /
      Math.log(1 + input.returnRate / 100) -
    1;

  setInputValue("timeResult", timeInYears.toString());

  const countdownInterval = setInterval(() => {
    const time = getTime(timeInYears).next().value;
    const countdownInput = getInput("conutdown");
    if (!countdownInput) return;
    countdownInput.innerHTML = "You can retire in: " + time;
  }, 1000);

  // Find some way to clear the timer, when you calculate the second time.
}

function* getTime(timeInYears: number) {
  const now = new Date();
  const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  console.log(time, timeInYears);

  while (true) {
    // yield time;
    yield Date.now();
  }
}
