//Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.

var string = ["word", "dog", "stuff", "things", "wrong"];

string.sort(function(a, b) {
    return a.length - b.length;
});
string[string.length - 1];

//Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

var objects = [
    {
        name : "Tony",
        email : "Tony@gmail.com"
    },
    {
        name : "Sam",
        email : "Sammy@yahoo.com"
    },
    {
        name : "Jenny",
        email : "JenniferTom@gmail.com"
    }
    ];
    
var Longnames = objects.sort(function(a,b){
    return a.name.length - b.name.length; 
})

console.log(Longnames);

var Longemails = objects.sort(function(a, b) {
    if(a.email < b.email) return -1;
    if(a.email > b.email) return 1;
    return 0;
})
console.log(Longemails);

//Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function with map on an array of numbers to check the result.
var numbers = [2, 4, 6, 8];
var roots = numbers.map(function(x){
   return x * x;
});
console.log(roots);

//Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property. Then, use this function with map on an array of objects each containing a “num” property.
var number = [
    {num : 12 },
    {num : 34 },
    {num : 23 },
    {num : 67}
    ]
var root = number.map(function(x){
    x.num = x.num * x.num ;
    return x; 
});

console.log(root);

//In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …) and returned the result of the operation on the two numbers. 
function operationMaker (str){
    switch (str){
    case 'add':
        return function(x , y){
        return x + y 
        };
    break; 
    case 'subtract':
        return function(x , y){
         return x - y 
        };
    break;
    case 'mult':
        return function(x , y){
        return x * y     
        };
    break; 
    case 'div':
        return function (x , y){
        return   x / y 
        };
    break;
    default : "The code doesn't work"; 
}}
  var adder = operationMaker('add');
  var sum = adder(2,6); 
  var subtract = operationMaker('subtract');
  var difference = subtract(3,10);
  var mult = operationMaker('mult');
  var mutiply = mult(2,7);
  var divide = operationMaker('div');
  var division = divide (3,5)

console.log(sum);
console.log(difference);
console.log(mutiply);
console.log(division);
