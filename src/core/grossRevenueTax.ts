import {
  calculateFifthTierTax,
  calculateFourthTierTax,
  calculateSecondTierTax,
  calculateThirdTierTax,
} from './calculateRevenueTax';
import { calculateTaxableRevenue } from './calculateTaxableRevenue';

class RevenueTax {
  constructor(readonly scaleYear: 2022 | 2023, readonly grossRevenue: number) {}

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
    return +calculateSecondTierTax({
      scaleYear: this.scaleYear,
      taxableRevenue: this.taxableRevenue,
    }).toFixed(3);
  }

  get thirdTier() {
    return +calculateThirdTierTax({
      scaleYear: this.scaleYear,
      taxableRevenue: this.taxableRevenue,
    }).toFixed(3);
  }

  get fourthTier() {
    return +calculateFourthTierTax({
      scaleYear: this.scaleYear,
      taxableRevenue: this.taxableRevenue,
    }).toFixed(3);
  }

  get fifthTier() {
    return +calculateFifthTierTax({
      scaleYear: this.scaleYear,
      taxableRevenue: this.taxableRevenue,
    }).toFixed(3);
  }
}

export const makeGrossRevenueTaxForScaleYear = ({ grossRevenue, scaleYear }) =>
  new RevenueTax(scaleYear, grossRevenue);
