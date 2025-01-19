const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
let n =0;
function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click',(_e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(_e)=>{
    if(n< imgs.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollcontainer = document.querySelectorAll('.products');
for (const item of scrollcontainer) {
    item.addEentListener('wheel',(evt)=>{
evt.preventDefault();
item.scrollLeft += evt.deltaY;
    })
    
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.control_prev');
    const nextButton = document.querySelector('.control_next');
    const productContainer = document.querySelector('.product-slider-with-price .Products');

    prevButton.addEventListener('click', function() {
        productContainer.scrollBy({
            left: -200, // Scroll by 200px to the left
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        productContainer.scrollBy({
            left: 200, // Scroll by 200px to the right
            behavior: 'smooth'
        });
    });
});





const bestSellerProducts = [
    { img: "./assets/product1-1.jpg", price: 14.49, discount: "27%", description: "Great sports gear" },
    { img: "./assets/product1-2.jpg", price: 12.99, discount: "30%", description: "Durable outdoor equipment" },
    { img: "./assets/product1-3.jpg", price: 18.49, discount: "15%", description: "High-quality sportswear" },
    { img: "./assets/product1-4.jpg", price: 9.99, discount: "50%", description: "Affordable outdoor tools" },
    { img: "./assets/product1-5.jpg", price: 6.99, discount: "40%", description: "Compact and lightweight" },
    // Add more products as needed
];

const productsContainer = document.getElementById("best-seller-products");

bestSellerProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <div class="product-img-container">
            <img src="${product.img}" alt="Product Image">
        </div>
        <div class="product-offer">
            <p>${product.discount} off</p>
        </div>
        <p>$<span>${product.price.toFixed(2)}</span></p>
        <button><h3>Add to Cart</h3></button>
        <h4>${product.description}</h4>
    `;
    productsContainer.appendChild(productCard);
});




let currentIndex = 0;
const images = document.querySelectorAll('.slider-images li');
const totalImages = images.length;

const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

function updateSlider() {
    const offset = -currentIndex * 100; // Move slider by 100% for each image
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateSlider();
});


<script>
// Cart system
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    cartItemsContainer.innerHTML = ''; // Clear the current cart items
    let totalPrice = 0;

    // Display the items in the cart
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" width="50" alt="${item.name}">
            <p>${item.name}</p>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    // Update the total price
    cartTotalPrice.textContent = totalPrice.toFixed(2);
}

// Function to add item to the cart
function addToCart(id, name, price, image) {
    const existingItemIndex = cart.findIndex(item => item.id === id);
    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    updateCart();
}

// Function to remove item from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    updateCart();
}

// Initial call to display cart items on page load
updateCart();

// Example of how to add items to the cart
document.querySelector('.btn').addEventListener('click', function() {
    const productId = 1; // Example product ID
    const productName = "BENGOO G9000 Stereo Gaming Headset";
    const productPrice = 25.99;
    const productImage = './assets/product_img.jpg';
    addToCart(productId, productName, productPrice, productImage);
});
</script>
