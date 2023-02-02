import { ScaleYear, taxScale } from './taxScale';

export type TaxCalculationPayload = {
  scaleYear: ScaleYear;
  taxableRevenue: number;
};

export const currentTaxScale = taxScale[2023];

export const calculateSecondTierTax = ({
  scaleYear,
  taxableRevenue,
}: TaxCalculationPayload): number => {
  const currentTaxScale = taxScale[scaleYear];

  if (taxableRevenue <= currentTaxScale.firstTier.cap) {
    return 0;
  }

  if (taxableRevenue < currentTaxScale.secondTier.cap) {
    return (
      (taxableRevenue - currentTaxScale.firstTier.cap) *
      currentTaxScale.secondTier.rate
    );
  }

  return (
    (currentTaxScale.secondTier.cap - currentTaxScale.firstTier.cap) *
    currentTaxScale.secondTier.rate
  );
};

export const calculateThirdTierTax = ({
  scaleYear,
  taxableRevenue,
}: TaxCalculationPayload): number => {
  const currentTaxScale = taxScale[scaleYear];

  if (taxableRevenue <= currentTaxScale.secondTier.cap) {
    return 0;
  }

  if (taxableRevenue < currentTaxScale.thirdTier.cap) {
    return (
      (taxableRevenue - currentTaxScale.secondTier.cap) *
      currentTaxScale.thirdTier.rate
    );
  }

  return (
    (currentTaxScale.thirdTier.cap - currentTaxScale.secondTier.cap) *
    currentTaxScale.thirdTier.rate
  );
};

export const calculateFourthTierTax = ({
  scaleYear,
  taxableRevenue,
}: TaxCalculationPayload): number => {
  const currentTaxScale = taxScale[scaleYear];

  if (taxableRevenue <= currentTaxScale.thirdTier.cap) {
    return 0;
  }

  if (taxableRevenue < currentTaxScale.fourthTier.cap) {
    return (
      (taxableRevenue - currentTaxScale.thirdTier.cap) *
      currentTaxScale.fourthTier.rate
    );
  }

  return (
    (currentTaxScale.fourthTier.cap - currentTaxScale.thirdTier.cap) *
    currentTaxScale.fourthTier.rate
  );
};

export const calculateFifthTierTax = ({
  scaleYear,
  taxableRevenue,
}: TaxCalculationPayload): number => {
  const currentTaxScale = taxScale[scaleYear];
  if (taxableRevenue <= currentTaxScale.fourthTier.cap) {
    return 0;
  }

  return (
    (taxableRevenue - currentTaxScale.fourthTier.cap) *
    currentTaxScale.fifthTier.rate
  );
};
