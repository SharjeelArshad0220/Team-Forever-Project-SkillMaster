
console.log("Exercise 2");

const product = {
id: 1001,
name: "Gaming Laptop",
price: 125000,
category: "Electronics",

specifications: {
brand: "MSI Gaming" ,
ram: "16 GB",
storage: "512 GB–1 TB SSD"
},

reviews: [
{ user: "Ali", rating: 5, comment: "Excellent!" },
{ user: "Sara", rating:5, comment: "Smooth Performance" }
],

getAverageRating() {
let total = 0;
this.reviews.forEach(review => {
total += review.rating;
});
return total / this.reviews.length;
}
};
console.log(product.getAverageRating());

