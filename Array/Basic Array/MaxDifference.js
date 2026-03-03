function MaxDifference(arr) {
  let maxDiff = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      maxDiff = Math.max(maxDiff, arr[j] - arr[i]);
    }
  }
  return maxDiff;
}

console.log(MaxDifference([7, 1, 5, 3, 6, 4]));
