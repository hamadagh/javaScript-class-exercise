# Functions Exercises 

## Callback 

1. With the snippet of code below, create a function called "each" which accepts two parameters: an array and a callback function. The "each" function should loop over the array passed to it and run the callback function on each element in it. 

```javascript
// this function should accept 2 parameters, put them in!
function each(){
    // put your code inside here!
}

each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

each([1,2,3,4], function(val){
    console.log(val/2);
});
```

2. Create a function called "map" which accepts two parameters: an array and a callback. The "map" function should return a new array with the result of each value being passed to the callback function. 

* Example:
```javascript
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]
```

3. Create a function called "filter" which accepts two parameters an array and a callback. The function should return a new array with all of the values that return false for the callback. 

* Examples:
```javascript
filter([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

filter([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]
```
