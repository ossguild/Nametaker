import "./styles/style.css";
import contributors from "./contributors.ts";
import JSConfetti from "js-confetti";
import generateContributorCards from "./card.ts";
import { Contributor } from "../types/index.ts";

document.addEventListener("DOMContentLoaded", function () {
  const jsConfetti = new JSConfetti();
  const searchInput = document.querySelector<HTMLInputElement>(
    "#search-contributor"
  );
  const filterButton = document.querySelector<HTMLButtonElement>(
    "#filter-contributors"
  );
  const contributorCardWrapper = document.querySelector<HTMLDivElement>(
    "#contributor-card-wrapper"
  );
  const filterByEmojiSelect =
    document.querySelector<HTMLSelectElement>("#filter-by-emoji");

  function renderContributors(contributors: Contributor[]) {
    const contributorsCards = generateContributorCards(contributors);
    contributorCardWrapper!.innerHTML = "";
    contributorCardWrapper!.appendChild(contributorsCards);
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
  });
});
