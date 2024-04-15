/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  const fn = (acc, f) => f(acc);
  return function (x) {
    return functions.reduceRight(fn, x);
  };
};
