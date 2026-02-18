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