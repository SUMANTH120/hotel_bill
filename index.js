
const pricePerItem = 155;

function incr() {
    // Increase quantity
    let quantity = parseInt(document.getElementById("quantity").value);
    quantity++;
    
    // Update the quantity field
    document.getElementById("quantity").value = quantity;

    // Update the total price
    updateTotalPrice(quantity);
}

function decr() {
    // Decrease quantity
    let quantity = parseInt(document.getElementById("quantity").value);
    
    // Prevent quantity from going below 1
    if (quantity > 1) {
        quantity--;
    }
    
    // Update the quantity field
    document.getElementById("quantity").value = quantity;

    // Update the total price
    updateTotalPrice(quantity);
}

function updateTotalPrice(quantity) {
    // Calculate total price based on the quantity
    const totalPrice = quantity * pricePerItem;
    const gst_fee=totalPrice*0.05;
    const bill_fee=totalPrice+gst_fee+46;
    // Update the total price displayed on the page
    document.getElementById("total-price").textContent = totalPrice;
    document.getElementById("gst-fee").textContent = gst_fee;
    document.getElementById("bill-price").textContent = bill_fee;
}
document.getElementById('bttn').addEventListener('click', function () {
    // Change background color
    document.body.classList.add('effect');
    // Show the Thank You message
    document.getElementById('thankYouMessage').style.display = 'block';
  });

