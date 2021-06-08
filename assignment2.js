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
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

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

// const isEven = (number) => console.log(number % 2 === 0);
// let temp0 = [1, 2, 3, 4];
// console.log("forEach:");
// temp0.forEach(isEven);
// console.log("myEach:");
// temp0.myEach(isEven);


// console.log("push:");
// let temp1 = [1, 2, 3, 4];
// temp1.push(5, 6, 7, 8);
// console.log(temp1);

// console.log("myPush:");
// let temp2 = [1, 2, 3, 4];
// temp2.myPush(5, 6, 7, 8);
// console.log(temp2);

