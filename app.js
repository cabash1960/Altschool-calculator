"use strict";

const del = document.querySelector(".del");
const displayInput = document.querySelector(".display-input");
const btns = document.querySelectorAll("button");

del.style.backgroundColor = "red";

// console.log(btns);
let result = "";

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault;
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
        const calcResult = eval(result);
        displayInput.value = calcResult;
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
