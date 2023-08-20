const counter = document.getElementById('cart-counter');

const cart = [];

const addToCart = (item) => {
    cart.push(item);
    updateCartCounter();
}

const emptyCart = () => {
    cart.length = 0;
    updateCartCounter();
}

const updateCartCounter = () => {
    const counter = document.getElementById('cart-counter');
    counter.innerHTML = cart.length;
}

updateCartitems = () => {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('cart-item');
        itemContainer.innerHTML = `
        <p>${item.name}</p>
        <p>${item.price.toFixed(2)}</p>
        `;
     
    });
}