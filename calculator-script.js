let inputValue = "_";

document.getElementById("user-input").innerHTML = inputValue;

function changeInputValue(val) {
  if (inputValue != "_") {
    inputValue = inputValue + val;
  } else {
    inputValue = val;
  }
  document.getElementById("user-input").innerHTML = inputValue;
}

function expression(ope) {
  try {
    if (ope == "ln") {
      inputValue = String(Math.log(eval(inputValue)));
    } else if (ope == "log") {
      inputValue = String(Math.log2(eval(inputValue)));
    } else if (ope == "10x") {
      inputValue = String(10 ** eval(inputValue));
    } else if (ope == "sqrt") {
      inputValue = String(Math.sqrt(eval(inputValue)));
    } else if (ope == "x2") {
      inputValue = String(eval(inputValue) ** 2);
    } else if (ope == "1/x") {
      inputValue = String(1 / eval(inputValue));
    } else if (ope == "mod") {
      inputValue = String(Math.abs(inputValue));
    } else if (ope == "exp") {
      inputValue = String(Math.exp(inputValue));
    } else if (ope == "sin") {
      inputValue = String(Math.sin((inputValue * Math.PI) / 180).toFixed(2));
    } else if (ope == "cos") {
      inputValue = String(Math.cos((inputValue * Math.PI) / 180).toFixed(2));
    } else if (ope == "tan") {
      inputValue = String(Math.tan((inputValue * Math.PI) / 180).toFixed(2));
    } else if (inputValue.includes("(")) {
      inputValue = String(inputValue + ope);
    } else {
      inputValue = String(eval(inputValue) + ope);
    }
    document.getElementById("user-input").innerHTML = inputValue;
  } catch {
    alert("Something went wrong! Kindly check your inputs.");
  }
}

function equals() {
  try {
    inputValue = String(eval(inputValue));
    document.getElementById("user-input").innerHTML = inputValue;
  } catch {
    alert("Something went wrong! Kindly check your inputs.");
  }
}

function clr() {
  inputValue = "_";
  document.getElementById("user-input").innerHTML = inputValue;
}

function lastRemove() {
  inputValue = inputValue.substring(0, inputValue.length - 1);
  if (inputValue == "") {
    inputValue = "_";
  }
  document.getElementById("user-input").innerHTML = inputValue;
}

function factorial() {
  var ans = 1;

  for (var i = 2; i <= inputValue; i++) ans = ans * i;
  inputValue = String(ans);
  document.getElementById("user-input").innerHTML = inputValue;
}
