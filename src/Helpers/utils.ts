const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CHARS_LEN = CHARS.length

export function ID(size: number = 12): string {
  let result = '';
  for ( let i = 0; i < size; i++ ) {
      result += CHARS.charAt(Math.floor(Math.random() * CHARS_LEN));
  }
  return result;
}
