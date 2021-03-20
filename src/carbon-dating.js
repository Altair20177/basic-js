const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let myNum;
  myNum = Number(sampleActivity);
  if((!myNum) || (typeof(sampleActivity) !== 'string')) return false;

  return Math.ceil(((Math.log(MODERN_ACTIVITY / myNum)) / (Math.log(2)) * HALF_LIFE_PERIOD));
};
