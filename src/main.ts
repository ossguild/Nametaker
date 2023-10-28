import './style.css';
import contributors from './contributors.ts';
import JSConfetti from 'js-confetti';

let contributorsCards = '';
export function extractTwitterUsername(url: string): string {
  const usernameRegex = /^(https:\/\/)?twitter\.com\/([a-z_A-Z0-9]{5,})$/;
  const match = url.trim().match(usernameRegex);
  if (match && match.length >= 2) {
    return match[match.length - 1];
  } else {
    return "No Twitter username found in the URL.";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const jsConfetti = new JSConfetti();
  contributors.forEach((contributor) => {
    contributorsCards += `
      <div class="bg-[#F7F7F7] flex px-5 py-6 w-fit items-center justify-start gap-4 rounded-xl grow">
              <div class="rounded-full w-24 h-24 bg-[#f3f3f3] flex items-center justify-center">
                <p class="text-5xl">${contributor.emoji}</p>
              </div>
              <div>
                <h4 class="text-2xl font-bold">${contributor.name}</h4>
                <p class="text-gray-400 w-fit">${contributor.favoriteQuote}</p>
                <div class="text-blue-600 text-sm cursor-pointer">
                  <a href="${
                    contributor.twitterUrl
                  }">tw: @${extractTwitterUsername(contributor.twitterUrl)} </a>
                </div>
              </div>
              </div>
      `;
  });

  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  });

  document.querySelector<HTMLDivElement>(
    '#contributor-card-wrapper'
  )!.innerHTML = contributorsCards;
});
