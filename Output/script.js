"use strict";
console.log('hello');
console.log('I love Bangladesh');
// let playerName = 'Shakib al Hasan';
// playerName = '23';
let playerName;
playerName = 'Mashrafi';
playerName = 34;
console.log(playerName);
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 6));
let fruits = ['apple', 'banana', 78, true, {}];
fruits.push({
    name: 'sumi'
});
console.log(fruits);
// explicit:
let a;
// explicit kore deya hlo j a= string e hbe onno kisu na
let b;
b = 18;
a = 'sumi';
console.log(a, b);
// in case of array:
let c = [];
c.push('Rashed');
console.log(c);
//  explicit and union => union means ek kora
let d = [];
d.push(34, 'banana');
console.log(d);
// in case object:
// let e: object;
// e= {
//     name: 'sumi',
//         age:20
// }
let e;
e = {
    name: 'rashed',
    age: 23,
    adult: true
    // puro object complete na krle error dibe
};
console.log(e);
// dynamic type:
let f = [];
f = [56];
console.log(f);
let g;
g = {
    name: 'laiya',
    age: 'dd'
};
console.log(g);
// function:
let myFunc = (a, b, c) => {
    // c? = optional bujhay 
    console.log(a, b, c);
    return a + b;
};
myFunc('sumi', 'rashed', 'couple');
const userDetails = (id, user) => {
    console.log(` I have a user Details whom id:${id}, name:${user.name} and age:${user.age}`);
};
userDetails(1, { name: 'rashed', age: 23 });
const sayHello = (user) => {
    console.log(` I have a user Details whom  name:${user.name} and age:${user.age}`);
};
