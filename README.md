# Coderbyte-Algorithms

## 5/2/2018: Longest Word Algorithm

- Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

```js
function LongestWord(sen) {
  const arr = sen.match(/[a-z0-9]+/gi);
  let word = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }

  return word;
}

LongestWord('Argument!#@ goes here'); // 'Argument'
LongestWord('fun&!! time'); // 'time'
LongestWord('I love dogs'); // 'love'
```

## 5/15/2018: First Factorial Algorithm

- Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.

```js
function FirstFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * FirstFactorial(num-1);
  }
}

FirstFactorial(4); // 24
FirstFactorial(8); // 40320
```

- [Explanation](https://medium.com/@MarinaShemesh/an-algorithm-a-day-calculate-the-factorial-of-a-number-a6dfb64080a8)

## 5/15/2018: First Reverse Algorithm

- Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

```js
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

FirstReverse('coderbyte'); // 'etybredoc'
FirstReverse('I Love Code'); // 'edoC evoL I"'
```

- [Explanation](https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb)

## 5/15/2018: Letter Changes Algorithm

- Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

```js
function LetterChanges(str) {
  let arr = str.split('');
  let newStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/g)) {
      newStr += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      newStr += arr[i];
    }
  }

  return newStr.replace(/[aeiou]/g, function(letter) {
    return letter.toUpperCase();
  });
}

LetterChanges('hello*3'); // 'Ifmmp*3'
LetterChanges('fun times!'); // 'gvO Ujnft!'
```

- [Returning a string with vowels capitalized](https://stackoverflow.com/questions/28035376/returning-a-string-with-only-vowels-capitalized?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
- [MDN's String.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## /2018:  Algorithm

-

```js
```

# Coderbyte-Tutorials

## 5/14/2018 JavaScript Interview Preparation: [JavaScript string methods and regular expressions](https://coderbyte.com/tutorial/javascript-string-methods-regular-expressions)

- [QUESTION: What's the different between a substr vs substring?](https://stackoverflow.com/questions/3745515/what-is-the-difference-between-substr-and-substring)

- [QUESTION: What is \b?](https://www.regular-expressions.info/wordboundaries.html)
- [QUESTION: What is \b? Answer 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

### String methods

- Below are some string functions that are commonly required in order to complete Coderbyte challenges. You can view a longer list of JavaScript string functions here.

#### charAt

- Return the character in the string indexed by the parameter in the function.

```js
var str = "Hello";

str.charAt(0); // H
str.charAt(3); // l
str.charAt(7); // ""
```

#### charCodeAt and fromCharCode

- The first function returns a unicode number in place of the character. This is useful for moving some places down or up in the alphabet. The second function does the opposite, it returns a character from the unicode number.

```js
var str = "Hello world";

str.charCodeAt(0); // 72  because H = 72
str.charCodeAt(6); // 119 because w = 119

// you can now easily change the first character to the next one in the
// alphabet using a combination of both functions
String.fromCharCode( str.charCodeAt(0) + 1 ); // I
```

#### toUpperCase and toLowerCase

- Change the case of a string or character.

```js
var str = "Hello";

str.toUpperCase(); // HELLO
str.charAt(1).toUpperCase() // E
```

#### split

- Convert a string into an array for easy access and looping.

```js
var str = "Hello planet Earth";

var arr1 = str.split(""); // ["H", "e", "l", "l", "o", " ", "p", "l", "a", "n", "e", "t", " ", "E", "a", "r", "t", "h"]
var arr2 = str.split(" "); // ["Hello", "planet", "Earth"]
```

#### replace

- Replace a specified part of the string.

```js
var str = "Hello planet Earth";
var str2 = str.replace("Earth", "Mars"); // Hello planet Mars
```

#### substr

- Return a substring of the original string starting from a position specified by the first parameter and going up to a certain length.

```js
var str = "Hello planet Earth";
var part = str.substr(6, 6); // planet
```

### Regular expressions

- Regular expressions are patterns you define that are then searched for in a string. You can modify, replace, or remove the pattern from the string. For example, you could write a regular expression pattern to search for the characters a, b, or c in a string, and then do something with all matches found. The following easy challenges make use of regular expressions:

- [Letter Changes](https://coderbyte.com/solution/Letter%20Changes)
- [Letter Capitalize](https://coderbyte.com/solution/Letter%20Capitalize)
- [Simple Symbols](https://coderbyte.com/solution/Simple%20Symbols)

- A pattern has the following structure:

```js
var pattern = /(a|b|c)/gi
```

- The pattern above looks for either an a, b, or c character and the g specifies to globally find all matches in a string, not just the first match, and the i specifies the search to be case-insensitive, meaning A, B, or C match the pattern as well. You can view a full list of regular expression examples and keywords here.

### Examples

```js
/*
  replace the 'a' character everywhere in string
*/
var str = "An apple was eaten";
str.replace(/a/gi, "4"); // 4n 4pple w4s e4ten

/*
  replace all numbers with x's
*/
var str = "My phone number is 551-555-5555";
str.replace(/[0-9]/gi, "x"); // My phone number is xxx-xxx-xxxx

/*
  get all words that only start with a letter
*/
var str = "Hey 4get these words 3_please";
var wor = str.match(/\b[a-z]+/gi); // ["Hey", "these", "words"]

/*
  find the position in the string where the character A is exactly 2 spaces away from B
*/
var str = "ABxxAxxB"
var pos = str.search(/A..B/gi); // 4
```

## 5/15/2018 JavaScript Interview Preparation: [Modulo operation explained with JavaScript examples](https://coderbyte.com/video/modulo-operation-explained-javascript)

- Useful for figuring out minutes and seconds
- Also useful for figuring out odd and even numbers

## 5/15/2018 JavaScript Interview Preparation: [Common array methods in JavaScript](https://coderbyte.com/tutorial/common-array-methods-in-javascript)

### Array functions

- Below are some array functions that are commonly required in order to complete Coderbyte challenges. You can view a longer list of JavaScript array functions here.

#### indexOf

- Return the index of a specific element in the array. If the element does not exist in the array, the function returns -1.

```js
var arr = [1, 2, 100, 12, -1];

arr.indexOf(100); // 2
arr.indexOf(5); // -1
```

#### push and pop

- Push elements to the end of the array and delete the last element from an array.

```js
var arr = [1, 2, 3, 4];

arr.push(5) // [1, 2, 3, 4, 5]
arr.push(6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]

arr.pop(); // [1, 2, 3, 4, 5, 6, 7]
```

#### shift and unshift

- Remove the first element from an array and return that element or add an element to the front of an array.

```js
var arr = [1, 2, 100, 12, -1];

var first = arr.shift(); // 1
// arr is now => [2, 100, 12, -1]

arr.unshift(5000); // arr is now => [5000, 2, 100, 12, -1]
```

#### reverse

- Reverse the elements in an array.

```js
var arr = [1, 2, 100, 12, -1];
arr.reverse(); // [-1, 12, 100, 2, 1]
```

#### sort

- Sort the elements in an array based on a compare function.

```js
var arr = [1, 2, 100, 12, -1];

// sort in ascending order
arr.sort(function(a, b) { return a - b; }); // [-1, 1, 2, 12, 100]

// sort in descending order
arr.sort(function(a, b) { return b - a; }); // [100, 12, 2, 1, -1]
```

### slice

- Return a part of the array specified by two numbers, the start and end indices.

```js
var arr = [1, 2, 100, 12, -1];
var cutArr = arr.slice(1, 3); // [2, 100]
```
