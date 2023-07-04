favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
console.log(favoriteFruits);
//splice() method for adding an element at a certain index
let arrOfShapes = ["circle","triangle","rectangle","pentagon"];
arrOfShapes.splice(2,0, "square","trapezoid");
console.log(arrOfShapes);
arrOfShapes.splice(2,2, "square","trapezoid")//we start inserting from index 2 and second parameter 2 is the  umber of elements we delete  starting from our previously define starting index
console.log(arrOfShapes);
