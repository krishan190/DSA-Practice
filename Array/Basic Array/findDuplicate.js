let arr = [1, 2, 3, 2, 1, 4];


let result = arr.filter((value, index, array) => {
    return array.indexOf(value) !== index;
})
console.log(result);//[1,2]

// | index | value | array.indexOf(value) | comparison (`!== index`) | included? |
// | ----: | ----: | -------------------: | -----------------------: | --------: |
// |     0 |     1 |                    0 |      `0 !== 0` → ❌ false |      ❌ No |
// |     1 |     2 |                    1 |      `1 !== 1` → ❌ false |      ❌ No |
// |     2 |     3 |                    2 |      `2 !== 2` → ❌ false |      ❌ No |
// |     3 |     2 |                    1 |       `1 !== 3` → ✅ true |     ✅ Yes |
// |     4 |     1 |                    0 |       `0 !== 4` → ✅ true |     ✅ Yes |
// |     5 |     4 |                    5 |      `5 !== 5` → ❌ false |      ❌ No |
