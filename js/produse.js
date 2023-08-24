// making the filtering

let products = [];

async function fetchProductData() {
  try {
    const response = await fetch("/js/produse.json");
    const data = await response.json();
    products = data;
  } catch (error) {
    console.error(error);
  }
}

fetchProductData();

// add event listners

// Add event listeners to the buttons
document
  .querySelector(".sorteaza-crescator")
  .addEventListener("click", function () {
    sortItems("asc");
  });

document
  .querySelector(".sorteaza-descrescator")
  .addEventListener("click", function () {
    sortItems("desc");
  });

function sortItems(order) {
  let productContainer = document.querySelector(".grid-product-container");
  let productItems = Array.from(
    productContainer.getElementsByClassName("product-link")
  );

  productItems.sort(function (a, b) {
    let priceA = parseFloat(a.querySelector(".product-price").innerText);
    let priceB = parseFloat(b.querySelector(".product-price").innerText);

    if (order === "asc") {
      return priceA - priceB;
    } else if (order === "desc") {
      return priceB - priceA;
    }
  });

  productItems.forEach(function (item) {
    productContainer.appendChild(item);
  });
}

///////////////////////////////////////////////////
// filtering items based by name
let activeFilter = "all";

document.querySelector(".tablouri").addEventListener("click", () => {
  activeFilter = "Tablou";
  filterProducts(activeFilter);
});

document.querySelector(".decoratiuni").addEventListener("click", () => {
  activeFilter = "Decoratiune";
  filterProducts(activeFilter);
});

document.querySelector(".pereti-verzi").addEventListener("click", () => {
  activeFilter = "Pereti ";
  filterProducts(activeFilter);
});
document.querySelector(".all").addEventListener("click", () => {
  activeFilter = "all";
  filterProducts(activeFilter);
});

function filterProducts(activeFilter) {
  let productContainer = document.querySelector(".grid-product-container");
  let productItems = Array.from(
    productContainer.getElementsByClassName("product-link")
  );

  productItems.forEach((item) => {
    let productName = item.querySelector(".product-name").textContent;

    if (activeFilter === "all" || productName.includes(activeFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Adjust grid layout
  productContainer.style.gridTemplateRows = "auto"; // Reset grid rows

  // Trigger layout reflow
  void productContainer.offsetWidth;

  productContainer.style.gridAutoRows = "minmax(200px, auto)"; // Set auto rows
}

//making the buttons active state

document
  .querySelector(".filter-btn")
  .addEventListener("click", function (event) {
    const target = event.target;
    const buttons = this.querySelectorAll(
      ".sorteaza-crescator, .sorteaza-descrescator, .tablouri, .decoratiuni, .pereti-verzi, .all, .sorteaza > *"
    );

    buttons.forEach(function (button) {
      if (button === target || button.contains(target)) {
        button.classList.toggle("active");
      } else {
        button.classList.remove("active");
      }
    });
  });

//
