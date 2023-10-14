import './style.css';
import contributors from './contributors.ts';
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let contributorsCards = '';
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
    <div class="bg-[#F7F7F7] flex px-5 py-6 w-fit items-center justify-center gap-4 rounded-xl">
            <div class="rounded-full w-24 h-24 bg-[#f3f3f3] flex items-center justify-center">
              <p class="text-5xl">${contributor.emoji}</p>
            </div>
            <div>
              <h4 class="text-2xl font-bold">${contributor.name}</h4>
              <p class="text-gray-400 w-fit">${contributor.favoriteQuote}</p>
              <div class="text-blue-600 text-sm cursor-pointer">
                <a href="${contributor.twitterUrl}">tw: @${extractTwitterUsername(contributor.twitterUrl)} </a>
              </div>
            </div>
            </div>
    `;
});

console.log(contributorsCards)

document.querySelector<HTMLDivElement>(
  '#contributor-card-wrapper'
)!.innerHTML = contributorsCards;
