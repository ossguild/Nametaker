export default function extractTwitterUsername(url: string): string {
  const usernameRegex = /^(https:\/\/)?twitter\.com\/([a-z_A-Z0-9]{5,})$/;
  const match = url.trim().match(usernameRegex);
  return match ? match[match.length - 1] : "";
}