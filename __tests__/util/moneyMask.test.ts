import moneyMask from "../../src/util/moneyMask";

describe('MoneyMask function',() => {
  it ('Should return R$10.00', () => {
    const value = 10;
    expect(moneyMask(value)).toBe('R$10.00');
  });
});