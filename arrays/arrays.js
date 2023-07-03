// To find the Arrays of Refference Array
let arr = [ {id:10, name: "Junaid"}, {id:8, name: "Maruti"},{id:44, name: "Osama"}]
let check = arr.find(function(arr){
    return arr.name === "Maruti";
}, );
let check1 = arr.findIndex(function(arr){
    return arr.name === "Maruti";
}, );
console.log(check) 
console.log(check1) 