// Longest Word
// 5/2/2018
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
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