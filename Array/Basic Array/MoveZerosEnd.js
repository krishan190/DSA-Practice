// bruteForce Approach

/*✅ Logic

Create a new array
Traverse original array
Push all non-zero elements
Count number of zeros
Add those many zeros at end */

function moveAllZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount += 1;
    } else {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveAllZeros([0, 1, 0, 3, 12])); //[1,3,12,0,0]
