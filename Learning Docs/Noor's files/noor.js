// ===== Personal Info Card =====

// Variables (data store karne ke liye)
let name = "Noor";
let age = 19;
let city = "Lahore";
let course = "Web Development";

// Title colorful
console.log("%c=== PERSONAL INFO CARD ===", "color: purple; font-size: 20px; font-weight: bold;");

// Output
console.log("Name  : " + name);
console.log("Age   : " + age);
console.log("City  : " + city);
console.log("Course: " + course);

// Extra line
console.log("--------------------------------");

// Small conditional (kal ke topic ki practice 😉)
if (age >= 18) {
  console.log("Status: Adult");
} else {
  console.log("Status: Minor");
}