function replaceQuotes() {
    const inputText = document.getElementById("inputText").value;
    const replacedText = replaceSingleQuotes(inputText);
    const outputText = document.getElementById("outputText");
    outputText.textContent = replacedText;
  }
  
  function replaceSingleQuotes(sentence) {
    return sentence.replace(/'(?![a-zA-Z]+(?:\s|$))/g, '"');
  }
  
  
// initial code function
/*
function replaceSingleQuotes(sentence) {
  return sentence.replace(/'(?![a-zA-Z]+(?:\s|$))/g, '"');
}

const inputSentence = "I ain't sure if I'm ready, but let's do it anyway.";
const replacedSentence = replaceSingleQuotes(inputSentence);

console.log(replacedSentence);
*/