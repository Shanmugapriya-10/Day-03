//1. How to compare two JSON have the same properities without order?

const _ = require('lodash');
let obj1 = {name: "Person", age: 5}
let obj2 = {age: 5, name: "Person"}

console.log(_.isEqual(obj1, obj2));

//Output: "True"

//If we want to compare with order then we can use like below.

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));

//Output: "False"