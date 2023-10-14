import "./style.css";
import contributors from "./contributors.ts";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

let contributorsCards = "";
function extractTwitterUsername(url: string): string | null {
  const usernameRegex = /twitter\.com\/([^/]+)/;
  const match = url.match(usernameRegex);
  if (match && match.length >= 2) {
    return match[1];
  } else {
    return "No Twitter username found in the URL.";
  }
}

contributors.forEach((contributor) => {
  contributorsCards += `
  <div class="bg-[#F7F7F7] px-5 py-6 w-fit gap-4 rounded-xl">
      <div class="relative flex flex-col items-center justify-center">
        <div class="rounded-full w-24 h-24 bg-[#f3f3f3] flex items-center justify-center ">
          <img src="${contributor.imgurLink}" alt="Profile" class="w-full h-full rounded-full">
        </div>
        <div class="ml-2 flex justify-between items-center ">
          <div class="text-5xl">${contributor.emoji}</div>
          <div>
          <h4 class="text-2xl font-bold my-4">${contributor.name}</h4>
          <p class="text-gray-400 w-fit my-4">${contributor.favoriteQuote}</p>
          <div>
          tw:
            <a href="${contributor.twitterUrl}" target="_blank" class="text-blue-600 text-sm cursor-pointer my-4"> @${extractTwitterUsername(
    contributor.twitterUrl
  )}</a>
         </div>
         <div>
         GitHub: 
           <a href="${contributor.githubUrl}" target="_blank" class="text-blue-600 text-sm cursor-pointer my-4">${
    contributor.githubUsername
  }</a>
         </div>
          </div>
        </div>
      </div>
    </div>`;
});

console.log(contributorsCards);

document.querySelector<HTMLDivElement>("#contributor-card-wrapper")!.innerHTML =
  contributorsCards;

document.addEventListener("DOMContentLoaded", function () {
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
  });
});

