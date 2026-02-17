let str = "My name is Krishan Namdev";

let result = str.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
})

console.log("result", result);


// 

let words = str.split(" ");
let longest = words[0];

for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log("longest word", longest);
