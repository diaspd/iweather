import { getNextDays } from "./getNextDays";

describe("GetNextDays", () => {
  it("should return the next five days", () => {
    const days = getNextDays();
  
    expect(days.length).toBe(5);
  })
})