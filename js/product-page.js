// const urlParams = new URLSearchParams(window.location.search);
// const productId = urlParams.get("id");

// // Function to get product details from the JSON file
// function getProductDetails(productId) {
//   return fetch("/js/produse.json")
//     .then((response) => response.json())
//     .then((products) => {
//       const selectedProduct = products.find(
//         (product) => product.id === productId
//       );

//       return selectedProduct;
//     })
//     .catch((err) => console.log(err));
// }

// // Function to update product details on the page
// function updateProductDetails(product) {
//   document.querySelector(".imagebox img").src = product.image;
//   document.querySelector(".description").textContent =
//     product["product-description"];
//   document.querySelector(".product-price").textContent = product.price;
// }

// // Update product details on product page
// if (productId) {
//   getProductDetails(productId).then((product) => {
//     if (product) {
//       updateProductDetails(product);
//     }
//   });
// }

// Fetch the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Fetch the JSON data
fetch("/js/produse.json")
  .then((response) => response.json())
  .then((data) => {
    // Find the product with the matching ID
    const product = data.find((item) => item.id === parseInt(productId));

    // Update the product details on the page
    document.querySelector(".imagebox img").src = product.image;
    document.querySelector(".description").textContent = product.description;
    document.querySelector(".product-price").textContent = product.price;
  })
  .catch((error) => {
    console.error(error);
  });
