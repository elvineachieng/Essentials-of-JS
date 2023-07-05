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
