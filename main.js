var days = [1, 2, 3, 4, 5, 6, 7, 8];
var candlesWithShamash = days.map((day) => day + 1);

function calculateCandlesAmount() {
  let total = candlesWithShamash.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return total;
}

function printCandles() {
  return days
    .map((day) => {
      let candle = "| ";
      let shamash = "!";
      return `<tr><td>${
        stringifyNumber(day).charAt(0).toUpperCase() +
        stringifyNumber(day).slice(1)
      } day:<td/><td>${candle.repeat(day) + shamash}<td/></tr>`;
    })
    .join("");
}

var special = [
  "zeroth",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
];
var deca = [
  "twent",
  "thirt",
  "fort",
  "fift",
  "sixt",
  "sevent",
  "eight",
  "ninet",
];

function stringifyNumber(n) {
  if (n < 20) return special[n];
  if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + "ieth";
  return deca[Math.floor(n / 10) - 2] + "y-" + special[n % 10];
}

var candlesPerDay = document.querySelector(".candles-per-day");
var totalAmount = document.querySelector(".total-amount");
candlesPerDay.innerHTML = printCandles();
totalAmount.innerHTML = calculateCandlesAmount();
