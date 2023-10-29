import { describe, test, expect } from "vitest";
import extractTwitterUsername from "../src/lib/extractTwitterUsername";
import contributors from "../src/contributors";

describe("twitter handler validation", () => {
  const usernames = contributors.map((contributors) =>
    extractTwitterUsername(contributors.twitterUrl)
  );
  test("should be valid twitter usernames", () => {
    usernames.forEach((username) => {
      expect(username.length).toBeGreaterThan(0);
    });
  });
});
