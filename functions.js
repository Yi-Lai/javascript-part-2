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