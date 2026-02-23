function isRev(str) {
    str = str.toLowerCase();
    let arr = str.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join("");
}

console.log(isRev("hello"));