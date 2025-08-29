export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function formatTools(tools: string[]) {
  return tools.join(" • ");
}
