const display = document.getElementById("display");
const history = document.getElementById("history");
const keys = document.querySelector(".keys");

const state = {
  current: "0",
  previous: "",
  operator: null,
  overwrite: false,
};

function formatNumber(value) {
  if (value === "Error") {
    return value;
  }

  const [integerPart, decimalPart] = value.split(".");
  const formattedInteger = Number(integerPart).toLocaleString("en-US");

  if (decimalPart !== undefined) {
    return `${formattedInteger}.${decimalPart}`;
  }

  return formattedInteger;
}

function render() {
  display.textContent = formatNumber(state.current);
  history.textContent =
    state.previous && state.operator
      ? `${formatNumber(state.previous)} ${state.operator}`
      : "";
}

function clearState() {
  state.current = "0";
  state.previous = "";
  state.operator = null;
  state.overwrite = false;
}

function inputNumber(number) {
  if (state.current === "Error") {
    state.current = number;
    state.overwrite = false;
    return;
  }

  if (state.overwrite || state.current === "0") {
    state.current = number;
    state.overwrite = false;
    return;
  }

  state.current += number;
}

function inputDecimal() {
  if (state.current === "Error") {
    state.current = "0.";
    state.overwrite = false;
    return;
  }

  if (state.overwrite) {
    state.current = "0.";
    state.overwrite = false;
    return;
  }

  if (!state.current.includes(".")) {
    state.current += ".";
  }
}

function deleteDigit() {
  if (state.overwrite || state.current === "Error") {
    state.current = "0";
    state.overwrite = false;
    return;
  }

  if (state.current.length === 1 || (state.current.length === 2 && state.current.startsWith("-"))) {
    state.current = "0";
    return;
  }

  state.current = state.current.slice(0, -1);
}

function toggleSign() {
  if (state.current === "0" || state.current === "Error") {
    return;
  }

  state.current = state.current.startsWith("-")
    ? state.current.slice(1)
    : `-${state.current}`;
}

function applyPercent() {
  if (state.current === "Error") {
    return;
  }

  state.current = String(Number(state.current) / 100);
  state.overwrite = true;
}

function calculate() {
  if (!state.operator || !state.previous) {
    return state.current;
  }

  const previousValue = Number(state.previous);
  const currentValue = Number(state.current);

  if (Number.isNaN(previousValue) || Number.isNaN(currentValue)) {
    return "Error";
  }

  switch (state.operator) {
    case "+":
      return String(previousValue + currentValue);
    case "-":
      return String(previousValue - currentValue);
    case "*":
      return String(previousValue * currentValue);
    case "/":
      return currentValue === 0 ? "Error" : String(previousValue / currentValue);
    default:
      return state.current;
  }
}

function chooseOperator(nextOperator) {
  if (state.current === "Error") {
    return;
  }

  if (state.previous && state.operator && !state.overwrite) {
    state.current = calculate();
    if (state.current === "Error") {
      state.previous = "";
      state.operator = null;
      state.overwrite = true;
      return;
    }
  }

  state.previous = state.current;
  state.operator = nextOperator;
  state.overwrite = true;
}

function evaluate() {
  const result = calculate();
  state.current = result;
  state.previous = "";
  state.operator = null;
  state.overwrite = true;
}

function handleAction(action, value) {
  switch (action) {
    case "number":
      inputNumber(value);
      break;
    case "decimal":
      inputDecimal();
      break;
    case "operator":
      chooseOperator(value);
      break;
    case "equals":
      evaluate();
      break;
    case "clear":
      clearState();
      break;
    case "delete":
      deleteDigit();
      break;
    case "sign":
      toggleSign();
      break;
    case "percent":
      applyPercent();
      break;
    default:
      break;
  }

  render();
}

keys.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  handleAction(button.dataset.action, button.dataset.value);
});

document.addEventListener("keydown", (event) => {
  const { key } = event;

  if (/^\d$/.test(key)) {
    handleAction("number", key);
    return;
  }

  if (key === ".") {
    handleAction("decimal");
    return;
  }

  if (["+", "-", "*", "/"].includes(key)) {
    handleAction("operator", key);
    return;
  }

  if (key === "Enter" || key === "=") {
    event.preventDefault();
    handleAction("equals");
    return;
  }

  if (key === "Backspace") {
    handleAction("delete");
    return;
  }

  if (key === "Escape") {
    handleAction("clear");
  }
});

render();
