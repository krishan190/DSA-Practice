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


// By bitwise XOR 

// for the same value it gives 0
// for different value it gives 1


var singleNumber = function (nums) {
    let xor = 0;
    for(let i=0;i<nums.length;i++){
        xor=xor^nums[i]
    }
    return xor;
};
