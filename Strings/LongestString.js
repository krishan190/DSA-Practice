// best approach to find Longest words

function findLongestWord(sentence){
    let wordsArray=sentence.split(" ");
    let longestWord="";
    
    for(let i=0;i<wordsArray.length;i++){
        console.log(wordsArray[i]);
        if(wordsArray[i].length>longestWord.length){
            longestWord=wordsArray[i];
        }
    }
    return longestWord;
}

console.log("Longest Words",findLongestWord("Hi i am Krishan Namdev"));

// using reduce method

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
