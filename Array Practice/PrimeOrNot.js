// ------- Write a JavaScript function to check if a given number is prime.  ------->
var a = [1,2,3,4,5,6,7,8,9];
for (i=0; i<=a.length-1;i++){
    isPrime = true
    for(j=0; j<= Math.sqrt(a[i]) ; j++){
       if(a[i] % j === 0){
        isPrime=  false
        break
       }
      
    }
    console.log(`${a[i]} is prime: ${isPrime}`);
}