import { currentTaxScale } from './calculateRevenueTax';
import { TAXABLE_RATE } from './calculateTaxableRevenue';
import { makeGrossRevenueTax } from './makeGrossRevenueTax';

describe(`A gross revenue tax`, () => {
  it('should have a taxable revenue', () => {
    expect(makeGrossRevenueTax(100).taxableRevenue).toEqual(66);
  });
  it('should have a 0% rate applied for the 1st tier', () => {
    expect(makeGrossRevenueTax(currentTaxScale.firstTier.cap).total).toEqual(0);
    expect(
      makeGrossRevenueTax(currentTaxScale.firstTier.cap).firstTier,
    ).toEqual(0);
  });
  it('should have an 11% rate applied for the 2nd tier', () => {
    expect(
      makeGrossRevenueTax((currentTaxScale.firstTier.cap + 1) / TAXABLE_RATE)
        .total,
    ).toEqual(0.11);
  });
  it('should have a 30% rate applied for the 3rd tier', () => {
    expect(
      makeGrossRevenueTax((currentTaxScale.secondTier.cap + 1) / TAXABLE_RATE)
        .total,
    ).toEqual(
      makeGrossRevenueTax(currentTaxScale.secondTier.cap / TAXABLE_RATE).total +
        0.3,
    );
  });
  it('should have a 41% rate applied for the 4th tier', () => {
    expect(
      makeGrossRevenueTax((currentTaxScale.thirdTier.cap + 1) / TAXABLE_RATE)
        .total,
    ).toEqual(
      makeGrossRevenueTax(currentTaxScale.thirdTier.cap / TAXABLE_RATE).total +
        0.41,
    );
  });
  it('should have a 45% rate applied for the 5th tier', () => {
    expect(
      makeGrossRevenueTax((currentTaxScale.fourthTier.cap + 1) / TAXABLE_RATE)
        .total,
    ).toEqual(
      makeGrossRevenueTax(currentTaxScale.fourthTier.cap / TAXABLE_RATE).total +
        0.45,
    );
  });
});
