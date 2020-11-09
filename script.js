let firstCurrency = document.getElementById("currencyOne");
let secondCurrency = document.getElementById("currencyTwo");
let firstAmount = document.getElementById("amountOne");
let secondAmount = document.getElementById("amountTwo");
let convertButton = document.getElementById("findRates");

function  calculateRates() {
  let firstCurrencyValue = firstCurrency.value;
  let secondCurrencyValue = secondCurrency.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrencyValue}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[secondCurrencyValue];
      secondAmount.value = (rate * firstAmount.value).toFixed(2);
    });
}

// EVENT LISTENERS
currencyOne.addEventListener("change",  calculateRates);
amountOne.addEventListener("input",  calculateRates);
currencyTwo.addEventListener("change",  calculateRates);
amountTwo.addEventListener("input",  calculateRates);
convertButton.addEventListener("click",  () =>{
        calculateRates()
document.getElementById('audio').play()
});

 calculateRates();
