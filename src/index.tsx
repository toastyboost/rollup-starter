type ComponentProps = {
  text: string;
  object: Record<string, string>;
};

export function Component({ text, object }: ComponentProps): string {
  const arr = { ...object, c: '3', d: '4' };

  return `${text} + ${text} ${JSON.stringify(arr)}`;
}
