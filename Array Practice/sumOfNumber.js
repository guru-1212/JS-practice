// ----- getting the sum of numbers which are present in array ------>

var a = [1,2,3,4,5,6,7,5,3,4,65,4,3,5,6,3,5,6]
//  -- Using for loop -->
var ans1 = 0
for( i = 0; i <= a.length - 1 ;  i++){
    ans1 = ans1 + a[i];
}
console.log(`the sum of given number is - ${ans1}`);
// ---- End ---->


// ----- getting the sum of numbers which are present in string ------>

var a2 = '1438237492834723';
var a2ConvertintoArr = a2.split(''); // -- By using the split method we can convert the sting into the array
var a3 = 0
var a4 = 0

console.log(typeof(a2ConvertintoArr)) // -- Here i am getting ans Object i shocked but when i asked to google why i am getting the object the ans is - When you use typeof with an array, it will return 'object', not 'array'. This behavior is consistent with the fact that arrays are a type of object in JavaScript.
console.log(Array.isArray(a2ConvertintoArr))// -- output is True

for(i = 0 ;  i <= a2ConvertintoArr.length -1 ; i++){
    a3 = a3 + a2ConvertintoArr[i] // ------- output is 01438237492834723
    a4 = a4 + Number(a2ConvertintoArr[i]) //------ output is 70
}
console.log(    `Sum of the numbers - ${a3}`)
console.log(    `Sum of the numbers - ${a4}`)

// --- End ---->

// ---- Sum of the numbers Using reduce --->

var a5 = [2,3,213,324,32,12,213,2];
var ansa5 = a5.reduce((a,b)=>{        // -- Here a stands for current vlaue and b is for next value --- 
    return a + b
})
console.log('Sum of numbers = >' + ansa5)