const str = "krishan";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let vowelCount = 0;
  let consonentCount = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char >= "a" && char <= "z") {
        if (vowels.includes(char)) {
          vowelCount++;
        } else {
          consonentCount++;
        }
      }
    });
  return {
    vowelCount,
    consonentCount,
  };
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
