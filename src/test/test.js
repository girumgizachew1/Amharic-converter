const { convertToAmharic } = require('../index');
//testing with a given english word
const englishText = "hame";
const amharicText = convertToAmharic(englishText);
console.log(amharicText);