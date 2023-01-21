import { writable } from 'svelte/store';
import { calculateTrainingContributions } from './calculateTrainingContributions';
import { makeGrossRevenueTax } from './makeGrossRevenueTax';
import { makeSocialContributionsCalculator } from './socialContributionsCalculator';

function formatAsPercentage(value: number): string {
  return `${value.toFixed(3)}%`;
}

function formatAsEuros(value: number): string {
  return `${value.toFixed(2)}€`;
}

type CalculatorViewModel = Record<string, any>;

type ComputeCalculatorViewModel = (payload: {
  grossRevenue: number | null;
  withAcre: boolean;
}) => CalculatorViewModel;

export const computeCalculatorViewModel: ComputeCalculatorViewModel = ({
  grossRevenue,
  withAcre,
}) => {
  const calculateSocialContributions = makeSocialContributionsCalculator({
    withAcre,
  });
  const socialContributions = calculateSocialContributions(grossRevenue);
  const socialContributionsEuros = formatAsEuros(socialContributions);
  const socialContributionsPercentage = withAcre ? `11.00%` : `21.10%`;

  const trainingContributions = calculateTrainingContributions(grossRevenue);
  const trainingContributionsEuros = formatAsEuros(trainingContributions);
  const trainingContributionsPercentage = `0.2%`;

  const grossRevenueTax = makeGrossRevenueTax(grossRevenue);
  const taxableRevenue = grossRevenueTax.taxableRevenue;
  const taxableRevenueAsEuros = formatAsEuros(taxableRevenue);
  const revenueTax = grossRevenueTax.total;
  const revenueTaxEuros = formatAsEuros(revenueTax);
  const revenueTaxRatio =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (100 * revenueTax) / grossRevenue;
  const revenueTaxPercentage = formatAsPercentage(revenueTaxRatio);

  const netAnnualRevenue =
    grossRevenue - socialContributions - trainingContributions - revenueTax;
  const netAnnualRevenueEuros = formatAsEuros(netAnnualRevenue);
  const netMonthlyRevenue = netAnnualRevenue / 12;
  const netMonthlyRevenueEuros = formatAsEuros(netMonthlyRevenue);

  const secondTierValue =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (grossRevenueTax.secondTier * 100) / grossRevenue;
  const secondTierEuros = formatAsEuros(grossRevenueTax.secondTier);
  const secondTierPercentage = formatAsPercentage(secondTierValue);

  const thirdTierValue =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (grossRevenueTax.thirdTier * 100) / grossRevenue;
  const thirdTierEuros = formatAsEuros(grossRevenueTax.thirdTier);
  const thirdTierPercentage = formatAsPercentage(thirdTierValue);

  const fourthTierValue =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (grossRevenueTax.fourthTier * 100) / grossRevenue;
  const fourthTierEuros = formatAsEuros(grossRevenueTax.fourthTier);
  const fourthTierPercentage = formatAsPercentage(fourthTierValue);

  const fifthTierValue =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (grossRevenueTax.fifthTier * 100) / grossRevenue;
  const fifthTierEuros = formatAsEuros(grossRevenueTax.fifthTier);
  const fifthTierPercentage = formatAsPercentage(fifthTierValue);

  return {
    grossRevenue,
    grossRevenueTax,
    withAcre,
    socialContributionsEuros,
    socialContributionsPercentage,
    secondTierEuros,
    secondTierPercentage,
    thirdTierEuros,
    thirdTierPercentage,
    fourthTierEuros,
    fourthTierPercentage,
    fifthTierEuros,
    fifthTierPercentage,
    revenueTax,
    revenueTaxEuros,
    revenueTaxPercentage,
    netAnnualRevenueEuros,
    netMonthlyRevenueEuros,
    taxableRevenueAsEuros,
    trainingContributionsEuros,
    trainingContributionsPercentage,
  };
};

export const grossRevenue = writable<number | null>(null);
export const isEligibleToAcre = writable(false);
export const calculatorViewModel = writable(
  computeCalculatorViewModel({
    grossRevenue: null,
    withAcre: false,
  }),
);
