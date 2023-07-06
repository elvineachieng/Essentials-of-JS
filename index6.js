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
let value2 = arrOfArrays[2][2];
console.log(value2);
let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);
//practise exercise
let arrays =[1, 2, 3];
let arrays1 = [arrays, arrays,arrays];
console.log(arrays1);
let values3 = arrays1[0][1];
console.log(values3);