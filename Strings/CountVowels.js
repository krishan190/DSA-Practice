const str = "The happiest place in earth";
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
    let count = 0;
    str.toLowerCase().split("").forEach(char => {
        vowels.includes(char) ? count++ : null
    });
    return count;
}

console.log(countVowels(str));

// we use below instead of var we use let it gives reference error or also we use IIFE function also

function show() {
    {
        var a = 10;
        var b = 20;
    }
    console.log(`A: ${a},B:${b}`);
}

show();