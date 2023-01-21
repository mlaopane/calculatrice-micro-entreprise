import { taxScale } from './calculateRevenueTax';
import { TAXABLE_RATE } from './calculateTaxableRevenue';
import { makeGrossRevenueTaxForScaleYear } from './grossRevenueTax';

[2022, 2023].forEach((scaleYear) => {
  describe(`A gross revenue tax in ${scaleYear}`, () => {
    it('should have a taxable revenue', () => {
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: 100,
          scaleYear,
        }).taxableRevenue,
      ).toEqual(66);
    });

    it('should have a 0% rate applied for the 1st tier', () => {
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: taxScale[scaleYear].firstTier.cap,
          scaleYear,
        }).total,
      ).toEqual(0);
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: taxScale[scaleYear].firstTier.cap,
          scaleYear,
        }).firstTier,
      ).toEqual(0);
    });

    it('should have a 11% rate applied for the 2nd tier', () => {
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: (taxScale[scaleYear].firstTier.cap + 1) / TAXABLE_RATE,
          scaleYear,
        }).total,
      );
    });

    it('should have a 30% rate applied for the 3rd tier', () => {
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: (taxScale[scaleYear].secondTier.cap + 1) / TAXABLE_RATE,
          scaleYear,
        }).total,
      ).toEqual(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: taxScale[scaleYear].secondTier.cap / TAXABLE_RATE,
          scaleYear,
        }).total + 0.3,
      );
    });

    it('should have a 41% rate applied for the 4th tier', () => {
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: (taxScale[scaleYear].thirdTier.cap + 1) / TAXABLE_RATE,
          scaleYear,
        }).total,
      ).toEqual(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: taxScale[scaleYear].thirdTier.cap / TAXABLE_RATE,
          scaleYear,
        }).total + 0.41,
      );
    });
    it('should have a 45% rate applied for the 5th tier', () => {
      expect(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: (taxScale[scaleYear].fourthTier.cap + 1) / TAXABLE_RATE,
          scaleYear,
        }).total,
      ).toEqual(
        makeGrossRevenueTaxForScaleYear({
          grossRevenue: taxScale[scaleYear].fourthTier.cap / TAXABLE_RATE,
          scaleYear,
        }).total + 0.45,
      );
    });
  });
});
