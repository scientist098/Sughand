<!-- Modify the "Add to Cart" button -->
<button class="btn" id="add-to-cart">Add To Cart</button>

<script>
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const productId = 1; // Example product ID
        const productName = "BENGOO G9000 Stereo Gaming Headset";
        const productPrice = 25.99;
        const productImage = './assets/product_img.jpg';

        addToCart(productId, productName, productPrice, productImage);

        // Redirect to the cart page
        window.location.href = 'cart.html';
    });

    function addToCart(id, name, price, image) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === id);
        
        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ id, name, price, image, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    }
</script>
