import Generator from '../src';

test('generate', () => {
  const config = {
    length: 20,
    letters: true,
    symbols: false,
    numbers: false,
  };
  const password = Generator.generate(config);
  expect(password).toHaveLength(20);
});
