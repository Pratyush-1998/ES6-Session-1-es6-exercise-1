// Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

let arr=[3,62,234,7,23,74,23,76,92];

var s =(x)=>{
    return x>70;
}

let output=arr.filter(s);
console.log(output);



