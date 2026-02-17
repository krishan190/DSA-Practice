// sort array using sort and slice

let a = [1, 2, 3, 4, 5, 5]
const sort = a.slice().sort((a, b) => b - a);
console.log(sort);
console.log(a);
// [5, 5, 4, 3, 2, 1]
// [1, 2, 3, 4, 5, 5]

let arr = [1, 2, 3, 4, 5, 5]
const sort1 = arr.sort((a, b) => b - a);
console.log(sort1);
console.log(arr);

// [5, 5, 4, 3, 2, 1]
// [5, 5, 4, 3, 2, 1]

function secondLargest(arr) {
    let max = 0;
    let secondMax = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
let arr2 = [10, 30, 35, 90, 85]
secondLargest(arr2);