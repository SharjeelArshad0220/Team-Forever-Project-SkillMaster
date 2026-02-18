// ====== Menu Array ======
let menu = [
  { id: 1, name: "Biryani", price: 350 },
  { id: 2, name: "Burger", price: 250 },
  { id: 3, name: "Karahi", price: 1200 }
];

// ====== Add Item ======
function addItem(id, name, price) {
  menu.push({ id: id, name: name, price: price });
  console.log("Item Added Successfully ✅");
}

// ====== Show Menu ======
function showMenu() {
  console.log("----- Restaurant Menu -----");
  for (let i = 0; i < menu.length; i++) {
    console.log(
      "ID: " + menu[i].id +
      ", Name: " + menu[i].name +
      ", Price: Rs." + menu[i].price
    );
  }
}

// ====== Search Item ======
function searchItem(id) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].id === id) {
      return menu[i];
    }
  }
  return "Item Not Found ❌";
}

// ====== Update Price ======
function updatePrice(id, newPrice) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].id === id) {
      menu[i].price = newPrice;
      console.log("Price Updated ✅");
      return;
    }
  }
  console.log("Item Not Found ❌");
}

// ====== Delete Item ======
function deleteItem(id) {
  menu = menu.filter(function(item) {
    return item.id !== id;
  });
  console.log("Item Deleted (if existed) 🗑");
}

// ====== Calculate Total Menu Price ======
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < menu.length; i++) {
    total += menu[i].price;
  }
  return total;
}

// ====== Testing All Methods ======

showMenu();

addItem(4, "Pizza", 800);
showMenu();

console.log("Search Result:", searchItem(2));

updatePrice(1, 400);
showMenu();

deleteItem(3);
showMenu();

console.log("Total Menu Value: Rs.", calculateTotal());