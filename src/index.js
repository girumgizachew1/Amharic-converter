const transcriptionRules = require('./helpers/Translationrule');
const predictiveTextDataset = require('./data/predictiveTextDataset'); // Load the dataset of Amharic words
const spellingErrorDataset = require('./data/spellingErrorDataset'); // Load the dataset of spelling errors
const NumberTranslationRules = require('./helpers/NumberTranslationrule');
function convertToAmharic(text, config = {}) {
  let convertedText = text;
  let suggestions = [];
  let correctedText = convertedText;
  
  // Apply the transcription rules to convert the text to Amharic
  for (const rule in transcriptionRules) {
    const regex = new RegExp(rule, "g");
    convertedText = convertedText.replace(regex, transcriptionRules[rule]);
    correctedText = convertedText;
  }

  // Apply the number transliteration rules
  if (config.includeNumbers !== false) {
    for (const rule in NumberTranslationRules) {
      const regex = new RegExp(rule, "g");
      convertedText = convertedText.replace(regex, NumberTranslationRules[rule]);
      correctedText = correctedText.replace(regex, NumberTranslationRules[rule]);
    }
  }

  if (config.enhance !== false) {
    // Check for spelling errors and suggest corrections
    for (const entry of spellingErrorDataset) {
      const incorrectWord = entry.incorrect;
      const correctWord = entry.correct;
      const regex = new RegExp(incorrectWord, "gi");

      if (correctedText.match(regex)) {
        correctedText = correctedText.replace(regex, correctWord);
      }
    }
    // Find predictive text suggestions based on the converted text
    const lastWord = correctedText.trim().split(" ").pop();
    if (lastWord) {
      suggestions = predictiveTextDataset.filter(word =>
        word.startsWith(lastWord)
      );
    }
  }

  const result = {
    convertedText
  };

  if (config.enhance !== false) {
    result.correctedText = correctedText;
    result.suggestions = suggestions;
  }
  return result;
}

// Exporting the function
module.exports = {
  convertToAmharic,
};
