function countCharacters(str) {
    const Counts = {};
    for (let char of str) {
        Counts[char] = (Counts[char] ?? 0) + 1;
    }
    return Counts;
}

const input = "hello world";
const output = countCharacters(input);
console.log(output);


// By using Map

const str = "JavaScript";
const charMap = new Map();

for (let char of str) {
  // Normalize the character to lowercase
  const lowerChar = char.toLowerCase(); 
  
  // Use the normalized character as the key
  charMap.set(lowerChar, (charMap.get(lowerChar) || 0) + 1);
}

console.log(Object.fromEntries(charMap)); 
// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }