import { formatNumber } from "./numberFormatters";
import { describe, it, expect } from "vitest";
//test suite with vitest
describe("formatNumber", () => {
  it("formats a number", () => {
    expect(formatNumber(1234, "en")).toBe("1,234");
  });
});
