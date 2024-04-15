/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return () => {
    return n++;
  };
};
