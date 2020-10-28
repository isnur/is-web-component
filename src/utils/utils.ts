
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export const toInteger = (value: string, defaultValue = NaN) => {
  const integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}
