var inorderTraversal = function* (arr) {
  for (let element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element);
    } else {
      yield element;
    }
  }
};


