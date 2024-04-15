/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let value = init;
  function increment() {
    return ++value;
  }
  function decrement() {
    return --value;
  }
  function reset() {
    return (value = init);
  }
  return {
    increment,
    reset,
    decrement,
  };
};
