var str = "If you want to declare the name of the internal array directly within the outer array, you can modify your code like this";
var NewStr = str.split(' ').map((words)=>{
    return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
}).join(' ')

console.log(NewStr)