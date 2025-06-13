"use strict";
const history = document.querySelector(".history");
const historyList = document.querySelector(".history-list");
const historyBtn = document.querySelector(".history-btns");
const del = document.querySelector(".del");
const displayInput = document.querySelector(".display-input");
const btns = document.querySelectorAll(".btn");

del.style.backgroundColor = "red";

//history button
historyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  history.classList.toggle("show");
});

// console.log(btns);
let result = "";

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.innerHTML === "=") {
      // condition for the square root calculation
      if (displayInput.value.includes("√")) {
        const sqr = Array.from(displayInput.value)
          .filter((sqr) => sqr !== "√")
          .join("");
        console.log(sqr);

        result = Math.sqrt(sqr);
        displayInput.value = result;
      } else {
        try {
          const calcResult = eval(result);
          displayInput.value = calcResult;
        } catch (err) {
          displayInput.value = "Error";
        }

        //adding the input history
        if (displayInput.value === "Error") {
          return;
        } else {
          getHistory();
        }
      }
    } else if (e.target.innerHTML === "DEL") {
      result = result.slice(0, -1);
      displayInput.value = result;
    } else if (e.target.innerHTML === "÷") {
      result = result + "/";
      displayInput.value = result;
    } else if (e.target.innerHTML === "√") {
      result = result + "√";
      displayInput.value = result;
    } else if (e.target.innerHTML === "%") {
      result = result / 100;
      displayInput.value = result;
    } else if (e.target.innerHTML === "x") {
      result = result + "*";
      displayInput.value = result;
    } else if (e.target.innerHTML === "^") {
      result = result + "**";
      displayInput.value = result;
    } else if (e.target.innerHTML === "AC") {
      result = "";
      displayInput.value = result;
    } else {
      result += e.target.innerHTML;
      displayInput.value = result;
    }

    // console.log(e.target.innerHTML);
  });
});

const disallowedKeys = [
  "Control",
  "Backspace",
  "Shift",
  "Alt",
  "Meta",
  "Tab",
  "CapsLock",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Escape",
  "Enter",
];

displayInput.addEventListener("keydown", (e) => {
  e.preventDefault(); // Call the function

  console.log(e);
  // if the enter button is clicked , utilise a promise to catch the error and display the result

  if (e.key === "Enter") {
    try {
      const calcResult = eval(result);
      displayInput.value = calcResult;
    } catch (err) {
      displayInput.value = "Error";
      result = "";
    }
  } else if (!disallowedKeys.includes(e.key)) {
    result += e.key;
    displayInput.value = result;
  }

  console.log(result);
});

function getHistory() {
  //return nothing if there is no value inputed
  if (displayInput.value === "Error") {
    return;
  }

  const inputText = result;

  const li = document.createElement("li");
  li.textContent = inputText;
  historyList.appendChild(li);
}
