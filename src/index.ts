interface Config {
  length: number,
  letters: boolean,
  symbols: boolean,
  numbers: boolean,
}

export default class Generator {
  static generate(config: Config): string {
    const { length } = config;
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const numbers = '012345678901234567890123456789012345678901234567890123456789';
    let characters = '';
    if (config.letters) characters += letters;
    if (config.symbols) characters += symbols;
    if (config.numbers) characters += numbers;
    if (!characters) return '';
    const rdn = (n: number): number => Math.floor(Math.random() * n);
    const rds = (s: string): string => s[(rdn(s.length))];
    let s = '';
    for (let i = 0; i < length; i += 1) { s += rds(characters); }
    return s;
  }
}
