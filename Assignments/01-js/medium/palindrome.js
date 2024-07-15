/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  function removePuncitation(str){
    return str.replace(/[.,/:;'"{}|=-_()*&^%$#!]/g, '');
  }
  let newStr = removePuncitation(str).trim().toLowerCase();
  let start = 0;
  let end = newStr.length - 1;
  while(start < end){
    if(newStr[start] != newStr[end]){
      return false;
    }
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;
