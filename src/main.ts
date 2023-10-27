import './style.css';
import contributors from './contributors.ts';
import JSConfetti from 'js-confetti';

document.addEventListener('DOMContentLoaded', function () {
  const jsConfetti = new JSConfetti();
  const searchInput = document.getElementById('search-contributor');
  const filterButton = document.getElementById('filter-contributors');
  const contributorCardWrapper = document.querySelector<HTMLDivElement>('#contributor-card-wrapper');
  const filterByEmojiSelect = document.getElementById('filter-by-emoji');

  function extractTwitterUsername(url: string): string | null {
    const usernameRegex = /twitter\.com\/([^/]+)/;
    const match = url.match(usernameRegex);
    if (match && match.length >= 2) {
      return match[1];
    } else {
      return 'No Twitter username found in the URL.';
    }
  }

  function renderContributors(contributors) {
    let contributorsCards = '';
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
              <a href="${contributor.twitterUrl}">tw: @${extractTwitterUsername(contributor.twitterUrl)}</a>
            </div>
          </div>
        </div>
      `;
    });

    contributorCardWrapper.innerHTML = contributorsCards;
  }

  // Event listener for the filter button
  filterButton.addEventListener('click', function () {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredContributors = contributors.filter((contributor) => {
      return contributor.name.toLowerCase().includes(searchQuery) ||
             contributor.emoji.includes(searchQuery);
    });
    renderContributors(filteredContributors);
  });

  // Event listener for live search
  searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredContributors = contributors.filter((contributor) => {
      return contributor.name.toLowerCase().includes(searchQuery) ||
             contributor.emoji.includes(searchQuery);
    });
    renderContributors(filteredContributors);
  });

  // Event listener for the emoji filter select element
  filterByEmojiSelect.addEventListener('change', function () {
    const selectedEmoji = filterByEmojiSelect.value;
    if (selectedEmoji) {
      const filteredContributors = contributors.filter((contributor) => {
        return contributor.emoji.includes(selectedEmoji);
      });
      renderContributors(filteredContributors);
    } else {
      // Handle the case where no emoji is selected (show all contributors)
      renderContributors(contributors);
    }
  });

  // Initial rendering of all contributors
  renderContributors(contributors);

  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  });
  document.querySelector<HTMLDivElement>(
    '#contributor-card-wrapper'
  )!.innerHTML = contributorsCards;
});

