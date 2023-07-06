//objects in javascript
let arr = [0, 1, 2];
console.log(typeof arr);
//output is object
//objects are used to group multiple objects
let dog = { dogName: "Swanky", 
 weight: 2.4, 
 color: "brown", 
 breed: "chihuahua", 
 age: 3, 
 burglarBiter: true
 };
 console.log(dog);
 let dogColor1 = dog ["color"];
 console.log(dogColor1)
 //another method of accessing properties of an object
 let dogColor2 = dog.color;
 console.log(dogColor2);
 //Updating Objects.Changing values of properties of objects
 dog["color"]="blue";
 dog.weight=2.3;
 console.log(dog);
 //practise exercise
 let myCar = {
    model: "Toyota",
    make : "Corolla",
    color : "blue",
    milage : 210,
    new : true
 }
 let myCar1 = myCar["color"];
 myCar["color"] = "black";
 console.log(myCar);
 myCar1 = myCar["milage"];
 myCar["milage"] = 320;
 console.log(myCar);
 console.log(myCar.make, myCar.model);
 console.log(myCar.milage);

