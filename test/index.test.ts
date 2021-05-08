import { generate } from '../src';

test('generate', () => {
  expect(generate(10)).toHaveLength(10);
});
