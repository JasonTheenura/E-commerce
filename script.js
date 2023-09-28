// Array to store cart items
const cart = [];

// Function to add an item to the cart
function addToCart(productId, productName, price) {
    const item = {
        id: productId,
        name: productName,
        price: price,
    };
    cart.push(item);
}

// Function to display the cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    for (const item of cart) {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    }
}

// Add to Cart button click event
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-product-id');
        const productName = this.parentNode.querySelector('h3').textContent;
        const price = parseFloat(this.parentNode.querySelector('p').textContent.match(/\d+\.\d+/)[0]);

        addToCart(productId, productName, price);
        displayCart();
    });
});
