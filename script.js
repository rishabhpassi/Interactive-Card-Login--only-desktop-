"use strict";


// Define variables for input and output elements
let userenterName = document.getElementsByClassName("user-name")[0].value;
let userName = document.getElementsByClassName("card-expiry")[0];
let userenterCardNumber = document.getElementsByClassName("card-num")[0].value;
let userCardNumber = document.getElementsByClassName("card-number")[0];
let userenteredExpiryMonth = document.getElementsByClassName("MM")[0].value;
let userenteredExpiryYear = document.getElementsByClassName("YY")[0].value;
let userExpiry = document.getElementsByClassName("card-expiry1")[0];
let userennteredCVC = document.getElementsByClassName("cvc")[0].value;
let UserCVC = document.getElementsByClassName("cvv")[0];
let submitButton = document.getElementsByClassName("confirm")[0];
let y = document.getElementsByClassName("main-form")[0];
let x = document.getElementsByClassName("complete")[0];




// Add click event listener to submit button
submitButton.addEventListener("click", function (e) {

    // Update output elements with input values
    userName.innerHTML = userenterName;
    const chars = userenterCardNumber.split("");
    let cardNumberSpans = [];
    chars.forEach(char => {
      if (!isNaN(char)) {
        const span = document.createElement("span");
        span.innerHTML = char;
        cardNumberSpans.push(span);
      } else {
        document.getElementById("container").innerHTML += char;
      }
    });
    userCardNumber.innerHTML = "";
    cardNumberSpans.forEach(span => userCardNumber.appendChild(span));
    userExpiry.innerHTML = `${userenteredExpiryMonth}/${userenteredExpiryYear}`;
    e.preventDefault();


    // Update CVC output element with input value
    UserCVC.innerHTML = userennteredCVC;

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  
});


