let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".answer-row")

function buttonClick(value) {
     if (isNaN(parseInt(value))) {
       handleSymbol(value);
     } else {
       handleNumber(value);
  }
}

function handleNumber(value) {
  if (buffer === "0") {
        buffer = value;
  } else {
    buffer += value;
  } 
  rerender();


}

function handleSymbol(value) {
  switch (value) {
    case "C":
    buffer = "0";
    runningTotal = 0;
    previousOperator = null;
    break;
    case "=":
    if (previousOperator === null)
    return;
    performOperation(parseInt(buffer));
    previousOperator = null;
    buffer = +runningTotal;
    runningTotal = 0;
    break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (buffer === "0") {
        return;
      } else {
    handleMath(value); }
    break;
  }   
rerender();
}

function handleMath(value) {
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    performOperation(intBuffer);
  }
previousOperator = value;

buffer = "0"; //this is the reset
}

function performOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "*") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
  buffer = "intBuffer";
  console.log("intBuffer");
}   

function rerender() {
  screen.innerText = buffer;
} 

function initiate() {
  document.querySelectorAll(".button-parameters").forEach(element => {
  element.addEventListener('click', function(event){
     buttonClick(event.target.innerText);
   })
  });
}    
initiate();