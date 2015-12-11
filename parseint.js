/**
 * Will return the numeric value of any string
 * @param  {string} variable the value to parse
 * @param {boolean} [random=false] sets the return value to a random number between 1 - 9.
 * @return {int}             the parsed value or a random number
 * @author                   bullgit
 * @version                  1.1
 */
var parseint = function(variable, random) {
  var returnValue = random === undefined ? 4 : Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  return returnValue;
}
