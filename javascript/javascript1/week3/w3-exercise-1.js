const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
names.shift("Peter");
names.shift("Ahmad");
names.unshift("Peter");
// Code done

console.log(names);
// ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



// second way :
 
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
  
 function deleteName(name){
 for (let i = 0; i< names.length; i++ ){
     if (names[i] == name){
         names.splice(i,1)
          return names
     }
 }
 }
 
 console.log(deleteName('Ahmad'))
 


