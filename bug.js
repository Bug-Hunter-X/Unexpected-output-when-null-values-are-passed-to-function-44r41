function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Incorrect handling of null values
  } else if (a === 0 || b === 0) {
    return 1;
  } else {
    return a + b;
  }
}

console.log(foo(null, 5)); // Unexpected output: 0 instead of an error or specific handling