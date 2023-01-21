export type ScaleYear = 2022 | 2023;
export type TaxCalculationPayload = {
  scaleYear: ScaleYear;
  taxableRevenue: number;
};

export const taxScale: Record<ScaleYear, any> = {
  2022: {
    firstTier: {
      rate: 0,
      cap: 10_225,
    },
    secondTier: {
      rate: 0.11,
      cap: 26_070,
    },
    thirdTier: {
      rate: 0.3,
      cap: 74_545,
    },
    fourthTier: {
      rate: 0.41,
      cap: 160_336,
    },
    fifthTier: {
      rate: 0.45,
      cap: Infinity,
    },
  },
  2023: {
    firstTier: {
      rate: 0,
      cap: 10_777,
    },
    secondTier: {
      rate: 0.11,
      cap: 27_478,
    },
    thirdTier: {
      rate: 0.3,
      cap: 78_570,
    },
    fourthTier: {
      rate: 0.41,
      cap: 168_994,
    },
    fifthTier: {
      rate: 0.45,
      cap: Infinity,
    },
  },
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
