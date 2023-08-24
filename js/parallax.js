let leaf = document.querySelector(".leaf");
let tree = document.querySelector(".tree");
let text = document.querySelector(".text");
let hill5 = document.querySelector(".hill5");
let hill4 = document.querySelector(".hill4");
let hill1 = document.querySelector(".hill1");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.top = value * 1 + "px";

  // leaf.style.top = value * -1.5 + "px";
  // leaf.style.left = value * 1.5 + "px";
  // hill5.style.left = value * 1.5 + "px";
  // hill4.style.left = value * -1.5 + "px";
  // text.style.top = value * 2.5 + "px";
  leaf.style.top = value * -1 + "px";
  leaf.style.left = value * 1 + "px";
  hill5.style.left = value * 1 + "px";
  hill4.style.left = value * -1 + "px";

  if (value <= 100) {
    hill1.style.top = value * 1 + "px";
    // text.style.top = value * 1 + "px";
  }
});

// grid
// var macy = Macy({
//   container: ".grid-container",
//   trueOrder: false,
//   waitForImages: false,
//   margin: 24,
//   columns: 6,
//   breakAt: {
//     1200: 5,
//     940: 3,
//     520: 2,
//     400: 1,
//   },
// });
