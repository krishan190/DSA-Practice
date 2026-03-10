// By using set Method

var checkIfPanGram = function (sentence) {
  let set = new Set(sentence);
  if (set.size === 26) {
    return true;
  } else {
    return false;
  }
};

// by using Dictionary Method

/* "I will iterate over the string and store each character in a hash map to track unique characters.
 At the end, if the number of unique characters equals 26, the sentence is a pangram.*/

var checkPanGram = function (sentence) {
  let dict = {};

  for (let char of sentence) {
    dict[char] = true;
  }

  return Object.keys(dict).length === 26;
};
