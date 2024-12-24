function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    // Handle null, undefined, and other falsy values appropriately.  Consider throwing an error for better clarity
    throw new Error('Null or undefined values passed to the function.');
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }

  // ... rest of your function that performs calculations with a and b
}