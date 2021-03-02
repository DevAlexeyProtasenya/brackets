module.exports = function check(str, bracketsConfig) {
  let result = false;
  for (i = 0; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if (element[1] === str[i]) {
        if (element[0] === str[i - 1]) {
          str = str.substr(0, i - 1) + str.substr(i + 1);
          i -= 2;
        }
      }
    });
  }
  if (str === '') {
    result = true;
  }
  return result;
}
