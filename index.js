let cartCount = 0;
function addToCart() {
  cartCount++;
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cartCount;
  });
}
