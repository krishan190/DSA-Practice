//input=[2,7,11,15]
//Target=18

// return indexes [1,2]

let nums = [2, 7, 11, 15]
let target = 18;

let map = {};

for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    console.log("diff", diff);
    if (map[diff] !== undefined) {
        console.log("index is", [map[diff], i]);
    }
    map[nums[i]] = i;
}