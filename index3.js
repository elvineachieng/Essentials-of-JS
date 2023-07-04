//Deleting elemets 
//pop() is used to delete the last element
let arr8=[1, 2, 3, 4, 5, 6, 7, 8, 9];
arr8.pop();
console.log(arr8);
//shift() is used to delete the first element. It causes all other indices to be reduced by one
arr8.shift();
console.log(arr8);
//splice can also be used to delet elements
arr8.splice(1,3);
console.log(arr8);