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
    for(let i = 0; i < this.length; i++) {
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
// console.log("filter:");
// let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// console.log("myFilter:");
// const myResult = words.myFilter(word => word.length > 6);
// console.log(myResult);

//mySome
// console.log("some:");
// let arr = [1, 3, 5, ];
// let even = (element) => element % 2 === 0;
// console.log(arr.some(even));

// console.log("mySome:");
// console.log(arr.mySome(even));

//myEvery
// let isBelowThreshold = (currentValue) => currentValue < 40;
// let array1 = [1, 30, 39, 29, 10, 13, 40];
// console.log("every:", array1.every(isBelowThreshold));

// console.log("myEvery:", array1.myEvery(isBelowThreshold));

//myReduce
// let array1 = [1, 2, 3, 4];
// let reducer = (x, y) => x + y;
// console.log("reduce:");
// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));

// console.log("reducer: ");
// console.log(array1.myReduce(reducer));
// console.log(array1.myReduce(reducer, 5));

//myIncludes
// console.log("includes: ")
// console.log([1, 2, 3].includes(2))
// console.log([1, 2, 3].includes(4))
// console.log([1, 2, 3].includes(3, 3))
// console.log([1, 2, 3].includes(3, -1))
// console.log([1, 2, NaN].includes(NaN))
// console.log([-0].includes(0))

// console.log("myIncludes: ")
// console.log([1, 2, 3].myIncludes(2))
// console.log([1, 2, 3].myIncludes(4))
// console.log([1, 2, 3].myIncludes(3, 3))
// console.log([1, 2, 3].myIncludes(3, -1))
// console.log([1, 2, NaN].myIncludes(NaN))
// console.log([-0].myIncludes(0))


//myIndexOf
// let array = [2, 9, 9];
// console.log("indexOf: ")

// console.log(array.indexOf(2))
// console.log(array.indexOf(7))
// console.log(array.indexOf(9, 2))
// console.log(array.indexOf(2, -1))
// console.log(array.indexOf(2, -3))

// console.log("myIndexOf: ")

// console.log(array.myIndexOf(2))
// console.log(array.myIndexOf(7))
// console.log(array.myIndexOf(9, 2))
// console.log(array.myIndexOf(2, -1))
// console.log(array.myIndexOf(2, -3))

//myLastIndexOf
// var numbers = [2, 5, 9, 2];
// console.log("lastIndexOf:")
// console.log(numbers.lastIndexOf(2));     // 3
// console.log(numbers.lastIndexOf(7));     // -1
// console.log(numbers.lastIndexOf(2, 3));  // 3
// console.log(numbers.lastIndexOf(2, 2));  // 0
// console.log(numbers.lastIndexOf(2, -2)); // 0
// console.log(numbers.lastIndexOf(2, -1)); // 3

// console.log("myLastIndexOf:")
// console.log(numbers.myLastIndexOf(2));     // 3
// console.log(numbers.myLastIndexOf(7));     // -1
// console.log(numbers.myLastIndexOf(2, 3));  // 3
// console.log(numbers.myLastIndexOf(2, 2));  // 0
// console.log(numbers.myLastIndexOf(2, -2)); // 0
// console.log(numbers.myLastIndexOf(2, -1)); // 3

//grabKeys
// console.log("keys: ")
// let arr1 = ['a','b','c'];
// let obj = {0: 'a', 1: 'b', 2: 'c'};
// let anObj  = {100: 'a', 2: 'b', 7: 'c'};
// // getFoo is a property which isn't enumerable
// const myObj = Object.create({}, {
//     getFoo: {
//       value: function () { return this.foo; }
//     }
//   });
//   myObj.foo = 1;
// console.log(Object.keys(myObj)); // console: ['foo']
// console.log(Object.keys(arr1))
// console.log(Object.keys(obj))
// console.log(Object.keys(anObj))

// console.log("grabKeys:")
// console.log(Object.grabKeys(myObj)); // console: ['foo']
// console.log(Object.grabKeys(arr1))
// console.log(Object.grabKeys(obj))
// console.log(Object.grabKeys(anObj))

//grabValues
console.log("values: ")
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']

console.log("grabValues: ")
console.log(Object.grabValues(obj));
console.log(Object.grabValues(arrayLikeObj1 )); // ['a', 'b', 'c']
console.log(Object.grabValues(arrayLikeObj2 )); // ['b', 'c', 'a']
console.log(Object.grabValues(my_obj)); // ['bar']
console.log(Object.grabValues('foo')); // ['f', 'o', 'o']


