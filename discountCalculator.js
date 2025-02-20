function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;
    debugger; // Pause execution at the start of the function
    for (let i = 0; i < quantity; i++) { // Bug: Starts from 1 instead of 0
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9; // Apply a 9% discount
    }

    return totalPrice;
}


module.exports = calculateDiscountedPrice;
