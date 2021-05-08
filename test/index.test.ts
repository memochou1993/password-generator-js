import generate from '../src';

test('generate', () => {
  const config = {
    range: 20,
    letters: true,
    symbols: false,
    numbers: false,
  };
  expect(generate(config)).toHaveLength(20);
});
