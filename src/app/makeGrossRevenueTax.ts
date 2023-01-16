import {
  calculateFifthTierTax,
  calculateFourthTierTax,
  calculateSecondTierTax,
  calculateThirdTierTax,
} from './calculateRevenueTax';
import { calculateTaxableRevenue } from './calculateTaxableRevenue';

class RevenueTax {
  constructor(readonly grossRevenue) {}

  get taxableRevenue() {
    return calculateTaxableRevenue(this.grossRevenue);
  }

  get total() {
    return (
      this.firstTier +
      this.secondTier +
      this.thirdTier +
      this.fourthTier +
      this.fifthTier
    );
  }

  get firstTier() {
    return 0;
  }

  get secondTier() {
    return calculateSecondTierTax(this.taxableRevenue);
  }

  get thirdTier() {
    return calculateThirdTierTax(this.taxableRevenue);
  }

  get fourthTier() {
    return calculateFourthTierTax(this.taxableRevenue);
  }

  get fifthTier() {
    return calculateFifthTierTax(this.taxableRevenue);
  }
}

export const makeGrossRevenueTax = (grossRevenue: number) =>
  new RevenueTax(grossRevenue);
