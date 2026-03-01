// let arr = [1, 1, 2, 2, 3, 4, 4];

let uniqueNums = [...new Set(arr)];
console.log(uniqueNums); //[1,2,3,4];

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));

const arr = [1, 2, 3, 4, 1, 2];
const b = [];

for (let i = 0; i < arr.length; i++) {
  if (b.indexOf(arr[i]) == -1) {
    b.push(arr[i]);
  }
}
console.log("Removed array value", b);

// second method

const arr1 = [1, 2, 3, 4, 1, 2];
const b1 = [];

arr1.filter((dup) => {
  if (b1.indexOf(arr1[dup] == -1)) {
    b1.push(arr1[dup]);
  }
});

console.log("Removed Array value", b1);
