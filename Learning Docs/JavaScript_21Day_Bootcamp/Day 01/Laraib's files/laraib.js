let name = "Laraib";
let age = 17;
let city = "Lahore";
let course = "Web Development";

console.log("%c=== PERSONAL INFO CARD ===", "color: purple; font-size: 20px; font-weight: bold;");

console.log("Name  : " + name);
console.log("Age   : " + age);
console.log("City  : " + city);
console.log("Course: " + course);

console.log("--------------------------------");

if (age >= 18) {
  console.log("Status: Adult");
} else {
  console.log("Status: Minor");
}