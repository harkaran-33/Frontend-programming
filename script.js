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

// Theme Toggle
const themeBtn=document.getElementById("themeToggle");
if(themeBtn){
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-theme");
}
themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("light-theme");
localStorage.setItem(
"theme",
document.body.classList.contains("light-theme") ? "light" : "dark"
);
});
}
