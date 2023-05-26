const { convertToAmharic } = require('./index');

const englishText = "hame";
const amharicText = convertToAmharic(englishText);
console.log(amharicText);