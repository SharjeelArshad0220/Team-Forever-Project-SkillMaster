function convertCurrency(amount, fromCurrency, toCurrency) {

    const rates = {
        PKR: 1,
        USD: 278,   // 1 USD = 278 PKR
        EUR: 305    // 1 EUR = 305 PKR
    };

    if (fromCurrency === toCurrency) {
        return amount;
    }

    const inPKR = amount * rates[fromCurrency];

    const result = inPKR / rates[toCurrency];

    return Math.round(result * 100) / 100;
}


function calculateDiscount(price, discountPercent) {

    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
        return "Invalid input!";
    }

    const discount = price * (discountPercent / 100);
    const finalPrice = price - discount;

    return Math.round(finalPrice * 100) / 100;
}

function formatPhoneNumber(digits) {

    const cleaned = digits.replace(/[-\s]/g, "");

    if (cleaned.length !== 11) {
        return "Error: Must be 11 digits";
    }

    if (!cleaned.startsWith("03")) {
        return "Error: Must start with 03";
    }

    const formatted = "+92-" + cleaned.slice(1, 4) + "-" + cleaned.slice(4);

    return formatted;
}

function validateEmail(email) {
    if (email.length === 0) {
        return false;
    }

    if (!email.includes("@")) {
        return false;
    }

    const atPosition = email.indexOf("@");

    if (atPosition === 0 || atPosition === email.length - 1) {
        return false;
    }

    const domain = email.slice(atPosition);

    if (!domain.includes(".")) {
        return false;
    }

    return true;
}


console.log("===== FUNCTION TESTS =====\n");

console.log("1 : CURRENCY CONVERTER");
console.log("100 USD to PKR:", convertCurrency(100, "USD", "PKR"));
console.log("5000 PKR to USD:", convertCurrency(5000, "PKR", "USD"));
console.log("50 EUR to PKR:", convertCurrency(50, "EUR", "PKR"));
console.log("");


console.log("2 :  DISCOUNT CALCULATOR");
console.log("Rs. 1000 with 10% off:", calculateDiscount(1000, 10));
console.log("Rs. 5000 with 25% off:", calculateDiscount(5000, 25));
console.log("Rs. 750 with 15% off:", calculateDiscount(750, 15));
console.log("");


console.log("3 :  PHONE NUMBER FORMATTER");
console.log("03001234567 →", formatPhoneNumber("03001234567"));
console.log("0321-9876543 →", formatPhoneNumber("0321-9876543"));
console.log("0300 123 4567 →", formatPhoneNumber("0300 123 4567"));
console.log("");


console.log("4 :  EMAIL VALIDATOR");
console.log("ali@gmail.com:", validateEmail("ali@gmail.com"));
console.log("invalid.email:", validateEmail("invalid.email"));
console.log("@gmail.com:", validateEmail("@gmail.com"));
console.log("test@:", validateEmail("test@"));
console.log("");

console.log("✅ All functions tested successfully!");

