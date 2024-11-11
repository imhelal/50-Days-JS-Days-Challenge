let currencyOne = document.getElementById("currency-one");
let amountOne = document.getElementById("amount-one");
let currencyTwo = document.getElementById("currency-two");
let amountTwo = document.getElementById("amount-two");

let swapBTn = document.getElementById("swap");
let rateElm = document.getElementById("rate");

function getEchangeRate() {
  // fetch data
  let URL = `https://v6.exchangerate-api.com/v6/2d8f2e2caa670fa6c38f5798/latest/${currencyOne.value}`;

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let rate = data.conversion_rates[currencyTwo.value];
      rateElm.innerText = `1 ${currencyOne.value} = ${rate}${currencyTwo.value}`;

      amountTwo.value = (rate * amountOne.value).toFixed(2);
    });
}

// Swap

function swapCurrency() {
  let temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  getEchangeRate();
}

// add event listeners
currencyOne.addEventListener("change", getEchangeRate);
currencyTwo.addEventListener("change", getEchangeRate);
amountOne.addEventListener("input", getEchangeRate);

swapBTn.addEventListener("click", swapCurrency);

// On page load
window.onload = function () {
  getEchangeRate();
};
