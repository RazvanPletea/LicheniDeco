//nav menu

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("open");

  if (nav.classList.contains("open")) {
    document.body.classList.add("no-scroll");
    document.body.appendChild(overlay);
  } else {
    document.body.classList.remove("no-scroll");
    document.body.removeChild(overlay);
  }
});

//dark light toggle switch

const toggle = document.querySelector("#toggle-switch");
const body = document.body;

//toggle the theme

toggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
});

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// making the ce facem noi slider
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//making the elements switch positions
// Get references to the elements
// Get references to the elements
const occupationItems = document.querySelectorAll(".occupation");
// const focus = document.querySelector(".focus");
// const unfocus = document.querySelector(".unfocus");

occupationItems.forEach((item) => {
  item.addEventListener("click", () => {
    occupationItems.forEach((item) => {
      item.classList.add("unfocus");
    });

    item.classList.remove("unfocus");
    item.classList.add("focus");
  });
});

////////////////////////////////////////////////////////////////
// making the product funcitonality

// function navigateToProductPage(productId) {
//   fetch("/data/products.json")
//     .then((response) => response.json())
//     .then((products) => {
//       const selectedProduct = products.find(
//         (product) => product.id === productId
//       );

//       if (selectedProduct) {
//         const url = `product-page.html?id=${selectedProduct.id}`;

//         window.location.href = url;

//         // Fetch product data and update the individual product page
//         fetch("/data/products.json")
//           .then((response) => response.json())
//           .then((products) => {
//             const selectedProduct = products.find(
//               (product) => product.id === parseInt(productId)
//             );

//             if (selectedProduct) {
//               document.querySelector(".imagebox img").src =
//                 selectedProduct.image;
//               document.querySelector(".description").textContent =
//                 selectedProduct.description;
//               document.querySelector(".product-price").textContent =
//                 selectedProduct.price;
//             }
//           })
//           .catch((err) => console.log(err));
//       }
//     })
//     .catch((err) => console.log(err));
// }

// // Retrieve the product id from the URL parameter
// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("id");
// if (productId) {
//   navigateToProductPage(productId);
// }

// // add event listner to products

// const productItems = document.querySelectorAll(".grid-product-item");

// productItems.forEach((item) => {
//   const productId = item.getAttribute("id").split("-")[1];
//   item.addEventListener("click", () => {
//     navigateToProductPage(productId);
//   });
// });

function navigateToProductPage(productId) {
  fetch("/data/products.json")
    .then((response) => response.json())
    .then((products) => {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );

      if (selectedProduct) {
        const url = `product-page.html?id=${selectedProduct.id}`;
        window.location.href = url;
      }
    })
    .catch((err) => console.log(err));
}

function getProductDetails(productId) {
  return fetch("/data/products.json")
    .then((response) => response.json())
    .then((products) => {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );

      return selectedProduct;
      console.log(peoductItems);
    })
    .catch((err) => console.log(err));
}

function updateProductDetails(product) {
  document.querySelector(".imagebox img").src = product.image;
  document.querySelector(".description").textContent = product.description;
  document.querySelector(".product-price").textContent = product.price;
}

// Add event listener to products
