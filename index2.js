favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log(favoriteFruits);
//splice() method for adding an element at a certain index
let arrOfShapes = ["circle","triangle","rectangle","pentagon"];
arrOfShapes.splice(2,0, "square","trapezoid");
console.log(arrOfShapes);
arrOfShapes.splice(2,2, "square","trapezoid")//we start inserting from index 2 and second parameter 2 is the  umber of elements we delete  starting from our previously define starting index
console.log(arrOfShapes);
//adding an array to an array using concat() method
let arr5=[1, 2, 3];
let arr6=[4, 5, 6];
let arr7=arr5.concat(arr6);
console.log(arr7);
//concat() method can also add values as well
let arr8=arr7.concat(7, 8, 9);
console.log(arr8);