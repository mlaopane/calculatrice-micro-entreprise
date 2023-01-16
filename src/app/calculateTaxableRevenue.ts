export const TAXABLE_RATE = 0.66;

export const calculateTaxableRevenue = (revenue: number): number =>
  revenue * TAXABLE_RATE;
