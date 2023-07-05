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
//Sorting in arrays from s,all to high and trings A-Z
let names =["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names)
//sorting umbers in acsending order
let ages = [18,72,33,56,40];
ages.sort();
console.log(ages);
//Reversing elements in an array using reverse() method
let name =["James", "Alicia", "Fatiha", "Maria", "Bert"];
name.reverse();
console.log(name );
//practices exercise
let items=["Milk", "Bread", "Apples"];
items.splice(1,2, "Bananas","Eggs");
console.log(items);
items.pop();
console.log(items);
items.sort();
console.log(items);
//Find and output the index value of "Milk"
let list=["Bananas","Milk"]
let findIndexx = list.findIndex(item => item === "Milk")
console.log(findIndexx,list);
let fruits=["Bananas","Milk"];
//Add "Carrots" and "Lettuce" after "Bananas"
fruits.splice(1, 0, "Carrots", "Lettuce");
console.log(fruits);
let shoppingList=["Juice","Pop"];
let shoppingList1=["Juice","Pop"];
let shoppingList2=fruits.concat(shoppingList).concat(shoppingList1);
console.log(shoppingList2);
//['Bananas', 'Carrots', 'Lettuce', 'Milk', 'Juice', 'Pop', 'Juice', 'Pop']
//Get the last index value of Pop and output it to the console
let shoppingList3=["Bananas","Carrots","Lettuce","Milk","Juice","Pop","Juice", "Pop"]
let popIndex=shoppingList.indexOf("Pop");
console.log(popIndex,shoppingList3);














