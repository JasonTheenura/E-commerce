const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", function() {
    const quantity = document.getElementById("quantity").value;
    
    // Create a cart item object with item details including an image URL
    const item = {
        name: "Urban Nomad Tunic",
        price: 22.09, // Adjust this to your actual price
        quantity: parseInt(quantity),
        image: "main-image-1.webp", // Replace with the actual image URL
    };
    
    // Get the current cart or initialize an empty array
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    
    // Add the item to the cart
    cart.push(item);
    
    // Store the updated cart in session storage
    sessionStorage.setItem("cart", JSON.stringify(cart));
});
