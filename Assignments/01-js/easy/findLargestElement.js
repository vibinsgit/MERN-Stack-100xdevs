/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let bigNumber = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        if(bigNumber < numbers[i]){
            bigNumber = numbers[i];
        }
    }
    return bigNumber;
}

module.exports = findLargestElement;