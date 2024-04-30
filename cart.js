// Function to add items to the cart
function addToCart(productName, price) {
    // Retrieve cart data from localStorage or initialize an empty array
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push({ name: productName, price: price });

    // Store the updated cart data in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Alert the user that the item has been added to the cart
    alert('Item added to cart!');
}

function updateCartCount() {
    // Retrieve cart data from localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart count
    var countElement = document.getElementById('count');
    countElement.textContent = cart.length;

    // Update cart items list
    var cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    cart.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - $' + item.price;
        cartItemsElement.appendChild(listItem);
    });
}

// Call updateCartCount on page load
updateCartCount();
