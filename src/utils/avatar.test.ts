import { getAvatarText } from "./avatar";

describe("utils/avatar", () => {
  describe("getAvatarText", () => {
    it("Should return LG for Lance Gliser", () => {
      expect(getAvatarText("Lance Gliser")).toBe("LG");
    });
    it("Should return 7S for 7th Street", () => {
      expect(getAvatarText("7th Street")).toBe("7S");
    });
  });
});
