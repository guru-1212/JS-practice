//------- Write a JavaScript program to find the largest element in a nested array. 

var arr = [[3,4,2,54,2,5,2,4,5,6,3,3]];
var nestedArr = arr[0]
function NesterArr(nestedArr){
  var sortedArr =   nestedArr.sort((a,b)=>{
        return a - b;
    })
    console.log(`Sorter array is = ${sortedArr} and Highest value is ${sortedArr[sortedArr.length-1]}`)
}
NesterArr(nestedArr)
