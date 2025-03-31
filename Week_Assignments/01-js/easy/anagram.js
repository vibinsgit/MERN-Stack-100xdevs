/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
<<<<<<< HEAD
  
  if(str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.toLowerCase().split("").sort().join("");
  const sortedStr2 = str2.toLowerCase().split("").sort().join("");

  return sortedStr1 === sortedStr2;
=======

>>>>>>> 5e6692eeee59ae0bccd74088bc9d45af45fc76a4
}

module.exports = isAnagram;
