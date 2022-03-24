const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length / 2);
  const newStack = new Stack();
  for(let i=0; i<middle; i++){
    newStack.push(sentence[i]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  for(let i=middle, length = sentence.length; i<length; i++){
    if(newStack.pop() !== sentence[i]) return false;
  }
  return true;  
};

module.exports = isPalindrome;
