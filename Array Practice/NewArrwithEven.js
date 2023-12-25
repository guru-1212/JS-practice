//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// --- Uisng Map method ----- >
var evenArr = []
function arr(NewArr){
    NewArr.map((num)=>{
      if(num % 2 === 0){
        evenArr.push(num)
      }
    })
}
var array = [1,2,3,4,5,6,7,8]
arr(array)
console.log(`[${evenArr}] - Here is the even modified array`)


//------ Using filter method------------>
var array2 = [1,2,3,4,5,6,7,8];
var evenArray = array2.filter((num)=>{
    return num % 2 === 0
}
)
console.log(evenArray)