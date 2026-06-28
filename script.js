// SEARCH STOCKS

const searchInput =
document.getElementById(
"searchInput"
);

if (searchInput) {

searchInput.addEventListener(
"keyup",

function () {

const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
".stock-card"
);

cards.forEach(card => {

const text =
card.innerText.toLowerCase();

card.style.display =
text.includes(value)
? "block"
: "none";

});

});
}

// CURRENCY SWITCHER

const currency =
document.getElementById(
"currencySelect"
);

if (currency) {

currency.addEventListener(
"change",

function () {

const prices =
document.querySelectorAll(
".stock-price"
);

let symbol = "$";

if (
this.value === "EUR"
) {
symbol = "€";
}

if (
this.value === "GBP"
) {
symbol = "£";
}

const values =
[
185,
242,
178,
172,
455,
125
];

prices.forEach(
(price, index) => {

price.innerHTML =
symbol +
values[index];

});

});
}

// LOCATION

const countryText =
document.getElementById(
"countryText"
);

if (countryText) {

countryText.innerHTML =
"Germany";
}
