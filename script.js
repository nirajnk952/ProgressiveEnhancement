const cart = [];

function addToCart(product, price) {
    const item = cart.find(item => item.product === product);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    updateCartCount();
    renderCart();
}

function removeFromCart(product) {
    const index = cart.findIndex(item => item.product === product);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="cart-icon">🛒</span>${item.product} - $${item.price} x ${item.quantity} 
        <button onclick="removeFromCart('${item.product}')">Remove</button>`;
        cartList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });
    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}
