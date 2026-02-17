// ====== Products Array ======
let products = [
  { id: 1, name: "Shoes", price: 3000 },
  { id: 2, name: "Bag", price: 2000 }
];

// ====== Add Product ======
function addProduct(id, name, price) {
  products.push({ id: id, name: name, price: price });
  console.log("Product Added Successfully ✅");
}

// ====== Show All Products ======
function showProducts() {
  console.log("---- Product List ----");
  for (let i = 0; i < products.length; i++) {
    console.log(
      "ID: " + products[i].id +
      ", Name: " + products[i].name +
      ", Price: " + products[i].price
    );
  }
}

// ====== Search Product ======
function searchProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return "Product Not Found ❌";
}

// ====== Delete Product ======
function deleteProduct(id) {
  products = products.filter(function(product) {
    return product.id !== id;
  });
  console.log("Product Deleted (if existed) 🗑");
}

// ====== Update Product Price ======
function updateProduct(id, newPrice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].price = newPrice;
      console.log("Product Updated ✅");
      return;
    }
  }
  console.log("Product Not Found ❌");
}

// ====== Calculate Total Price ======
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  return total;
}

// ====== Testing All Functions ======

addProduct(3, "Watch", 5000);
showProducts();

console.log("Search Result:", searchProduct(2));

updateProduct(2, 2500);
showProducts();

deleteProduct(1);
showProducts();

console.log("Total Price of All Products:", calculateTotal());