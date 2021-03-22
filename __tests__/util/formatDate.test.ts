import formatDate from "../../src/util/formatDate";

describe('formatDate function', () => {
  it ("Should return '01/01/2021 12:00'", () => {
    const dateTime = "2021-01-01T12:00:00";
    expect(formatDate(dateTime)).toBe('01/01/2021 12:00');
  });
});