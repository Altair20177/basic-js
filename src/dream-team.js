const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let arr1, arr2 = [];
  if (arr.length == 0) return 0;
  for (let i = 0; i < arr.length; i++)
  {
    if((typeof(arr[i]) == 'string') && (arr[i].length != 0))
    {
      arr1 = arr[i].toUpperCase().split('');
      arr2 += arr1[0];
    }
  }
  return arr2 = arr2.split('').sort().join('');
};
