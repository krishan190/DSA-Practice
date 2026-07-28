//problem 136 Single Number

// input nums = [2,2,1] output = 1
// input nums = [4,1,2,1,2] output = 4

var singleNumber = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) return nums[i];
  }
};
