# Coderbyte-Algorithms

## 5/18/2018: [Kaprekars Constant](https://coderbyte.com/information/Kaprekars%20Constant)

- Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

```js
function KaprekarsConstant(num) {
  let counter = 1;
  checkKaprekars(num);

  function checkKaprekars(num) {
    let newNum = String(num);
    if (newNum.length < 4) {
      newNum += '0'.repeat(4 - newNum.length);
    }
    let ascend = newNum.split('').sort(function(a, b){return a-b}).join('');
    let descend = newNum.split('').sort(function(a, b){return b-a}).join('');
    let difference = descend - ascend;

    if (difference !== 6174) {
      counter++;
      return checkKaprekars(difference);
    }
    return counter;
  }
  return counter;
}

KaprekarsConstant(2111); // 5
KaprekarsConstant(9831); // 7
```

- I used `let newNum = num.toString().padEnd(4, '000');` but Repl.it didn't like it, so used `'0'.repeat()` instead

## 5/17/2018: [Alphabet Soup](https://coderbyte.com/information/Alphabet%20Soup)

- Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

```js
function AlphabetSoup (str) {
  return str.split('').sort().join('');
}

AlphabetSoup('coderbyte'); // bcdeeorty;
AlphabetSoup('hooplah'); // ahhloop;
```

## 5/17/2018: [Time Convert Algorithm](https://coderbyte.com/information/Time%20Convert)

- Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

```js
function TimeConvert(num) {
  return `${(num/60) < 1 ? 0 : (Math.floor(num/60))}:${num % 60}`;
}

TimeConvert(127); // 2:6
TimeConvert(45); // 0:45
```

## 5/17/2018: [Check Nums Algorithm](https://coderbyte.com/information/Check%20Nums)

- Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

```js
function CheckNums(num1,num2) {
  if (num1 === num2) { return -1 }
  return (num1 < num2) ? true : false;
}

CheckNums(3, 122); // true
CheckNums(67, 67); // -1
```

## 5/16/2018: [Simple Symbols Algorithm](https://coderbyte.com/information/Simple%20Symbols)

- Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

```js
function SimpleSymbols(str) {
  if (str.includes('+') && str.includes('=')) {
    let wrapped = str.match(/\+[a-z]\+/gi);
    let letters = str.match(/[a-z]/gi);
    return wrapped.length === letters.length ? true : false;
  }
}

SimpleSymbols('+d+=3=+s+'); // true
SimpleSymbols('f++d+'); // false
```

## 5/16/2018: [Letter Capitalize Algorithm](https://coderbyte.com/information/Letter%20Capitalize)

- Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

```js
function LetterCapitalize(str) {
  return arr = str.replace(/\b[a-z]+/gi, (letter) => letter.charAt(0).toUpperCase() + letter.substr(1));
}

LetterCapitalize('i ran there'); // 'I Ran There'
LetterCapitalize('Hello World'); // 'Hello World'
```

## 5/16/2018: [Simple Adding Algorithm](https://coderbyte.com/information/Simple%20Adding)

- Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.

```js
function SimpleAdding(num) {
  let total = 0;

  for (let i = 0; i <= num; i++) {
      total += i;
  }

  return total;
}
SimpleAdding(12); // 78
SimpleAdding(140); // 9870
```

## 5/15/2018: [Letter Changes Algorithm](https://coderbyte.com/information/Letter%20Changes)

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

## 5/15/2018: [First Reverse Algorithm](https://coderbyte.com/information/First%20Reverse)

- Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

```js
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

FirstReverse('coderbyte'); // 'etybredoc'
FirstReverse('I Love Code'); // 'edoC evoL I"'
```

- [Explanation](https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb)

## 5/15/2018: [First Factorial Algorithm](https://coderbyte.com/results/timh1203:First%20Factorial:JavaScript)

- Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (`4 *3 * 2 * 1`). For the test cases, the range will be between 1 and 18 and the input will always be an integer.

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

## 5/2/2018: [Longest Word Algorithm](https://coderbyte.com/results/timh1203:Longest%20Word:JavaScript)

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

- [QUESTION: How does javascript sort work?](https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work)

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

## 5/16/2018 JavaScript Interview Preparation: [JavaScript ES6 Let and Const](https://coderbyte.com/tutorial/es6-variables-let-const)

### ES6 variables: let and const

- Variables in JavaScript are declared using the var keyword. But in the new [JavaScript ES6 standard](http://es6-features.org/#Constants), there are now two new ways of declaring variables, let and const.

#### let

- The let variable declaration works similarly to var, except var is [function-scoped](https://en.wikipedia.org/wiki/Scope_(computer_science)#Function_scope) in JavaScript, while let is block-scoped. Below is an example of functional scoping in JavaScript:

```js
(function foo() {
  var a = 10;
  if (true) {
    var a = 20;
    var b = 30;
  }
  console.log(a); // => 20
  console.log(b); // => 30
})();
```

- What we actually want this program to do is within the if statement, we want to create two new variables, a and b, that are locally scoped within that block. We want the variables a and b to only be available within that block and not effect any of the variables outside of that block. We can now fix the above issue by locally scoping the variables to within the block using let.

```js
(function foo() {
  var a = 10;
  if (true) {
    // these variables are only available within this block now
    let a = 20;
    let b = 30;
  }
  console.log(a); // => 10
  console.log(b); // => ReferenceError: b is not defined
})();
```

#### let + for loops

- A common issue with var declarations and for loops is that a [single binding](http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads) is created for a variable declared in the loop head so usually unexpected results are returned. For example, the code below doesn't output what would be expected.
- With var, there is only a single storage of the variable (single binding)
- With let, a new binding is created for each loop iteration

```js
var arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(function() {
    console.log(i);
  });
}

arr[0](); // => 3
arr[1](); // => 3
arr[2](); // => 3
```

- At the end of the for loop, each function references the same variable, which is why the value of 3 is returned for each function. With the new let variable declaration in ES6, this problem can now be solved the following way:

```js
var arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(function() {
    console.log(i);
  });
}

arr[0](); // => 0
arr[1](); // => 1
arr[2](); // => 2
```

#### const

- The new const declaration is also block-scoped, except the difference between it and let is that const

1. must be immediately initialized with a value
2. a different value cannot be assigned to it later on (the variable is immutable)

- Here is how you can use const for example:

```js
(function() {
  if (true) {
    const name = 'Daniel';
    console.log(name); // => Daniel
  }
  console.log(name); // => ReferenceError: name is not defined
})();
```

- The following code will produce errors though:

```js
const name; // => SyntaxError: Missing initializer in const declaration
```

```js
const name = 'Daniel';
name = 'John'; // => TypeError: Assignment to constant variable
Resources
```

- More information on let/const and scoping can be found [here](http://exploringjs.com/es6/ch_variables.html).

## 5/16/2018 JavaScript Interview Preparation: [ES6 template literals](https://coderbyte.com/tutorial/es6-template-literals)

### ES6 template literals

- JavaScript ES6 introduces a simple way to perform string interpolation/concatenation. Before, you had to combine strings and variables using the + operator which would convert certain variables to strings. Below is an example of how variables are commonly [concatenated](http://www.2ality.com/2011/10/string-concatenation.html) with strings:

```js
var name = 'Daniel';
var action = 'coding';
var time = 3;

var str = name + ' is currently ' + action + ' for ' + time + ' hours.';
console.log(str); // => Daniel is currently coding for 3 hours.
```

This method sometimes gave rise to some [errors or bugs](http://programmers.stackexchange.com/questions/90203/why-is-so-bad-for-concatenation), but now with ES6 we have [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), which looks like the following:

```js
var name = 'Daniel';
var action = 'coding';
var time = 3;

var str = `${name} is currently ${action} for ${time} hours.`;
console.log(str); // => Daniel is currently coding for 3 hours.
```

- The way to create template literals are to enclose your string within back-ticks (` `) instead of quotes (" ") and to include variables and expressions within the string you use the following syntax: ${expression}

- You can also have strings span multiple lines now with template literals:

```js
var str = `Hello world
this string spans
multiple lines`;
```

### Resources

- Here are some interesting and helpful links regarding template literals:

[What can you do with ES6 string template literals?](https://gist.github.com/dherman/6165867)
[ECMAScript 6 features on GitHub](https://github.com/lukehoban/es6features#template-strings)
[Exploring ES6 book](http://exploringjs.com/es6/ch_template-literals.html)

## 5/16/2018 JavaScript Interview Preparation: [JavaScript ES6 arrow functions](https://coderbyte.com/tutorial/es6-arrow-functions)

### ES6 arrow functions

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are a new way to write functions in JavaScript. Let's dive right into the syntax:

```js
var arr = [1, 2, 4, 8];

// traditional way
var squares = arr.map(function(x) {
  return x * x;
});

// es6 syntax
var squares = arr.map(x => x * x);
```

- As you can see, the syntax is much shorter and easier to understand (similar to Python's [lambda functions](http://www.secnetix.de/olli/Python/lambda_functions.hawk)). Below are a few more examples of how to use the new arrow syntax:

```js
// filter only positive values
var arr = [-4, 2, 3, -12, 7];
var pos = arr.filter(x => x > 0);
console.log(pos); // => [2, 3, 7]

// stand-alone arrow function
var eq = x => (x * x) + (2 * x);
console.log(eq(4)); // => 24

// function to return random number between 0 and 1
// need empty parenthesis if no arguments are given
var rand = () => Math.random();
console.log(rand());
```

- If you want to call multiple functions from within a function body, you need to [include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) curly brackets. Below is an example where after a DOM element is clicked, two functions will fire.

```js
var nav = document.getElementById('nav');

// traditional way
nav.addEventListener('click', function(e) {
  foo();
  bar();
});

// es6 syntax
nav.addEventListener('click', e => {
  foo();
  bar();
});
```

### Arrow functions and this

- In the traditional way of calling a function within another function, sometimes a clever trick was required in order to keep a reference to this. For example, see the code below:

```js
var obj = {
  arr: [],
  foo: function(stuff) {
    var self = this;
    stuff.map(function(x) {
      // "this.arr" will not work here because this anonymous function
      // was not invoked by any particular object
      self.arr.push(x * x);
    });
  }
};

obj.foo([1, 2, 3]);
console.log(obj.arr); // => [1, 4, 9]
```

- Now there's an easier way to get around this issue without resolving to store this in a tempoary variable.

```js
var obj = {
  arr: [],
  foo: function(stuff) {
    stuff.map(x => this.arr.push(x * x));
  }
};

obj.foo([1, 2, 3]);
console.log(obj.arr); // => [1, 4, 9]
This works because the arrow function lexically binds the this value to the enclosing context.
```

### Resources

[Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[Exploring ES6 book](http://exploringjs.com/es6/ch_arrow-functions.html)
[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

## 5/17/2018 JavaScript Interview Preparation: [Basic array manipulation with functions in JavaScript](https://coderbyte.com/algorithm/basic-array-manipulation-with-functions-in-javascript)

### Basic array manipulation with functions in JavaScript

- The following is an example question taken from the [Hack Reactor](http://www.hackreactor.com/) blog (the original source link is below):

1. Create an array of numbers and save the array to a variable
2. Iterate through the array using a loop
3. Create a function that will multiply each number in the array by two
4. Pass each number in the array to this function
5. Save the original numbers and the doubled results as key-value pairs in an object

### Sources

[http://www.hackreactor.com/blog/coding+schools+development+bootcamp+coding+bootcamp+learn+javascript](http://www.hackreactor.com/blog/coding+schools+development+bootcamp+coding+bootcamp+learn+javascript)

#### Code for step 1

- In JavaScript, an array is basically a list that stores any number of things, in this case our array will store a list of numbers. We will store our array in the arr variable.

```js
// create an array of arbitrary numbers and store the
// array in the variable arr
var arr = [1, 2, 5, 7, 10];

// now we can access each number in the array
arr[0]; // will return 1
arr[1]; // will return 2
arr[4]; // will return 10
```

#### Code for step 2

- This part of the question is asking you to simply iterate through the whole array. We'll create a for loop that will access each number in the array, but we don't do anything with these numbers yet.

```js
for (var i = 0; i < arr.length; i++) {
  // do something with arr[i] here...
}
```

#### Code for step 3

- We'll create a function that will take in some number and return the number multiplied by two.

```js
function doubling(num) {
  return num * 2;
}

// you can test the above function with the following code
doubling(2); // returns 4
doubling(6); // returns 12
```

#### Code for step 4

- Now we can actually do something with the numbers when we use the for loop. We'll call the doubling function on each number in the array. We're not actually storing the result anywhere though, the code below simply calls the function on each number in the array.

```js
for (var i = 0; i < arr.length; i++) {
  doubling(arr[i]);
}
```

#### Code for step 5

- The last step is to store each number along with its double in an object. An object is a container for elements that are accessed by a key and value. In our case, the key will be the original number and the value will be the doubled value we get from calling the doubling function.

```js
// create an empty object
var obj = {};

for (var i = 0; i < arr.length; i++) {
  // the key will be the original number
  // (we convert the number to a string because keys in JavaScript cannot be numbers)
  var key = arr[i].toString();

  // the value will be the doubled number
  var value = doubling(arr[i]);

  // store the key, value pair in the object
  // e.g. {"5": 10}
  // e.g. {"5": 10, "6": 12}
  obj[key] = value;
}
```

#### Final code

- Below is the code with all the steps put together. Press the run code button to see the result, and you can also change the array values in the code.

```js
function doubling(num) {
  return num * 2;
}

// create an array of arbitrary numbers and store the
// array in the variable arr
var arr = [1, 2, 5, 7, 10];

// create an empty object
var obj = {};

for (var i = 0; i < arr.length; i++) {

  // the key will be the original number
  var key = arr[i].toString();

  // the value will be the doubled number
  var value = doubling(arr[i]);

  obj[key] = value;

}

// print the final object
obj;
```

- One commenter mentions that the object's bracket notation will automatically convert any number between the brackets into a string version of that number
- Therefore, we don't need to use `toString()` method in above example

- Another solution is to have the double method written as a variable directly inside the function
- This approach seems clean

```js
function doubling(array){
var doubled = {};

var double = array.map(function(num){
  return num*2;
});

for(i = 0; i < array.length && i < double.length; i++){
  doubled[array[i]] = double[i];
}
return doubled;
}

doubling([2,3,4,5,6])
```

## 5/17/2018 JavaScript Interview Preparation: [10 common JavaScript interview questions](https://coderbyte.com/algorithm/10-common-javascript-interview-questions)

### 1. How would you check if a number is an integer?

- A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

```js
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false
```

### 2. What will the following code output?

```js
(function() {
  var a = b = 5;
})();

console.log(b);
```

- The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

```js
var a = b = 5;
```

- is interpreted the following way:

```js
var a = b;
b = 5;
```

- But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.

### 3. Write a function that would allow you to do this.

```js
multiply(5)(6);
```

- You can create a closure to keep the value of a even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), and it has access to the variables within the outer function, in this case the variable a.

```js
function multiply(a) {
  return function(b) {
    return a * b;
  }
}

multiply(5)(6);
```

### 4. When would you use a bind function?

- A good use of the bind function is when you have a particular function that you want to call with a specific this value. You can then use [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) to pass a specific object to a function that uses a this reference.

```js
function fullName() {
  return "Hello, this is " + this.first + " " + this.last;
}

console.log(fullName()); // => Hello this is undefined undefined

// create a person object and pass its values to the fullName function
var person = {first: "Foo", last: "Bar"};
console.log(fullName.bind(person)()); // => Hello this is Foo Bar
```

### 5. What does 'use strict' do?

- The "use strict" literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:

```js
function doSomething(val) {
  "use strict";
  x = val + 10;
}
```

- It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with "use strict" The small change below fixes the error being thrown:

```js
function doSomething(val) {
  "use strict";
  var x = val + 10;
}
```

### 6. What is the difference between == and ===?

- The difference is that == performs implicit type conversion to check if values are equal to each other. So it will convert the values to true or false boolean values and then compare them. Below are some weird results of this implicit type conversion using the double equal operator:

```js
"1" == 1 // true
true == 1 // true
[] == false // true
"" == false // true
undefined == null // true
```

- This can really cause some problems when you're writing JavaScript, so the safe thing to do is use the triple equal operator instead, which checks that the two values are of the same type and does not perform type conversion.

```js
"1" === 1 // false
true === 1 // false
[] === false // false
"" === false // false
undefined === null // false
```

### 7. How would you add your own method to the Array object so the following code would work?

```js
var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);
```

- JavaScript is not class based, but it is a [prototype-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) language. This means that each object is linked to another object, its prototype, and it inherits its methods. You can follow the prototype chain for each object up until you reach the null object which has no prototype. We need to add a method to the global Array object, and we will do this by modifying the Array prototype.

```js
Array.prototype.average = function() {
  // calculate sum
  var sum = this.reduce(function(prev, cur) { return prev + cur; });
  // return sum divided by number of elements
  return sum / this.length;
}

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg); // => 3
```

- Now every array that is created will have the average method inherited along with every other Array method. But, you need to be careful with modifying the prototype of an object, because you can [mistakenly overwrite](http://stackoverflow.com/questions/6223449/why-is-it-frowned-upon-to-modify-javascript-objects-prototypes) a common method.

### 8. Explain what a callback function is and provide a simple example.

- A [callback](http://www.impressivewebs.com/callback-functions-javascript/) function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.

```js
function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});
```

### 9. What will the following code output?

`0.1 + 0.2 === 0.3`

- This will surprisingly output false because of floating point errors in internally representing certain numbers. 0.1 + 0.2 does not nicely come out to 0.3 but instead the result is actually 0.30000000000000004 because the computer cannot internally represent the correct number. One solution to get around this problem is to round the results when doing arithmetic with decimal numbers.

### 10. How would you create a private variable in JavaScript?

- To create a private variable in JavaScript that cannot be changed you need to create it as a local variable within a function. Even if the function is executed the variable cannot be accessed outside of the function. For example:

```js
function func() {
  var priv = "secret code";
}

console.log(priv); // throws error
```

- To access the variable, a helper function would need to be created that returns the private variable.

```js
function func() {
  var priv = "secret code";
  return function() {
    return priv;
  }
}

var getPriv = func();
console.log(getPriv()); // => secret code
```

## 5/17/2018 JavaScript Interview Preparation: [3 common JavaScript closure questions](https://coderbyte.com/algorithm/3-common-javascript-closure-questions)

### 3 common JavaScript closure questions

- A lecturer at [Hack Reactor](http://www.hackreactor.com/) made this comment on Quora in response to a question about preparing for the Hack Reactor admission's challenge:

- One big thing that will help you: get intimately familiar with the concepts of recursion and JavaScript [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) ... they will come up early in your interactions with Hack Reactor (and are just great things to understand in general).

- Below we'll cover some common questions dealing with closures. In another post we'll cover some recursion questions with solutions.

### Sources

[https://www.quora.com/How-did-you-prepare-for-Hack-Reactors-admissions-challenge](https://www.quora.com/How-did-you-prepare-for-Hack-Reactors-admissions-challenge)

### 1. What will the following code output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}
```

- The goal of the code above is to alert the numbers 0, 1, and 2 each after 1, 1.1, and 1.2 seconds, respectively. The problem though, is that if you run the above code in your console, you actually get the number 3 alerted 3 times after 1, 1.1, and 1.2 seconds. This is because of an issue with JavaScript closures. [Click here](https://coderbyte.com/algorithm/3-common-javascript-closure-questions#) to run the above code and see the output for yourself.

- A JavaScript closure is when an inner function has access to its outer enclosing function's variables and properties. In the code above, the following line of code:

```js
setTimeout(function() { alert(i); }, 1000 + i);
```

- uses a variable i which is declared outside of itself. The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3. Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered. We'll solve this using an IIFE, or an immediately-invoked function expression.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function(i_local) {
    return function() { alert(i_local); }
  }(i), 1000 + i);
}
```

- We pass the variable i into the outer function as a local variable named i_local, where we then return a function that will alert the i_local for us. This should now correctly alert the numbers 0, 1, and 2 in the correct order. [Click here](https://coderbyte.com/algorithm/3-common-javascript-closure-questions#) to run this new code.

- EXPLANATION: setTimeout is a higher order function (i.e. a function that takes one or more functions as parameters - these function(s) passed as parameters are also known as callbacks). setTimeout has two arguments: the first argument is the function to be invoked (in this case the anonymous function with the alert call), and the second argument is a time interval in milliseconds.

- setTimeout's job, when called, is to immediately set a timer that will expire after a specified time interval (the second argument to setTimeout). When that timer expires, the code that is in the callback function of the first argument passed to setTimeout is executed (and when this callback function is executed, that's where the interesting effects of JS closures come in...but correct me if I'm wrong, it seems like you have a good handle on that part).

- setTimeout does not wait for the time interval to expire and then execute. setTimeout executes immediately. It is the callback function in setTimeout's first argument that waits/executes.

### 2. Write a function that would allow you to do this.

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

- You can create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.

```js
function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);
```

### 3. How would you use a closure to create a private counter?

- You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

```js
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
```

## 5/18/2017 JavaScript Interview Preparation: [Map, reduce, and filter - JavaScript functional programming](https://coderbyte.com/algorithm/map-reduce-filter-javascript-functional-programming)

### Map, reduce, and filter - JavaScript functional programming

- Three functions that are commonly used when applying [functional programming](http://eloquentjavascript.net/1st_edition/chapter6.html) techniques in Javascript are the map, reduce, and filter functions. We'll go over each below and explain how they work.

#### Map

- The [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function creates a new array by calling a specific function on each element in an initial array. For example, if you have an array of strings in the form "MM-DD" that represent birthdays and you want to convert each element to be in a different format, you could use the map function to create a new array with new elements.

```js
var bdays = ['08-14', '10-04', '04-21'];

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
var bdays2 = bdays.map(function(elem) {
  return elem.replace('-', '/');
});

console.log(bdays2); // => ['08/14', '10/04', '04/21']
```

- Another simple example using the map function to round an array of numbers up in JavaScript:

```js
var arr = [1.5, 2.56, 5.1, 12.33];

// round each number up in an array
var rounded = arr.map(Math.ceil);

console.log(rounded); // => [2, 3, 6, 13]
```

#### Reduce

- The [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function applies a specific function to all the elements in an array and reduces it to a single value. The reduce function has actually been used in several of the challenge solutions, one example being Mean Mode. We can use the reduce function to add up all the numbers in an array for example. The four arguments the reduce function takes are:

1) previous value
2) current value
3) current index
4) original array

```js
var nums = [1, 2, 3, 4];

var sum = nums.reduce(function(prevVal, curVal, curIndex, origArr) {
  return prevVal + curVal;
});

console.log(sum); // => 10
```

#### Filter

- The [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function creates a new array with all elements from an original array that pass a certain functions test. For example, you can use the filter function to create a new array of only positive values, like below. The function being called takes in an argument which is the value of the current element in the array.

```js
var nums = [-4, 3, 2, -21, 1];

var pos = nums.filter(function(el) {
  return el > 0;
});

console.log(pos); // => [3, 2, 1]
```

- You can also, for example, filter out all objects in a data file that have incorrect or undefined values. In the example below, we filter out all elements that have an incorrect age value.

```js
var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];

// dataMod will now contain only the first two objects in the data array
var dataMod = data.filter(function(el) {
  if (el.name != undefined && el.age != undefined) {
    return true;
  }
  else {
    return false;
  }
});
```

- Notice that we use `!=` which supports type coercion meaning that null will be equal to undefined
- This is why you will see that the last item of name in the array/object is null but will still fulfill the if statement of being falsy

- These are some basic functional programming methods commonly used in JavaScript. Tutorials coming up will focus on more advanced functions and also on incorporating these methods with new [ECMAScript 2015](https://github.com/lukehoban/es6features) syntax and functions as well.

## 5/18/2017 JavaScript Interview Preparation: [Step-by-step solution for step counting using recursion](https://coderbyte.com/algorithm/step-by-step-solution-step-walking-using-recursion)

### Step-by-step solution for step counting using recursion

- A lecturer at [Hack Reactor](http://www.hackreactor.com/) made this comment on Quora in response to a question about preparing for the Hack Reactor admission's challenge:

```plain
One big thing that will help you: get intimately familiar with the concepts of recursion and JavaScript closures ... they will come up early in your interactions with Hack Reactor (and are just great things to understand in general).
```

- Below we'll cover a clever question that we'll solve using recursion. In a [previous post](https://coderbyte.com/algorithm/3-common-javascript-closure-questions) we covered some questions regarding closures.

### Sources

- [https://www.quora.com/How-did-you-prepare-for-Hack-Reactors-admissions-challenge](https://www.quora.com/How-did-you-prepare-for-Hack-Reactors-admissions-challenge)
- [https://www.glassdoor.com/Interview/You-are-climbing-a-stair-case-Each-time-you-can-either-make-1-step-or-2-steps-The-staircase...](https://www.glassdoor.com/Interview/You-are-climbing-a-stair-case-Each-time-you-can-either-make-1-step-or-2-steps-The-staircase-has-n-steps-In-how-many-dist-QTN_133071.htm)

### Question

- Suppose you want climb a staircase of N steps, and on each step you can take either 1 or 2 steps. How many distinct ways are there to climb the staircase? For example, if you wanted to climb 4 steps, you can take the following distinct number of steps:

```plain
1) 1, 1, 1, 1
2) 1, 1, 2
3) 1, 2, 1
4) 2, 1, 1
5) 2, 2
```

- So there are 5 distinct ways to climb 4 steps. We want to write a function, using recursion, that will produce the answer for any number of steps.

#### Solution

- We'll try to build up a list of solutions for N starting from the smallest staircase. If we want to climb a staircase of 1 step (N = 1), then we can only take 1 step to reach the top. Therefore, the solution when N = 1 is 1. If we want to climb a staircase of 2 steps (N = 2), we can take either 2 steps, or 1 step and 1 step to reach the top. So for N = 2, the solution is 2.

<img src='https://i.imgur.com/YiAuwjT.jpg' alt='3 steps'>

```plain
N = 1
Solution = 1

N = 2
Solution = 2

Now what about 3 steps?

N = 3
Solution = 3

N = 4
Solution = 5 (from example above)

We can see a pattern beginning to emerge. The solution for N steps is equal to the solutions for N - 1 steps plus N - 2 steps. Let's confirm this.

N = 3
Solution = (N - 1 steps) + (N - 2 steps)
Solution = (N = 2) + (N = 1)
Solution = (2) + (1)
Solution = 3

N = 4
Solution = (N - 1 steps) + (N - 2 steps)
Solution = (N = 3) + (N = 2)
Solution = (3) + (2)
Solution = 5
```

It checks out so far! The solution to this problem requires [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)), which means to solve for a particular N, we need the solutions for previous N's. Our code solution below will attempt to mimic this process of recursion to solve for any N.

#### Code

```js
function countSteps(N) {

  // just as in our solution explanation above, we know that to climb 1 step
  // there is only 1 solution, and for 2 steps there are 2 solutions
  if (N === 1) { return 1; }
  if (N === 2) { return 2; }

  // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
  // an answer recursively
  return countSteps(N - 1) + countSteps(N - 2);
}

// the solution for N = 6 will recursively be solved by calculating
// the solution for N = 5, N = 4, N = 3, and N = 2 which we know is 2
countSteps(6);
```

- Another solution posted by commenter:

```js
function stairCounter(stairs){
  var count = 0;
  var start = 0;
  function find(start){
    if(start === stairs){
      count += 1
    }
    else if(start > stairs)
      return null
    else{
      return find(start + 2) || find(start + 1)
    }
  }
  find(start);
  return count;
}
```

## 5/18/2017 JavaScript Interview Preparation: [Determine overlapping numbers in ranges](https://coderbyte.com/algorithm/step-by-step-solution-step-walking-using-recursion)

### Determine overlapping numbers in ranges

- The question is as follows:

```plain
You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent another range. The final number in the array is X. The goal of your program is to determine if both ranges overlap by at least X numbers. For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap by at least 3 numbers (4, 5, 6), so your program should return true.
```

### Example

- If the array is: [10, 20, 4, 14, 4] then the ranges are:

```plain
10 11 12 13 14 15 16 17 18 19 20
4 5 6 7 8 9 10 11 12 13 14
```

- These ranges overlap by at least 4 numbers, namely: 10, 11, 12, 13, 14 so your program should return true.

### Code

```js
function OverlappingRanges(arr) {

  // keep a count of how many numbers overlap
  var counter = 0;

  // loop through one of the ranges
  for (var i = arr[0]; i < arr[1]; i++) {

    // check if a number within the first range exists
    // in the second range
    if (i >= arr[2] && i <= arr[3]) {
      counter += 1;
    }

  }

  // check if the numbers that overlap is equal to or greater
  // than the last number in the array
  return (counter >= arr[4]) ? true : false;
}

OverlappingRanges([4, 10, 2, 6, 3]);
```

# 5/20/2018 Common Algorithms: [Implement Bubble Sort](https://coderbyte.com/algorithm/implement-bubble-sort)

## Implement bubble sort

- Implementing [bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) is used as an example of a slightly harder problem that one should solve to be prepared for the [App Academy](http://www.appacademy.io/#p-home) bootcamp. The source link is listed below, but the statement was:

```plain
I often use "implement bubble sort" (in a beginner-friendly language like Ruby or Python) as an example of one of the harder problems I had to do in order to get in to App Academy.
```

- We'll go ahead and implement bubble sort in JavaScript and Python below. Bubble sort is actually a very slow algorithm that one should [never attempt](https://en.wikipedia.org/wiki/Bubble_sort#In_practice) to seriously use, but the algorithm is simple enough to implement which is why this question might be asked.

## Sources
[http://www.patheos.com/blogs/hallq/2014/06/so-youre-thinking-of-applying-to-app-academy](http://www.patheos.com/blogs/hallq/2014/06/so-youre-thinking-of-applying-to-app-academy)

## Algorithm

- The steps in the bubble sort algorithm are:

```plain
(1) Loop through the whole array starting from index 1
(2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
(3) Once the end of the array is reached, start looping again from the beginning
(3) Once no more elements can be swapped, the sorting is complete
```

## Example

```plain
Let arr = [4, 2, 5, 3]

1st loop through array

i = 1
Swap (4, 2)
arr = [2, 4, 5, 3]

i = 2
Keep (4, 5)
arr = [2, 4, 5, 3]

i = 3
Swap (5, 3)
arr = [2, 4, 3, 5]

2nd loop through array

i = 1
Keep (2, 4)
arr = [2, 4, 3, 5]

i = 2
Swap (4, 3)
arr = [2, 3, 4, 5]

i = 3
Keep (4, 5)
arr = [2, 3, 4, 5]
```

## Animation example from Wikipedia
<img src='https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif' />

## Code

```js
function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function bubblesort(arr) {

  var swapped = true;

  // keep going unless no elements can be swapped anymore
  while (swapped) {

    // set swapped to false so that the loop stops
    // unless two element are actually swapped
    swapped = false;

    // loop through the whole array swapping adjacent elements
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        swap(arr, i-1, i);
        swapped = true;
      }
    }

  }

  return arr;

}

bubblesort([103, 45, 2, 1, 97, -4, 67]);
```

## Running time

- This algorithm runs in worst case O(n2) time where n is the number of items that need to be sorted because we potentially need to loop through the entire array every time we reach a new element, making the running time n * n = n2.

# 5/20/2018 Common Algorithms: [Dutch National Flag Sorting](https://coderbyte.com/algorithm/dutch-national-flag-sorting-problem)

## Dutch national flag sorting problem

- For this problem, your goal is to sort an array of 0, 1 and 2's but you must do this in place, in linear time and without any extra space (such as creating an extra array). This is called the [Dutch national flag](https://en.wikipedia.org/wiki/Dutch_national_flag_problem) sorting problem. For example, if the input array is [2,0,0,1,2,1] then your program should output [0,0,1,1,2,2] and the algorithm should run in O(n) time.

## Algorithm

- The solution to this algorithm will require 3 pointers to iterate throughout the array, swapping the necessary elements.

```plain
(1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
(2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
(3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
(4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
(5) If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1.
```

This algorithm stops once the mid pointer passes the high pointer.

## Example

<img src='https://i.imgur.com/8EpiwGe.jpg' />

## Code

```js
function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function dutchNatFlag(arr) {

  var low = 0;
  var mid = 0;
  var high = arr.length - 1;

  // one pass through the array swapping
  // the necessary elements in place
  while (mid <= high) {
    if      (arr[mid] === 0) { swap(arr, low++, mid++); }
    else if (arr[mid] === 2) { swap(arr, mid, high--); }
    else if (arr[mid] === 1) { mid++; }
  }

  return arr;

}

dutchNatFlag([2,2,2,0,0,0,1,1]);
```

## Running time

- This algorithm runs in O(n) time because it only passes through the array once swapping the necessary elements in place.

## Sources
- [http://www.glassdoor.com/Interview/Solve-Dutch-National-Flag-problem-QTN_309969.htm](http://www.glassdoor.com/Interview/Solve-Dutch-National-Flag-problem-QTN_309969.htm)
- [Youtube Video I watched](https://www.youtube.com/watch?v=BOt1DAvR0zI)