const display1El = document.querySelector(".display1");
const display2El = document.querySelector(".display2");
const clearallEl = document.querySelector(".clearall");
const clearEl = document.querySelector(".clear");
const operatorEl = document.querySelectorAll(".operator");
const numberEl = document.querySelectorAll(".number");
const equalEl = document.querySelector(".operation");
const dispaly3 = document.querySelector(".display3");

let num1 = "";
let num2 = "";
let result = "";
let lastOperator = "";
let haveDot = false;
let num1Ans = "";
let answer = "";
dispaly3.innerHTML = "";

numberEl.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.innerHTML === "." && !haveDot) {
      haveDot = true;
      console.log(haveDot);
    } else if (e.target.innerHTML === "." && haveDot) {
      return;
    }

    num2 += e.target.innerHTML;
    display2El.innerHTML = num2;

    console.log(num2);
  });
});

operatorEl.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (num2 !== "") {
      if (!num2) result;
      haveDot = false;
      const operationName = e.target.innerHTML;
      if (num1 && num2 && lastOperator) {
        mathOperation();
      } else {
        result = parseFloat(num2);
      }
      shiftOperation(operationName);
      lastOperator = operationName;
      console.log("result", result);
    }
  });
});

function shiftOperation(name = "") {
  num1 += num2 + " " + name + " ";
  display1El.innerHTML = num1;
  display2El.innerHTML = "";
  num2 = "";
  dispaly3.innerHTML = result;
}

function mathOperation() {
  if (lastOperator == "x") {
    result = parseFloat(result) * parseFloat(num2);
  }
  if (lastOperator == "-") {
    result = parseFloat(result) - parseFloat(num2);
  }
  if (lastOperator == "+") {
    result = parseFloat(result) + parseFloat(num2);
  }
  if (lastOperator == "/") {
    result = parseFloat(result) / parseFloat(num2);
  }
  if (lastOperator == "%") {
    result = parseFloat(result) % parseFloat(num2);
  }
}

equalEl.addEventListener("click", (e) => {
  if (!num1 || !num2) return;
  haveDot = false;
  mathOperation();
  shiftOperation();
  display2El.innerHTML = result;
  num2 = result;
  dispaly3.innerHTML = "";
});

clearallEl.addEventListener("click", () => {
  deleteAll();
});

clearEl.addEventListener("click", () => {
  if (num2 !== "") {
    num2 = num2.slice(0, -1);
    display2El.innerHTML = num2;
  }
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickBtn(e.key);
  } else if (e.key === "/" || e.key === "+" || e.key === "-" || e.key === "%") {
    operationKey(e.key);
  } else if (e.key === "*") {
    operationKey("x");
  } else if (e.key === "Enter" || e.key === "=") {
    final();
  } else if (e.key === "Backspace") {
    num2 = num2.slice(0, -1);
    display2El.innerHTML = num2;
  } else if (e.key === "Delete") {
    deleteAll();
  }
});

function clickBtn(key) {
  numberEl.forEach((e) => {
    if (e.innerHTML === key) {
      e.click();
    }
  });
}

function operationKey(key) {
  operatorEl.forEach((btn) => {
    if (btn.innerHTML === key) {
      btn.click();
    }
  });
}

function final() {
  equalEl.click();
}

function deleteAll() {
  display1El.innerHTML = "0";
  display2El.innerHTML = "0";
  num2 = "";
  num1 = "";
  result = "";
  dispaly3.innerHTML = "";
}
