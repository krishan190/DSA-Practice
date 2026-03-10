// Algo
/*
1️⃣ Create an empty result array
    use two pointers i and j
    Compare elements
    push smaller elements
    move pointer
    Add remaining elements
*/

function mergeSorted(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  return result.concat(arr1.slice(i).concat(arr2.slice(j)));
}

console.log(mergeSorted([1, 2, 3], [2, 5, 6]));
