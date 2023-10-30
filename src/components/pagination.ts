import { Contributor } from "../../types";
import generateContributorCards from "./card.ts";

const CARDS_PER_PAGE = 6;

const pages = document.querySelector<HTMLDivElement>(".pages");
const contributorCardWrapper = document.querySelector<HTMLDivElement>(
  "#contributor-card-wrapper"
);

export default class Pagination {
  private current: number;
  private contributors: Contributor[];

  constructor(contributors: Contributor[]) {
    this.current = 0;
    this.contributors = contributors;
  }
  getCurrentTable = (length: number): Contributor[] =>
    this.contributors.slice(this.current, this.current + length);

  previous = () => {
    this.current = Math.max(0, this.current - CARDS_PER_PAGE);
    this.render();
  };
  next = () => {
    this.current = Math.min(
      this.current + CARDS_PER_PAGE,
      Math.floor((this.contributors.length - 1) / CARDS_PER_PAGE) * CARDS_PER_PAGE
    );
    this.render();
  };

  render = () => {
    pages!.innerHTML = `<div class="p-2 font-grotesk text-neutral-600">
      ${this.current + 1} - ${Math.min(
      this.current + CARDS_PER_PAGE,
      this.contributors.length
    )} / ${this.contributors.length}
    </div>`;
    const contributorsCards = generateContributorCards(
      this.getCurrentTable(CARDS_PER_PAGE)
    );
    contributorCardWrapper!.innerHTML = "";
    contributorCardWrapper!.appendChild(contributorsCards);
  };
}
