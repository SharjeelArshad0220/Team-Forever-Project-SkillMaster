const student = {

  name: "Hassan Ali",
  rollNo: "ADPCS-2024-101",
  semester: 2,


  contact: {
    phone: "03001234567",
    email: "hassan.ali@email.com"
  },

  
  courses: [
    { code: "CS101", name: "Programming", grade: "A" },
    { code: "MATH201", name: "Calculus", grade: "B" }
  ],

  
  calculateCGPA() {
    const gradePoints = {
      A: 4,
      B: 3,
      C: 2,
      D: 1
    };

    let totalPoints = 0;

    for (let i = 0; i < this.courses.length; i++) {
      let grade = this.courses[i].grade;
      totalPoints += gradePoints[grade];
    }

    return (totalPoints / this.courses.length).toFixed(2);
  }
};

// Test
console.log(student.name);
console.log(student.contact.email);
console.log(student.courses[0].name);
console.log("CGPA:", student.calculateCGPA());
  

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



console.log("Exercise 3");

const restaurant = {
name: "Bundu Khan",
location: "Lahore",
rating: 4.5,

menu: {
starters: [
{ name: "Seekh Kabab", price: 800 },
{ name: "Chicken Tikka", price: 900 }
],
mains: [
{ name: "Biryani", price: 700 },
{ name: "Karahi", price: 1500 }
]
},

findItem(itemName) {
    for (let category in this.menu) {
      for (let item of this.menu[category]) {
        if (item.name === itemName) {
          return item;
        }
      }
    }
    return null; 
  },

calculateBill(orderItems) {
let total =0;
for (let name of orderItems) {
      const item = this.findItem(name);
      if (item) {
        total += item.price;
 }
    }

    return total;
  }
};

console.log(restaurant.findItem("Biryani"));
console.log(restaurant.calculateBill(["Biryani", "Seekh Kabab"]));