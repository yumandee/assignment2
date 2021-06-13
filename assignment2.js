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
Array.prototype.myEvery = function(callbackFn) {
    let length = this.length;
    for(let i = 0; i <length; i++) {
        if(this[i] === undefined) continue;
        if(!callbackFn(this[i], i, this)) return false;
    }
    return true;
};

// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.myEvery( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2
})

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.myEvery( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3
// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.myEvery( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
    let accumulator = 0;
    if(initialValue !== undefined)
        accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) continue;
        accumulator = callbackFn(accumulator, this[i], i, this);
    }
    return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {
    for(let i = fromIndex; i < this.length; i++) {
        if(this[i] === undefined) continue;
        if(Object.is(this[i], searchElement)) return true;
        if(this[i] === searchElement) return true;
        
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    if(fromIndex < 0) fromIndex = this.length + fromIndex;

    for(let i = fromIndex; i < this.length; i++) {
        if(this[i] === undefined) continue;
        // console.log("is", this[i], "equal to", searchElement, "y/n:", Object.is(this[i], searchElement))
        if(Object.is(this[i], searchElement)) return i;
    }

    return -1;
    
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
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length - 1) {
    if(fromIndex < 0) fromIndex = this.length + fromIndex;

    for(let i = fromIndex; i >= 0; i--) {
        if(this[i] === undefined) continue;
        if(this[i] === searchElement) return i;
    }
    return -1;
};

// KEYS //
Object.grabKeys = function(obj) {
    let arr = [];
    let entries = Object.entries(obj);   
    for(let i = 0; i < entries.length; i++)
        arr.push(entries[i][0])    
    
    return arr;
};

// VALUES //
Object.grabValues = function(obj) {
    let arr = [];
    let entries = Object.entries(obj);
    for(let i  = 0; i < entries.length; i++) arr.push(entries[i][1]);
    return arr;
    
};

