// Impertaitve
test('The answer to the Ultimate Question of Life is 42', () => {
  const answer = getAnswer();
  if (answer !== 42) {
    throw new Error('The answer is incorrect');
  } else {
    return true;
  }
});

// Declerative
test('The answer to the Ultimate Question of Life is 42', () => {
  expect(getAnswer()).toBe(42);
});
