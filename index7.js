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
//Combining objects and arrays
//objects in objects
let company = { companyName: "Healthy Candy",
 activity: "food manufacturing",
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };
 company.address.zipcode = "33117";
 company["address"]["number"] = "100";
 console.log(company.address.number);
 //arrays in objects
 company = { companyName: "Healthy Candy",
 activities: ["food manufacturing", 
"improving kids' health", "manufacturing toys"],
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
 },
 yearOfEstablishment: 2021
 };
 let activity = company.activities[1]
 console.log(activity);
 //objects in arrays
 let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }];
let streetName = addresses[0].street;
console.log(streetName);
 //objects in arrays in objects
company = { companyName: "Healthy Candy",
          activities: [ "food manufacturing","improving kids' health","manufacturing toys"],
 address: [{
 street: "2nd street",
 number: "123",
 zipcode: "33116",
city: "Miami",
 state: "Florida"
 },
 {
 street: "1st West avenue",
 number: "5",
 zipcode: "75001",
city: "Addison",
state: "Texas"
 }],
 yearOfEstablishment: 2021
 };
let streetName1 = company.address[0].street;
console.log(streetName1);
//practsie exercise
let people = {
    friends: []
};

let friend1 = {
    firstName: "Achie",
    lastName: "Adede",
    idValue: "39076193"
};

let friend2 = {
    firstName: "Emma",
    lastName: "Adero",
    idValue: "39076194"
};

let friend3 = {
    firstName: "Emman",
    lastName: "Peshi",
    idValue: "39076195"
};

people.friends.push(friend1, friend2, friend3);
console.log(people);








