/* Write a function that returns a new array containing 
only the even numbers.*/
let arr1 = [12, 45, 11, 90, 30, 11];
function evenfunction(arr) {
  let check = arr.filter((x) => x % 2 == 0);
  return check;
}
console.log("Even Numbers are ", evenfunction(arr1));

/*Write a function that takes an array of strings as 
input and returns a new array containing the lengths of those strings.*/
let arr2 = ["Junaid", "Maruti", "Ahmed", "Osama"];
function strlength(arr) {
  let check = arr.map((x) => x.length);
  return check;
}
console.log(" Length of String in Array ", strlength(arr2));

/* Write a function that takes an array of objects representing 
students and returns the average score of all the students. Each 
student object has a name property and a score property. */

let arr3 = [
  { name: "Junaid", score: 30 },
  { name: "Maruti", score: 80 },
  { name: "Ahmed", score: 60 },
  { name: "Osama", score: 50 },
];
function scoreAvg(arr) {
  let check = arr.reduce((acc, curr) => {
    acc += curr.score / 4;

    return acc;
  }, 0);

  return check;
}
console.log("Avg Score of all students is ", scoreAvg(arr3));

/** Write a function that returns the sum of the squares of 
 each numbers. */
let arr4 = [2, 4, 6, 8, 10];
function squarefunction(arr) {
  let check = arr.map((x) => x * x);
  return check;
}
console.log("Squre of each numbers in array ", squarefunction(arr4));

/* Write a function that returns an array of book titles that have a rating higher than 4.
 Each book object has a title property and a rating property. */
let arr5 = [
  { title: "Rich Dad Poor Dad", rating: 5 },
  { title: "The Psychology of Money", rating: 4 },
  { title: "Eat that Frog", rating: 5 },
  { title: "Atomic Habits", rating: 4 },
];
function bookrating(arr) {
  let check = arr.filter((x) => x.rating > 4).map((x) => x.title);
  return check;
}
console.log("Book Rating Greater then 4", bookrating(arr5));

/* Write a function that returns the concatenation of all the strings 
with a space between each word. */
const arr6 = ["Junaid", "Khan"];
function concatenation(arr) {
  return arr.join(" ");
}
console.log(concatenation(arr6));

/* Write a function that returns the total price of all the products. Each product object has 
a name property and a price property. */
const arr7 = [
  { name: "Pen", price: 40 },
  { name: "Pencil", price: 15 },
  { name: "Books", price: 80 },
  { name: "Laptop", price: 30000 },
]

function totalprice(arr){
  let check = arr.reduce(function(total, arr){
    total += arr.price;  
    return total
  }, 0)
  return check; 
}
console.log(totalprice(arr7));

/*Write a function that returns the product of all the negative numbers. */
const arr8 = [12,-22,56,-29, 40];
function product(arr){
  return arr.reduce((producttotal, arr)=>{
    if (arr<0){
      producttotal *=arr; 
    }
    return producttotal;
  }, 1)
}
console.log(product(arr8));

/*Write a function that returns a new array containing only the strings 
that have more than 5 characters. */
const arr9= ["Junaid" , "Osama", "Ahmed" , "Maruti"]; 
function fivechr(arr){
  return arr.filter((ar)=>{
    if (ar.length > 5){
      return ar; 
    }
  }
  )
}
console.log(fivechr(arr9))

/*Write a function that takes an array of objects representing employees 
and returns an array of employee names whose salary is above $50,000. 
Each employee object has a name property and a salary property. */

const arr10 = [
  {name:"Junaid Khan" ,salary: 20000 },
  {name: "Maruti",salary: 50000},
  {name: "Osama",salary: 25000 },
  {name: "Hassan",salary: 30000 },
]