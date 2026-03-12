var isPalindrome = function (str) {
  let start = 0,
    end = str.length - 1;

  const isAlphaNum = (ch) => {
    if (
      (ch >= "0" && ch <= "9") ||
      (ch.toLowerCase(ch) >= "a" && ch.toLowerCase(ch) <= "z")
    ) {
      return true;
    }
    return false; //means its alphanumeric character
  };

  while (start < end) {
    if (!isAlphaNum(str[start])) {
      start++;
      continue;
    }
    if (!isAlphaNum(str[end])) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() != str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("1a2")); // false
