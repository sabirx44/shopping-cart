// Cart items stored here
let cartItems = [];

// Function to add item to cart
function addToCart(productName, price) {
    const item = { productName, price };
    cartItems.push(item);
    renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

// Function to render cart and update cart count
function renderCart() {
    const cartElement = document.getElementById('cart');
    const cartCountElement = document.getElementById('cartCount');

    // Reset cart count to zero before updating
    let cartCount = 0;

    cartElement.innerHTML = '';

    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('border', 'p-4', 'flex', 'justify-between', 'items-center');

        const itemName = document.createElement('span');
        itemName.textContent = item.productName;
        itemName.classList.add('text-lg', 'font-semibold');

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `$${item.price}`;
        itemPrice.classList.add('text-gray-600');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('bg-red-500', 'text-white', 'py-1', 'px-2', 'rounded');
        removeButton.onclick = () => removeFromCart(index);

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(removeButton);

        cartElement.appendChild(itemDiv);

        // Increment cart count for each item
        cartCount++;
    });

    // Update the cart count element
    cartCountElement.textContent = cartCount;
}

// Initial rendering of the cart when the page loads
renderCart();