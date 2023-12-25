// ---- Write a JavaScript program to reverse a given string. ----
function reverseStr(name){
    console.log(name.split('').reverse().join(''))
}
var Name = "Gurunath"
reverseStr(Name)


// --- Using for Loop ----->

var str = "Pratik";
var reversedchar=''
for(i=str.length-1; i>=0; i--){
    reversedchar = reversedchar + str[i]
}
console.log(reversedchar)