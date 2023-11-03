import styles from "./styles/cards.module.css";
import { Contributor } from "../types";
import extractTwitterUsername from "./lib/extractTwitterUsername";
import { onMouseEnter, onMouseLeave } from "./lib/cardEffect";

const useShrinked = (word: string, limit: number): string => {
  if (word.length <= limit) return `"` + word + `"`;
  return `"` + word.substring(0, limit - 4) + `..."`;
};

const contributorCard = (contributor: Contributor) => {
  const shrinkedQuote = useShrinked(contributor.favoriteQuote, 30);
  const cardElement = document.createElement("div");
  cardElement.innerHTML = `
  <div class="${styles.card} bg-neutral-200 hover:shadow-lg flex w-max px-5 pr-10 py-6 items-center justify-start gap-4 rounded-xl transition">
    <div class="rounded-full bg-blend-overlay overflow-clip z-50 w-24 h-24 bg-[#f3f3f3] flex items-center justify-center">
      <p class="text-5xl transition duration-300 hover:scale-125">
        ${contributor.emoji}
      </p>
    </div>
    <div class='${styles.glow} glow'></div>
      <div class="z-50">
        <h4 class="text-2xl font-bold">${contributor.name}</h4>
        <p class="quote text-gray-500 font-serif italic">
          ${shrinkedQuote}
        </p>
        <div class="text-blue-600 rounded-xl transition duration-300 w-fit px-2 mt-2 text-sm font-mono cursor-pointer hover:text-white hover:bg-blue-500 hover:shadow-md hover:shadow-blue-600">
          ${
            contributor.twitterUrl !== ""
              ? `<a href="https://twitter.com/${contributor.twitterUrl}">@${contributor.twitterUrl}</a>`
              : `<p>Broken Link</p>`
          }
        </div>
      </div>
  </div>`;
  const quote = cardElement.querySelector(".quote");
  cardElement.addEventListener("mouseenter", (e) => {
    onMouseEnter(e, cardElement);
    quote!.innerHTML = useShrinked(contributor.favoriteQuote, Infinity);
  });
  cardElement.addEventListener("mouseleave", (e) => {
    onMouseLeave(e, cardElement);
    quote!.innerHTML = shrinkedQuote;
  });

  return cardElement;
};

export default function generateContributorCards(
  contributors: Contributor[]
): HTMLDivElement {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add(
    styles["card-wrapper"],
    ..."gap-6 p-10 flex md:flex-row flex-wrap justify-center".split(" ")
  );

  contributors.forEach((contributor) => {
    const username = extractTwitterUsername(contributor.twitterUrl);
    const cardElement = contributorCard({
      ...contributor,
      twitterUrl: username,
    });
    cardWrapper.appendChild(cardElement);
  });

  return cardWrapper;
}
