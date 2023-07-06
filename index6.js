let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);
//i dont know why this code isnt running in the console
let arrArrays = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
///accesing elements of an inner array
let value1 = arrArrays[0][1];//the statement grabs the first array and from this array it picks the second value
console.log(value1);