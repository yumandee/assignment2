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
    for(let i = 0; i < length; i++) {
        if(this[i] === undefined) continue;
        if(!callbackFn(this[i], i, this)) return false;
    }
    return true;
};

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

