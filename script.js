const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll(".stock-card");
    cards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(filter) ? "block" : "none";
    });
  });
}

const currencySelect = document.getElementById("currencySelect");
if (currencySelect) {
  const rates = { USD: { symbol: "$", mult: 1 }, EUR: { symbol: "€", mult: 0.92 }, GBP: { symbol: "£", mult: 0.79 } };
  const basePrices = [185, 242, 178, 172, 455, 125];

  currencySelect.addEventListener("change", function () {
    const selected = rates[this.value] || rates.USD;
    const priceElements = document.querySelectorAll(".stock-price");

    priceElements.forEach((el, idx) => {
      const converted = Math.round(basePrices[idx] * selected.mult);
      el.innerText = `${selected.symbol}${converted}`;
    });
  });
}

const countryText = document.getElementById("countryText");
if (countryText) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`
          );
          const data = await res.json();
          countryText.innerText = data.address.country || "Germany";
        } catch (_) {
          countryText.innerText = "Germany";
        }
      },
      () => {
        countryText.innerText = "Germany";
      }
    );
  } else {
    countryText.innerText = "Germany";
  }
}

const themeBtn = document.getElementById("themeToggle");
if (themeBtn) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  });
}
