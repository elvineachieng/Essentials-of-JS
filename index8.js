//company catalog
let items=[];
let item1={
    name: "book",
    model: "model1",
    cost: 123,
    quantity:500
}
let item2={
    name: "pencils",
    model: "model2",
    cost: 124,
    quantity:502
}
let item3={
    name: "pens",
    model: "model3",
    cost: 125,
    quantity:503
}
items.push(item1, item2, item3);
console.log(items);
console.log('Quantity of the third item:', items[2].quantity);