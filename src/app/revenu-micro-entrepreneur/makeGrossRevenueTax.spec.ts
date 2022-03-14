import {
  FIRST_TIER_CAP,
  FOURTH_TIER_CAP,
  SECOND_TIER_CAP,
  THIRD_TIER_CAP,
} from './calculateRevenueTax';
import { TAXABLE_RATE } from './calculateTaxableRevenue';
import { makeGrossRevenueTax } from './makeGrossRevenueTax';

describe(`A gross revenue tax`, () => {
  it('should have a taxable revenue', () => {
    expect(makeGrossRevenueTax(100).taxableRevenue).toEqual(66);
  });
  it('should have a 0% rate applied for the 1st tier', () => {
    expect(makeGrossRevenueTax(FIRST_TIER_CAP).total).toEqual(0);
    expect(makeGrossRevenueTax(FIRST_TIER_CAP).firstTier).toEqual(0);
  });
  it('should have an 11% rate applied for the 2nd tier', () => {
    expect(
      makeGrossRevenueTax((FIRST_TIER_CAP + 1) / TAXABLE_RATE).total,
    ).toEqual(0.11);
  });
  it('should have a 30% rate applied for the 3rd tier', () => {
    expect(
      makeGrossRevenueTax((SECOND_TIER_CAP + 1) / TAXABLE_RATE).total,
    ).toEqual(makeGrossRevenueTax(SECOND_TIER_CAP / TAXABLE_RATE).total + 0.3);
  });
  it('should have a 41% rate applied for the 4th tier', () => {
    expect(
      makeGrossRevenueTax((THIRD_TIER_CAP + 1) / TAXABLE_RATE).total,
    ).toEqual(makeGrossRevenueTax(THIRD_TIER_CAP / TAXABLE_RATE).total + 0.41);
  });
  it('should have a 45% rate applied for the 5th tier', () => {
    expect(
      makeGrossRevenueTax((FOURTH_TIER_CAP + 1) / TAXABLE_RATE).total,
    ).toEqual(makeGrossRevenueTax(FOURTH_TIER_CAP / TAXABLE_RATE).total + 0.45);
  });
});
