
// SEARCH BAR
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {
  let query = searchBar.value.toLowerCase();
  document.querySelectorAll(".product").forEach(product => {
    let name = product.querySelector("h3").innerText.toLowerCase();
    product.style.display = name.includes(query) ? "block" : "none";
  });
});


// WISHLIST HEART
document.querySelectorAll(".wish").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = btn.innerText === "♡" ? "❤️" : "♡";
  });
});

// THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});



// CART FUNCTIONALITY
function loadCart(){ return JSON.parse(localStorage.getItem("cart")) || []; }
function saveCart(c){ localStorage.setItem("cart", JSON.stringify(c)); }
function updateCount(){ document.getElementById("cartCount").innerText = loadCart().length; }

updateCount();

document.querySelectorAll('.add').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.parentElement;
    const item = {
      id: product.dataset.id,
      name: product.dataset.name,
      price: product.dataset.price
    };
    const cart = loadCart();
    cart.push(item);
    saveCart(cart);
    updateCount();
    showToast("Added to cart!");
  });
});


// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.onclick = () => mobileMenu.classList.toggle("show");
