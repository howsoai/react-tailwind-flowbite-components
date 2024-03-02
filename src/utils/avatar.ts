export const getAvatarText = (string?: string): string =>
  string
    ?.replace(/[^\w\s]/, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.slice(0, 1))
    .map((letter) => letter.toUpperCase())
    .slice(0, 2)
    .join("") ?? "";
