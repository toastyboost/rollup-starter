type ComponentProps = {
  text: string;
};

export function Component(text: ComponentProps): string {
  return `${text} + ${text}`;
}
