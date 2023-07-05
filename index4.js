// Finding elements using find() method
arr8=[2,6,7,8];
let findValue=arr8.find(function (e){return e == 6});
let findValue2=arr8.find (e=> e===10);
console.log(findValue, findValue2);
//will log 6 and undefined since arr8 doesnt have 10
//knowing what position an element is in an array indexOf methpd
arr8 = [2, 6, 7, 8];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
//will return 1 since index posion is 1 and then -1 since value 10 doesnt exidt in the array
arr8 = [2, 6, 7, 8];
let findIndex3 = arr8.indexOf(6,2);
console.log(findIndex3);
//will log -1 since 6 cannot be found starting from index 2
//last occurence can also be found using lastIndexOf() method
let animals = ("dog", "horse", "cat", "platypus", "dog");
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);
