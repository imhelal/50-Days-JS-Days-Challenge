// initial product
const products = [
  {
    id: 1,
    title: "First Product",
    price: 99,
  },
  {
    id: 2,
    title: "Second Product",
    price: 49,
  },
  {
    id: 3,
    title: "Third Product",
    price: 35,
  },
  {
    id: 4,
    title: "Product Title",
    price: 56,
  },
  {
    id: 5,
    title: "Product Title",
    price: 73,
  },
  {
    id: 6,
    title: "Product Title",
    price: 83,
  },
  {
    id: 7,
    title: "Product Title",
    price: 45,
  },
  {
    id: 8,
    title: "Product Title",
    price: 2,
  },
  {
    id: 9,
    title: "Product Title",
    price: 2,
  },
];
// elements
const productGrid = document.querySelector(".product-grid");
const cartCount = document.querySelector(".cart-count");

// Cart List
let cartItems = [];

// Update Cart
const updateCart = () => {
  let totalCartCount = cartItems.reduce(
    (prevQuantity, item) => prevQuantity + item.quantity,
    0
  );
  cartCount.textContent = totalCartCount;
};

// Get saved items
const getSavedItem = () => {
  let dataFromLocal = JSON.parse(localStorage.getItem("cartItems"));
  if (dataFromLocal) {
    cartItems = dataFromLocal;
    // Update header cart
    updateCart();
  }
};
getSavedItem();

// Add to cart
const addToCart = (element) => {
  let clickedItemId = element.parentElement.getAttribute("data-id");
  let getProduct = products.find((item) => item.id == clickedItemId);

  // Check if already exists
  let existingItem = cartItems.find((item) => item.id == clickedItemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    // Item to add
    let itemToAdd = {
      id: getProduct.id,
      title: getProduct.title,
      price: getProduct.price,
      quantity: 1,
    };

    cartItems.push(itemToAdd);
  }

  // Update header cart
  updateCart();

  // Save to localstorage
  saveTolocalStorage();
};

// Save to localstorage
const saveTolocalStorage = () => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// Render html
const renderHTMl = (product) => {
  let html = `
            <img
              src="https://picsum.photos/200"
              alt="Product Image"
              class="product-image"
            />
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart(this)">
              Add to Cart
            </button>
          `;

  let div = document.createElement("div");
  div.classList.add("product-card");
  div.setAttribute("data-id", product.id);
  div.innerHTML = html;

  productGrid.appendChild(div);
};

// Fetch the products
products.forEach((product) => {
  renderHTMl(product);
});
