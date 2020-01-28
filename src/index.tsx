type ComponentProps = {
  text: string;
  object: {
    a: string;
    b: string;
  };
};

export function Component({ text, object }: ComponentProps): string {
  const arr = { ...object, c: '3', d: '4' };

  return `${text} + ${text} ${arr}`;
}
