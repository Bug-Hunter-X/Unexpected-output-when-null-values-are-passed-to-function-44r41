# Unexpected Output with Null Values in JavaScript Function

This repository demonstrates a common JavaScript bug involving unexpected behavior when null values are passed to a function.  The `foo` function is designed to add two numbers, but its handling of null values is incorrect, leading to unexpected results. The solution provides a corrected version of the function that addresses the issue and includes appropriate input validation.

## Bug Description

The `foo` function in `bug.js` returns 0 when either `a` or `b` is null. This behavior is likely unintended, as it might mask errors or lead to unexpected results in the calling code.  A more robust approach would involve either explicitly handling null values (e.g., by throwing an error or returning a default value) or ensuring that the function never receives null values in the first place.

## Solution

The `bugSolution.js` file provides a corrected implementation that throws an error if either input is null. This approach clearly signals an invalid input condition to the calling code and prevents unexpected behavior.  Alternative solutions might include returning a default value (like NaN) or using optional chaining.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js` to see the unexpected output.
4. Run `node bugSolution.js` to see the corrected output.