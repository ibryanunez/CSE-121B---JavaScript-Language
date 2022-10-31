/* Global variables */
const url = "https://api.escuelajs.co/api/v1/products";
let products = [];
let shoppingCartProducts = [];
let total = 0; // Amount to pay
const cartElement = document.querySelector("#cart-items");

/* FETCH API */
async function getProducts(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        products = data.slice(0, 10); // get 10 elements from data.

        // Creates attributes to the products for later use.
        products.forEach(product => product.quantity = 1);
        products.forEach(product => product.id2 = product.id + 100);
        products.forEach(product => product.id3 = product.id + 1000);

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

    addToCart();
    
}

/* SHOPPING CART */
function addToCart(){
    let buttons = document.querySelectorAll(".shop-item-button");
    buttons.forEach(button => {
        button.addEventListener("click", (event)=>{
            // Get the product's ID.
            let productID = parseInt(event.target.parentNode.id);

            // Find the product by ID.
            let product = products.find(product => product.id == productID);

            // Check if the product is in the shopping cart already.
            if (shoppingCartProducts.includes(product)) {
                // Add +1 to quantity.
                product.quantity += 1;

                // Update DOM
                let productElement = document.getElementById(product.id2);

                productElement.setAttribute("value", product.quantity);
            } else {
                shoppingCartProducts.push(product);
                addToDOM(product);
            }

            // Updates total price.
            getTotal();
            
            // Updates quantity when input is changed and updates the total price.
            updateQuantity();

            // Removes an item from the cart.
            removeFromCart();

        })
    })
}

function getTotal() {
    // Calculates the total.
    total = shoppingCartProducts.reduce((sum, product) =>
    sum + product.quantity * product.price, 0);

    // Inserts the total in the DOM.
    document.getElementById("cart-total-price").innerText = `$${total}`
}

function addToDOM(product) {
    // Add product to shopping cart.
    cartElement.innerHTML += `
    <div class="cart-row" id="${product.id3}">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${product.images[0]}" width="100" height="100">
            <span class="cart-item-title">${product.title}</span>
        </div>
        <span class="cart-price cart-column">$${product.price}</span>
        <div class="cart-quantity cart-column" id="quantity">
            <input class="cart-quantity-input" min="1" type="number" value="${product.quantity}" id="${product.id2}">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>`
}

function updateQuantity() {
    // Get input elements.
    let inputs = document.querySelectorAll(".cart-quantity-input")
    
    inputs.forEach(input => {
        input.addEventListener("input", (event) => {
            // Get product by ID2
            let product = shoppingCartProducts.find(product => input.id == product.id2);
            
            // Update quantity attribute in product.
            product.quantity = input.value;

            // Update total price.
            getTotal()
        })
    })
}

function removeFromCart() {
    // Get button elements.
    let buttons = document.querySelectorAll(".btn-danger");

    // Add click event to each button.
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Get product and element by ID2.
            let productID = parseInt(event.target.parentNode.childNodes[1].id);

            let product = shoppingCartProducts.find(product => productID == product.id2);

            // Remove product element from DOM.
            document.getElementById(product.id3).remove();

            // Remove product from shoppin cart array.
            let productIndex = shoppingCartProducts.indexOf(product);

            shoppingCartProducts.splice(productIndex, 1);

            // Update the total price.
            getTotal();
            
        })
    });
}

getProducts(url);