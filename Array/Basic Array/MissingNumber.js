// Brute furce Approach

function MissingNumber(arr) {
  let n = arr.length + 1;

  for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] === j) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) return i;
  }
  return -1;
}

const arr = [1, 2, 4, 3];
console.log(MissingNumber(arr));

// optimize Approach

function MissingNumber(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return total - sum;
}

console.log(MissingNumber([1, 2, 4, 3]));
