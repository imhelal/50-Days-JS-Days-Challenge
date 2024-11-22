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

// Initial cart
const cartItems = [];
console.log(cartItems);

// Find the clicked product
let findClickedProduct = (product_id) => {
  // Find the product from the product array list
  let getProduct = products.find((item) => item.id == product_id);

  if (!getProduct) {
    return false;
  }

  return getProduct;
};

// Add to cart
const addToCart = (elm) => {
  // item clicked
  let clickedId = elm.parentElement.getAttribute("data-id");

  // find the clicked product
  product = findClickedProduct(clickedId);

  // Check if already exists
  let existingCartItem = cartItems.find((item) => item.id == clickedId);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    let itemToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    cartItems.push(itemToAdd);
  }

  //increase the cart totoal
  cartCount.textContent = cartItems.length;
  //debug
  console.log(cartItems);
};

// Render product html
const renderProductHTML = (product) => {
  let html = `<img
              src="https://picsum.photos/200"
              alt="Product Image"
              class="product-image"
            />
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart(this)">Add to Cart</button>`;

  let div = document.createElement("div");
  div.classList.add("product-card");
  div.setAttribute("data-id", product.id);
  div.innerHTML = html;
  productGrid.appendChild(div);
};

// Fetch products
products.forEach((product) => {
  renderProductHTML(product);
});
