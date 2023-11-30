import "./styles/style.css";
import contributors from "./contributors.ts";
import JSConfetti from "js-confetti";
import { Contributor } from "../types/index.ts";
import Pagination from "./components/pagination.ts";
import * as Emoji from "node-emoji";

document.addEventListener("DOMContentLoaded", function () {
  const jsConfetti = new JSConfetti();
  const searchInput = document.querySelector<HTMLInputElement>(
    "#search-contributor"
  );
  const filterButton = document.querySelector<HTMLButtonElement>(
    "#filter-contributors"
  );
  const filterByEmojiSelect =
    document.querySelector<HTMLSelectElement>("#filter-by-emoji");
  const previousBtn = document.querySelector<HTMLButtonElement>(".previous");
  const nextBtn = document.querySelector<HTMLButtonElement>(".next");

  function renderContributors(contributors: Contributor[]) {
    const pagination = new Pagination(contributors);
    pagination.render();

    previousBtn?.addEventListener("click", pagination.previous);
    nextBtn?.addEventListener("click", pagination.next);
  }

  // Event listener for the filter button
  filterButton!.addEventListener("click", function () {
    const searchQuery = searchInput!.value.toLowerCase();
    const filteredContributors = contributors.filter((contributor) => {
      return (
        contributor.name.toLowerCase().includes(searchQuery) ||
        contributor.emoji.includes(searchQuery)
      );
    });
    renderContributors(filteredContributors);
  });

  // Event listener for live search
  searchInput!.addEventListener("input", function () {
    const searchQuery = searchInput!.value.toLowerCase();
    const filteredContributors = contributors.filter((contributor) => {
      return (
        contributor.name.toLowerCase().includes(searchQuery) ||
        contributor.emoji.includes(searchQuery)
      );
    });
    renderContributors(filteredContributors);
  });

  const emojiArray = [""];
  const seenEmojis = new Set();

  for (const contributor of contributors) {
    const emoji = contributor.emoji;
    if (!seenEmojis.has(emoji)) {
      emojiArray.push(emoji);
      seenEmojis.add(emoji);
    }
  }
  console.log(emojiArray);

  filterByEmojiSelect!.innerHTML = emojiArray
    .map((emoji) => {
      return `<option value=${emoji}>${
        emoji ? emoji + " " + Emoji.find(emoji)?.key : "Select Emoji"
      }</option>`;
    })
    .join("");

  // Event listener for the emoji filter select element
  filterByEmojiSelect!.addEventListener("change", function () {
    const selectedEmoji = filterByEmojiSelect!.value;
    if (selectedEmoji) {
      const filteredContributors = contributors.filter(
        (contributor) => contributor.emoji === selectedEmoji
      );
      renderContributors(filteredContributors);
    } else {
      // Handle the case where no emoji is selected (show all contributors)
      renderContributors(contributors);
    }
  });

  // Initial rendering of all contributors
  renderContributors(contributors);

  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
    emojiSize: 500,
  });
});
