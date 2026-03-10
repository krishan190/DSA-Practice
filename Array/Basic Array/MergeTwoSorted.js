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

// leetcode problem without using extra space merge two sorter

var merge = function (nums1, m, nums2, n) {
  let idx = m + n - 1,
    i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[idx--] = nums1[i--];
    } else {
      nums1[idx--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[idx--] = nums2[j--];
  }
};
