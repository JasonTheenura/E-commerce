const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        mainImage.src = this.src;
    });
});

const quantityInput = document.getElementById("quantity");
const totalPriceElement = document.getElementById("totalPrice");

// Function to update the total price
function updateTotalPrice() {
    const pricePerItem = 13.49; // Adjust this to your actual price per item
    const quantity = parseInt(quantityInput.value);
    const total = pricePerItem * quantity;
    totalPriceElement.textContent = "$" + total.toFixed(2); // Format the total price
}

// Event listener for quantity input
quantityInput.addEventListener("input", updateTotalPrice);

// Initial call to set the total price
updateTotalPrice();
