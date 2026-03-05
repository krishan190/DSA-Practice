function LongestUniqueStr(s) {
    let maxLength = 0;

    let set = new Set();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right])
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
}

console.log(LongestUniqueStr("abcabcb"));