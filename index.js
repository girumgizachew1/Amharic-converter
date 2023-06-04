const transcriptionRules = require('./Translationrule');

function convertToAmharic(text) {
  let convertedText = text;
  // Apply the transcription rules to convert the text to Amharic
  for (const rule in transcriptionRules) {
    const regex = new RegExp(rule, 'g');
    convertedText = convertedText.replace(regex, transcriptionRules[rule]);
  }

  // Return the converted text
  return convertedText;
}
//exporting the funtion
module.exports = {
  convertToAmharic
};
