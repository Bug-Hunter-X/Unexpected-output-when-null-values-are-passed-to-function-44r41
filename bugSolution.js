function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  } else if (a === 0 || b === 0) {
    return 1;
  } else {
    return a + b;
  }
}

console.log(foo(5, 10));

try {
  console.log(foo(null, 5));
} catch (error) {
  console.error(error.message);
} 