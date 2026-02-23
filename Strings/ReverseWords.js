let input = "krishan Namdev";
function reverseWords(input) {
    let words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    console.log("reversed", words);
    let reversed = words.join("");
    return reversed;
}
let output = reverseWords(input);
console.log(output);