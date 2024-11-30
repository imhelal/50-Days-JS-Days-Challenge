const cartElement = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotalElement = document.querySelector(".cart-total");
const clearBtn = document.querySelector(".clear-cart");

// initial cart
let cartItems = [];

// Update Cart
const updateCart = () => {
  // total cart quantity
  let totalCartCount = cartItems.reduce(
    (prevQuantity, item) => prevQuantity + item.quantity,
    0
  );

  // total cart value
  let cartTotalPrice = cartItems.reduce((prevValue, currentItem) => {
    return prevValue + currentItem.price * currentItem.quantity;
  }, 0);
  cartTotalElement.textContent = "$" + cartTotalPrice;
  cartCount.textContent = totalCartCount;
};

// Get saved items
const getSavedItems = () => {
  let itemsFromLocal = JSON.parse(localStorage.getItem("cartItems"));

  if (itemsFromLocal) {
    cartItems = itemsFromLocal;
  }
  updateCart();
};
getSavedItems();

// Remove item
const removeCartItem = (itemId) => {
  let findItem = cartItems.find((item) => item.id == itemId);
  let itemIndex = cartItems.indexOf(findItem);

  cartItems.splice(itemIndex, 1);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  updateCart();

  fetchCartItems();
};

// clear all cart items
const clearCart = () => {
  cartItems = [];
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCart();

  fetchCartItems();
};
clearBtn.addEventListener("click", clearCart);

// Render cart items
const renderCartItems = (cartItem) => {
  let html = `<img src="https://via.placeholder.com/100" alt="Product 1" />
            <div class="cart-item-details">
              <p class="cart-item-title">${cartItem.title}</p>
              <p class="cart-item-price">$${cartItem.price}</p>
              <p class="cart-item-quantity">
                Quantity:
                <span>${cartItem.quantity}</span>
              </p>
            </div>
            <button class="remove-item" onclick="removeCartItem(${cartItem.id})">Remove</button>`;

  let div = document.createElement("div");
  div.classList.add("cart-item");
  div.innerHTML = html;
  cartElement.appendChild(div);
};

const fetchCartItems = () => {
  cartElement.innerHTML = "";

  cartItems.forEach((item) => {
    renderCartItems(item);
  });
};

fetchCartItems();
