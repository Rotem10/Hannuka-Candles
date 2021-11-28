const days = [1, 2, 3, 4, 5, 6, 7, 8];
const candlesWithShamash = days.map((day) => day + 1);

function calculateCandlesAmount() {
  let total = candlesWithShamash.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return total;
}

function printCandles() {
  return days
    .map((day) => {
      const candle = "| ";
      const shamash = "!";
      return `<tr><td>${
        stringifyNumber(day).charAt(0).toUpperCase() +
        stringifyNumber(day).slice(1)
      } day:<td/><td>${candle.repeat(day) + shamash}<td/></tr>`;
    })
    .join("");
}

const special = [
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
const deca = [
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
  if (n < 20) {
    return special[n];
  }
  if (n % 10 === 0) {
    return deca[Math.floor(n / 10) - 2] + "ieth";
  }
  return deca[Math.floor(n / 10) - 2] + "y-" + special[n % 10];
}

const candlesPerDay = document.querySelector(".candles-per-day");
const totalAmount = document.querySelector(".total-amount");
candlesPerDay.innerHTML = printCandles();
totalAmount.innerHTML = calculateCandlesAmount();
