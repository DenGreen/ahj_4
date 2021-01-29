import CheckingNumber from '../checkingNumber';

test.each([
  [34, 0],
  [6011, 1],
  [3528, 2],
  [5018, 3],
  [51, 4],
  [4, 5],
  [4026, 6],
  [2, 7],
])(('При аргументе %i, должно получится %i'), (a, expected) => {
  const response = new CheckingNumber();
  expect(response.checking(a)).toBe(expected);
});
