# Coderbyte-Algorithms

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

-The following code will produce errors though:

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

-Here are some interesting and helpful links regarding template literals:

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