//Create a function that can be used with sort. This function should take two strings, and return a value that sort can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.

var string = ["word", "dog", "stuff", "things", "wrong"];

string.sort(function(a, b) {
    return a.length - b.length;
});
return string[string.length - 1];

