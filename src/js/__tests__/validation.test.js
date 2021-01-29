import Validation from '../validation';

test.each([
  [4485748058153271, true],
  [4716986543853995, true],
  [5171685877718197, true],
  [3539977541919703, true],
])(('При аргументе %i, должно получится %i'), (a, expected) => {
  const validation = new Validation();
  expect(validation.luhnAlgorithm(a)).toBe(expected);
});
