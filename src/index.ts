interface Config {
  range: number,
  letters: boolean,
  symbols: boolean,
  numbers: boolean,
}

export default function generate(config: Config): string {
  const { range, letters, symbols, numbers } = config;
  let characters = '';
  if (letters) characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (symbols) characters += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  if (numbers) characters += '0123456789';
  if (!characters) return '';
  const rdn = (n: number): number => Math.floor(Math.random() * n);
  const rds = (s: string): string => s[(rdn(s.length))];
  let s = '';
  for (let i = 0; i < range; i += 1) { s += rds(characters); }
  return s;
}
