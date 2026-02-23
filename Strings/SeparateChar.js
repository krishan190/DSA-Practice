const arr2 = ['a', 1, 'b', 2, 'c', 3]
let num = [];
let str = [];
for (let i = 0; i < arr2.length; i++) {
    if (typeof (arr2[i]) === "string") {
        str.push(arr2[i]);
    } else {
        num.push(arr2[i]);
    }
}
console.log(num)
console.log(str)