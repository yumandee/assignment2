/*
Practical Web Dev CSci 39548
Assignment 2 
Modified by Mandy Yu
*/

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        else arr[i] = callbackFn(this[i], i, this);
    }
    return arr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i, this)) arr.push(this[i]);   
    }
    return arr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i, this)) return true;
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;

    for(let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }

    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

/*
TESTING
*/
//myEach
// const isEven = (number) => console.log(number % 2 === 0);
// let temp0 = [1, 2, 3, 4];
// console.log("forEach:");
// temp0.forEach(isEven);
// console.log("myEach:");
// temp0.myEach(isEven);

//myPush 
// console.log("push:");
// let temp1 = [1, 2, 3, 4];
// temp1.push(5, 6, 7, 8);
// console.log(temp1);

// console.log("myPush:");
// let temp2 = [1, 2, 3, 4];
// temp2.myPush(5, 6, 7, 8);
// console.log(temp2);

//myMap
// console.log("map:");
// let numbers = [1, 4, , 16];
// let doubles = numbers.map(x => x * x);
// console.log(numbers);
// console.log(doubles);

// let doubles2 = numbers.myMap(x => x * x);
// console.log("myMap: \n", doubles2);

//myFilter
console.log("filter:");
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

console.log("myFilter:");
const myResult = words.myFilter(word => word.length > 6);
console.log(myResult);

//mySome
console.log("some:");
let arr = [1, 3, 5, ];
let even = (element) => element % 2 === 0;
console.log(arr.some(even));

console.log("mySome:");
console.log(arr.mySome(even));
