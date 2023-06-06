const { convertToAmharic } = require('../index');
//testing with a given english word
const englishText = 'he hu hi ha hee h ho hua , le lu li la lee l lo lua , He Hu Hi Ha Hee H Ho Hua';
const englishText1 = 'Me mu mi ma mee m mo mua mY  , Se Su Si Sa See S So Sua , Re ru ri ra ree r ro rua rY ';
const englishText2 = 'A U I EA EE E O ';
const englishText3 = 'beTm';
const englishText4 = 'ts';
const numbers = '1356';


const amharicText = convertToAmharic(englishText1, {
    includeNumbers:true,
    enhance: false,
  });
console.log(amharicText.convertedText);

