export const FIRST_TIER_RATE = 0;
export const SECOND_TIER_RATE = 0.11;
export const THIRD_TIER_RATE = 0.3;
export const FOURTH_TIER_RATE = 0.41;
export const FIFTH_TIER_RATE = 0.45;

export const FIRST_TIER_CAP = 10225;
export const SECOND_TIER_CAP = 26070;
export const THIRD_TIER_CAP = 74545;
export const FOURTH_TIER_CAP = 160336;
export const FIFTH_TIER_CAP = Infinity;

export const calculateSecondTierTax = (taxableRevenue: number): number => {
  if (taxableRevenue <= FIRST_TIER_CAP) {
    return 0;
  }

  if (taxableRevenue < SECOND_TIER_CAP) {
    return (taxableRevenue - FIRST_TIER_CAP) * SECOND_TIER_RATE;
  }

  return (SECOND_TIER_CAP - FIRST_TIER_CAP) * SECOND_TIER_RATE;
};

export const calculateThirdTierTax = (taxableRevenue: number): number => {
  if (taxableRevenue <= SECOND_TIER_CAP) {
    return 0;
  }

  if (taxableRevenue < THIRD_TIER_CAP) {
    return (taxableRevenue - SECOND_TIER_CAP) * THIRD_TIER_RATE;
  }

  return (THIRD_TIER_CAP - SECOND_TIER_CAP) * THIRD_TIER_RATE;
};

export const calculateFourthTierTax = (taxableRevenue: number): number => {
  if (taxableRevenue <= THIRD_TIER_CAP) {
    return 0;
  }

  if (taxableRevenue < FOURTH_TIER_CAP) {
    return (taxableRevenue - THIRD_TIER_CAP) * FOURTH_TIER_RATE;
  }

  return (FOURTH_TIER_CAP - THIRD_TIER_CAP) * FOURTH_TIER_RATE;
};

export const calculateFifthTierTax = (taxableRevenue: number): number => {
  if (taxableRevenue <= FOURTH_TIER_CAP) {
    return 0;
  }

  if (taxableRevenue < FIFTH_TIER_CAP) {
    return (taxableRevenue - FOURTH_TIER_CAP) * FIFTH_TIER_RATE;
  }

  return (FIFTH_TIER_CAP - FOURTH_TIER_CAP) * FIFTH_TIER_RATE;
};
