
const cities = ["Lahore" , "Karachi" , "Islamabad" , "Multan"];
console.log("First City : ",cities[0]);
console.log("Last City : ",cities[cities.length - 1]);
console.log("Total Cities : ",cities.length);
console.log("City at index 2 : ",cities[2]);



const cart = ["Laptop"];

cart.push("Mouse");
console.log(cart);

cart.push("Keyboard");
console.log(cart);

cart.pop();
console.log(cart); 

cart.unshift("Headphones");
console.log(cart); 


const prices = [500, 1200, 350, 890];
prices.forEach(price =>{
console.log("Rs. " + price);
});

let total = 0;
prices.forEach(price => {
total += price;
});
console.log("Total:", total);

const marks = [45, 78, 92, 33, 67, 88];
const passing = marks.filter(mark => {
return mark >= 50;
});
console.log("Passing:", passing);


const percentages = marks.map(mark => {
return mark + "%";
});
console.log("Percentages:", percentages);
const excellent = marks.filter(mark => mark > 80);
console.log("Excellent:", excellent);
