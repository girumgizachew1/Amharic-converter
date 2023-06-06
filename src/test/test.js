const { convertToAmharic } = require('../index');
//testing with a given english word
const englishText = 'he hu hi ha hee h ho hua , le lu li la lee l lo lua , He Hu Hi Ha Hee H Ho Hua';
const englishText1 = 'Me mu mi ma mee m mo mua mY  , Se Su Si Sa See S So Sua , Re ru ri ra ree r ro rua rY ';
const englishText2 = 'se su si sa see s so sua ';
const englishText3 = 'beTm';

const amharicText = convertToAmharic(englishText3);
console.log(amharicText);

