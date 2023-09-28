// JavaScript for the cart page (cart.html)

// Function to update the cart on the cart page
function updateCartPage() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    
    // Display cart items and calculate cart total
    const cartTotalElement = document.getElementById("cartTotal");
    let cartTotal = 0.00;
    
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Clear the previous items
    
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const total = item.price * item.quantity;
            const itemElement = document.createElement("li");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name} - Quantity: ${item.quantity} - Total: $${total.toFixed(2)}</p>
            `;
            cartItems.appendChild(itemElement);
            cartTotal += total;
        });
    }
    
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Initial call to update the cart on the cart page
updateCartPage();
