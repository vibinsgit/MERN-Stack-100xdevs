/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let cleanStr1 = str1.toLowerCase().split('').sort();
  let cleanStr2 = str2.toLowerCase().split('').sort();
  let state = true;
  if(str1.length === str2.length){;
    for(let i = 0; i < str1.length; i++){
      if(cleanStr1[i] != cleanStr2[i]){
        state = false;
      }
      else{
        state = true;
      }
    }
  }
  else{
    state = false;
  }
  return state;
}

module.exports = isAnagram;
