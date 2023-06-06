const transcriptionRules = require('./helpers/Translationrule');
const predictiveTextDataset = require('./data/predictiveTextDataset'); // Load the dataset of Amharic words
const spellingErrorDataset = require('./data/spellingErrorDataset'); // Load the dataset of spelling errors

function convertToAmharic(text) {
  let convertedText = text;
  let suggestions = [];
  let correctedText ;

  // Apply the transcription rules to convert the text to Amharic
  for (const rule in transcriptionRules) {
    const regex = new RegExp(rule, "g");
    convertedText = convertedText.replace(regex, transcriptionRules[rule]);
    correctedText =convertedText
  }

  // Find predictive text suggestions based on the converted text
  const lastWord = convertedText.trim().split(" ").pop();
  if (lastWord) {
    suggestions = predictiveTextDataset.filter(word =>
      word.startsWith(lastWord)
    );
  }

  // Check for spelling errors and suggest corrections
  for (const entry of spellingErrorDataset) {
    const incorrectWord = entry.incorrect;
    const correctWord = entry.correct;
    const regex = new RegExp(incorrectWord, "gi");

    if (correctedText.match(regex)) {
      correctedText = correctedText.replace(regex, correctWord);
    }
  }

  return {
    convertedText,
    suggestions,
    correctedText
  };
}

// Exporting the function
module.exports = {
  convertToAmharic
};
