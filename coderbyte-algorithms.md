# 5/2/2018

## Longest Word
- Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
```js
function LongestWord(sen) { 
  var arr = sen.match(/[a-z0-9]+/gi);
  let word = "";
  
  for(var i=0; i< arr.length; i++){
      if(arr[i].length > word.length){
          word = arr[i];
      }
  }
  return word;
}

LongestWord("Argument!#@ goes here"); // Argument
```

# 5/14/2018 JavaScript Interview Preparation
## [JavaScript string methods and regular expressions](https://coderbyte.com/tutorial/javascript-string-methods-regular-expressions)
- [QUESTION: What's the different between a substr vs substring?](https://stackoverflow.com/questions/3745515/what-is-the-difference-between-substr-and-substring)

- [QUESTION: What is \b?](https://www.regular-expressions.info/wordboundaries.html) 
- [QUESTION: What is \b? Answer 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)