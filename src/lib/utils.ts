export const useShrinked = (word: string, limit: number): string => {
  if (word.length <= limit) return `"` + word + `"`;
  return `"` + word.substring(0, limit - 4) + `..."`;
};

export const extractTwitterUsername = (url: string): string => {
  const usernameRegex = /^(https:\/\/)?twitter\.com\/([a-z_A-Z0-9]{5,})$/;
  const match = url.trim().match(usernameRegex);
  return match ? match[match.length - 1] : "";
}