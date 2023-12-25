// --- Using Math. max method ------ >
var array = [1,2,3,4,5,6,7,7,5,4,3,2,4,56,7,8];
var b = Math.max(...array);
console.log(b);


// --- Using for loop ------>
var array2 = [1,2,3,4,5,6,7,7,5,4,3,2,4,56,7,8];
var answer = array2[0]; // --- Here getting the index 0 value that is 1
for(i=1; i<array2.length;i++){
    if(array2[i] > answer){
        answer=array2[i]  // -- Here what we are doing is array2[i] initially value is 2. And we wrote the condition that is if the 2 is greater than array2[0] then we are assigning the value to the answer variable. and lastly we are getting the max number.
        console.log( `${[i]} -  ${answer}`);
    }
}
console.log(answer);

// ---- Using above for loop we can set the data in low to high ------- >

var array3 = [1,2,3,4,5,6,7,7,5,4,3,2,4,56,7,8];
var answer3 = array3[0];
var newArray = []
for(i = 1 ; i < array3.length ; i++){ // --- here we are starting the value of i is 1 bcz we have to comare the initial value and next value then only lastly we will get the max number.
    if( array3[i] > answer3){
        answer3 = array3[i]
        newArray.push(answer3)
    }
}
console.log("new array = " + newArray);


// --- Arrange the above array in hight to Low -------->

 var a4 = [1,2,3,4,5,6,7,7,5,4,3,2,4,56,7,8];
 a4.sort((a,b)=>{
    return(
      b - a 
    )
 })
 console.log( 'sort hight to low ' + a4)

// --- Arrange the above array in low to High -------->

 var a4 = [1,2,3,4,5,6,7,7,5,4,3,2,4,56,7,8];
 a4.sort((a,b)=>{
    return(
      a - b
    )
 })
 console.log( 'sort Low to High ' + a4)

 // --- By using sort i can get the highest num and lowest number--->
 var a5 = [1,2,3,4,5,6,7,7,5,4,3,2,4,56,7,8];
 a5.sort((a,b)=>{
    return(
        a - b
    )
 })
 console.log(`Highest number  -- > ${a5[a5.length - 1]}`)
 console.log(`Lowest number  -- > ${a5[0]}`)

 





