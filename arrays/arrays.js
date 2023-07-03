// To find the Arrays of Refference Array
let arr = [
  { id: 10, name: "Junaid" },
  { id: 8, name: "Maruti" },
  { id: 44, name: "Osama" },
];
let check = arr.find(function (arr) {
  return arr.name === "Maruti";
});
let check1 = arr.findIndex(function (arr) {
  return arr.name === "Maruti";
});
console.log(check);
console.log(check1);

// Join Method
console.log(`Join Method`);
const numbers = [1, 2, 3];
// console.log(typeof(numbers))
const joined = numbers.join("_");
console.log(joined); //
console.log(typeof joined); //

// Split Method
console.log(`Split Method`);
const message = "Junaid Khan is a Software Developer";
const save = message.split(" ");
console.log(save); //
console.log(typeof save); //

// Sort Method
console.log(`Sort Method`);
let numbers1 = [4, 3, 2, 1];
numbers1.sort();
console.log(numbers1); //
console.log(typeof numbers1); //

// Reverse Method
numbers1 = [4, 3, 2, 1];
const savereverse = numbers1.reverse();
console.log(savereverse);

console.log(`Iteration Method`);
const iteration = [2, 3, 6, 7, 10];

// For in
for (let key in iteration) {
  console.log(key, iteration[key]);
}

// For of
for (let itrate of iteration) {
  console.log(itrate);
}

iteration.forEach((element, index) => {
  console.log("Index is " + index, (element += 1));
});

// Map
const checkmap = iteration.map((x) => {
  return x * 2;
});
console.log(checkmap);

// Exercise Print Full Name of of the user using Map
const user = [
  { firstname: "Junaid", lastname: "Khan", Age: 22 },
  { firstname: "Umar", lastname: "Shaikh", Age: 21 },
  { firstname: "Azhar", lastname: "Patel", Age: 20 },
  { firstname: "Mazin", lastname: "Kazi", Age: 19 },
];
// Map 
const output = user.map((user) => {
  return user.firstname + " " + user.lastname;
});
console.log(output);
console.log(typeof output);

// Reduce
const output1 = user.reduce((acc, curr) => {
  if (acc[curr.Age]) {
    acc[curr.Age] = ++acc[curr.Age];
  } else {
    acc[curr.Age] = 1;
  }
  return acc;
}, {});
console.log(output1);
console.log(typeof output1);

// Filter
const output3 = user.filter((x) => x.Age > 20).map((y) => y.firstname);

console.log(output3);
let numberDatta=[]
let maxNumber=20
while(maxNumber>0){
  numberDatta.push(maxNumber)
  maxNumber--
}

console.log('number', numberDatta)

const name ="Junaid Khan";
let ans = name.split(" ");
console