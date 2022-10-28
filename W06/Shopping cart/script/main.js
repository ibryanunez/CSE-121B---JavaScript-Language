/* Global variables */
const url = "https://api.escuelajs.co/api/v1/products";
let products = [];
let shoppingCartProducts = [];
let total = 0; // Amount to pay

/* FETCH API */
async function getProducts(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        products = data.slice(0, 10) // get 10 elements from data
        showProducts(products);
    }
}

/* Show the data from API on DOM */
function showProducts(products) {
    const shopItemsElement = document.getElementById("shop-items");
    products.forEach(product => {
        const html = `
            <article class="shop-item" id="${product.id}">
                <h4>${product.title}</h4>
                <img src="${product.images[0]}"
                <div>
                    <h2>$${product.price}</h2>
                    <button class="shop-item-button">ADD TO CART</button>
                </div>
            </article>`;
        shopItemsElement.innerHTML += html
    })
    addToCart()
}

/* SHOPPING CART */
function addToCart(){
    let buttons = document.querySelectorAll(".shop-item-button")
    const cartElement = document.querySelector("#cart-items");
    buttons.forEach(button => {
        button.addEventListener("click", (event)=>{
            // Get the product's ID.
            let productID = parseInt(event.target.parentNode.id);

            // Find the product by ID.
            let product = products.find(product => product.id == productID);

            // Add quantity
            product.quantity = 1;

            // Add product to shopping cart.
            cartElement.innerHTML += `
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${product.images[0]}" width="100" height="100">
                        <span class="cart-item-title">${product.title}</span>
                    </div>
                    <span class="cart-price cart-column">$${product.price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="${product.quantity}">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`
            
            // Add product object to the shopping cart array.
            shoppingCartProducts.push(product);
            console.log(shoppingCartProducts);

            // Update total price
            total = getTotal();

        })
    })
}

function getTotal() {
    const cartElement = document.querySelector("#cart-items");
    cartElement.reduce((sum, product) => {
        sumTotal = sum + product.quantity * product.price
    }, 0);
}

/* function removeFromCart() {

}

function displayTotal {

}
 */
getProducts(url);