export function generate(range: number): string {
  const rdn = (m: number): number => Math.floor(Math.random() * m);
  const rds = (): string => String.fromCharCode(33 + rdn(94));
  let s = '';
  for (let i = 0; i < range; i++) {
    s += rds();
  }
  return s;
}
