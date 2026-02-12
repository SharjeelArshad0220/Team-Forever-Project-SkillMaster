function checkBiryani(riceCooked, masalaBalanced, chickenTender, saltOk) {
    
    if (riceCooked && masalaBalanced && chickenTender && saltOk) {
        console.log(" Biryani Perfect Hai!");
    } else {
        console.log(" Biryani Fail Hai!");
    }

}

console.log("Test 1:");
checkBiryani(true, true, true, true);

console.log("Test 2:");
checkBiryani(false, true, true, true);

console.log("Test 3:");
checkBiryani(true, false, true, true);

console.log("Test 4:");
checkBiryani(true, true, false, true);

console.log("Test 5:");
checkBiryani(true, true, true, false);