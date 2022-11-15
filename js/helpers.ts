function getInputValue(id: string) {
  const element = document.getElementById(id) as HTMLInputElement | null;
  if (!element) return;
  return element.value;
}

function setInputValue(id: string, value: string) {
  const element = document.getElementById(id) as HTMLInputElement | null;
  if (!element) return;
  element.value = value;
}

function clearInputValue(id: string) {
  const element = document.getElementById(id) as HTMLInputElement | null;
  if (!element) return;
  element.value = "";
}

function getInput(id: string) {
  return document.getElementById(id) as HTMLInputElement | null;
}

function getFormValuesById(ids: string[]) {
  let values: { [key: string]: number } = {};

  let element;
  for (let i = 0; i < ids.length; i++) {
    element = getInput(ids[i]);
    if (!element) continue;
    values[element.id] = parseInt(element.value);
  }

  return values;
}
