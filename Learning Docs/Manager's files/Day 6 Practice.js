const cities = ["Lahore" , "Multan" , "Islamabad" ] ;
cities.push("Karachi");
cities.push("Peshawar");
cities.forEach(city =>{
    console.log(cities)
});
const lCities = cities.filter(city => {
  return city.startsWith("L");
});

console.log("Cities with L:", lCities);

const upperCities = cities.map(city=>{
    return city.toUpperCase();
});
console.log(upperCities);

const iCities = cities.filter(city =>{
    return city.endsWith("i")
});
console.log("Cities Ending with i : " + iCities);
cities.pop("Multan");
console.log(cities);



const prices = [500 , 1200 , 450 , 780 , 740 ,900 ];
console .log(prices);


let total = 0;
prices.forEach(price =>{
    total += price;
})
console.log("Total Price : " , total);

const discountedPrices = prices.map(price => {
    return price * 0.85;
});
console.log ("Prices after discount" , discountedPrices);

const expensiveItems = prices.filter(price =>{
    return price > 1000;
});
console.log ("Items over Rs. 1000:", expensiveItems);


const students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Hassan", marks: 78 },
  { name: "Fatima", marks: 45 }
];


const names = students.map(student => {
  return student.name;
});
console.log("Names:", names);

const passed = students.filter(student => {
  return student.marks >= 50;
});
console.log("Passed:", passed);


const toppers = students
  .filter(student => student.marks > 80)
  .map(student => student.name);

console.log("Toppers:", toppers);
