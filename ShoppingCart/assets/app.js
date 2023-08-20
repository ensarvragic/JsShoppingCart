const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const emptyCartButton = document.getElementById('empty-cart');

const products = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

emptyCartButton.addEventListener('click', emptyCart);

function addToCart(event) {
    const productName = event.target.getAttribute('data-name');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));

    products.push({ name: productName, price: productPrice });
    updateCart();
}

function emptyCart() {
    products.length = 0;
    updateCart();
}

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    products.forEach(product => {
        const item = document.createElement('li');
        item.innerText = `${product.name} - $${product.price.toFixed(2)}`;
        cartItemsList.appendChild(item);
        total += product.price;
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}
