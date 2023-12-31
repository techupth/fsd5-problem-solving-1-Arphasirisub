//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  const word = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  console.log(word)
  const reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
