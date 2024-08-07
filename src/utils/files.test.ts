import { formatBytes } from "./files";

describe("utils/avatar", () => {
  describe("formatBytes", () => {
    it("should format 2354 bytes as ", () => {
      const output = formatBytes(1054);
      expect(output).toBe("1.1 kB");
    });
  });
});
