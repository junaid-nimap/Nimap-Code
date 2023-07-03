// Question: Create an object called "person" with properties for name, age, and occupation. 
// Then, write a function called "introduce" that takes the person object as an argument and 
// returns a string introducing the person with their name, age, and occupation.

let person = {name: "Junaid", age:21 , occupation: "Software Developer"}; 
function introduce(personfn){
    let introduction = "Hi My name is " + personfn.name + " and My age is " + personfn.age +
    " years old And I work as a " + personfn.occupation  ; 
    console.log(introduction)
}
introduce(person); 



