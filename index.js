const transcriptionRules = require('./Translationrule');

function convertToAmharic(text) {
  let convertedText = text;
  // Apply the transcription rules to convert the text to Amharic
  for (const rule in transcriptionRules) {
<<<<<<< HEAD
    const regex = new RegExp(rule, "g");
=======
    const regex = new RegExp(rule, 'g');
>>>>>>> acd73eb73051922cdfe64b1f56f496df027c3f5c
    convertedText = convertedText.replace(regex, transcriptionRules[rule]);
  }

  // Return the converted text
  return convertedText;
}

// Exporting the function
module.exports = {
  convertToAmharic
};
