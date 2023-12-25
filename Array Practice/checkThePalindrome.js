// -- Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). -->
function isPalindrome(name) {
  if ((name.toLowerCase() === name.toLowerCase().split("").reverse().join("")) === true) {
    console.log(name + "   " + " Name is Palindrome");
  }
  else{
    console.log("not a palindrome")
  }
}
// console.log(isPalindrome("naman"));
isPalindrome("namaN");

// ----- End -------

const checkPalindrome = (param) => {
    var param1 = param.toLowerCase().split('');
    var param2 = param.toLowerCase().split('').reverse();
    
    let isPalindrome = true;
  
    for (i = 0; i < param1.length; i++) {
      if (param1[i] !== param2[i]) {
        isPalindrome = false;
        break;
      }
    }
  
    if (isPalindrome) {
      console.log("Given name is a palindrome");
    } else {
      console.log("Not a palindrome");
    }
  }
  
  checkPalindrome("NamaN");
  
