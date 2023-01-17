<script lang="ts">
  import NumberInput from '../lib/NumberInput.svelte';
  import TableCell from '../lib/TableCell.svelte';
  import TableNumberCell from '../lib/TableNumberCell.svelte';
  import TableRow from '../lib/TableRow.svelte';
  import { calculateTrainingContributions } from './calculateTrainingContributions';
  import CalculatorGrossRevenueInput from './CalculatorGrossRevenueInput.svelte';
  import CalculatorIsEligibleToAcreCheckbox from './CalculatorIsEligibleToAcreCheckbox.svelte';
  import { makeGrossRevenueTax } from './makeGrossRevenueTax';
  import { makeSocialContributionsCalculator } from './socialContributionsCalculator';
  let grossRevenue = null;
  let withAcre = false;

  function formatAsPercentage(input: number): string {
    return `${input.toFixed(3)}%`;
  }

  function formatAsEuros(input: number): string {
    return `${input.toFixed(2)}€`;
  }

  $: calculateSocialContributions = makeSocialContributionsCalculator({
    withAcre,
  });
  $: socialContributions = calculateSocialContributions(grossRevenue);
  $: trainingContributions = calculateTrainingContributions(grossRevenue);
  $: grossRevenueTax = makeGrossRevenueTax(grossRevenue);
  $: taxableRevenue = grossRevenueTax.taxableRevenue;
  $: revenueTax = grossRevenueTax.total;
  $: netAnnualRevenue =
    grossRevenue - socialContributions - trainingContributions - revenueTax;
  $: netMonthlyRevenue = netAnnualRevenue / 12;
  $: revenueTaxPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (100 * revenueTax) / grossRevenue;
  $: secondTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? formatAsPercentage(0)
      : formatAsPercentage((grossRevenueTax.secondTier * 100) / grossRevenue);
  $: thirdTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? formatAsPercentage(0)
      : formatAsPercentage((grossRevenueTax.thirdTier * 100) / grossRevenue);
  $: fourthTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? formatAsPercentage(0)
      : formatAsPercentage((grossRevenueTax.fourthTier * 100) / grossRevenue);
  $: fifthTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? formatAsPercentage(0)
      : formatAsPercentage((grossRevenueTax.fifthTier * 100) / grossRevenue);
</script>

<table id="calculator__main-table">
  <tbody>
    <TableRow>
      <TableCell id="gross-revenue-label"
        >Chiffre d'affaires annuel brut</TableCell
      >
      <TableCell>
        <CalculatorGrossRevenueInput
          aria-labelledby="gross-revenue-label"
          bind:grossRevenue
        />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell id="eligible-to-acre-label">Avec ACRE ?</TableCell>
      <TableCell>
        <CalculatorIsEligibleToAcreCheckbox
          aria-labelledby="eligible-to-acre-label"
          bind:checked={withAcre}
        />
      </TableCell>
    </TableRow>
  </tbody>
</table>
<table>
  <tbody>
    <TableRow>
      <TableCell
        >Chiffres d'affaires annuel imposable (abattement 34%)</TableCell
      >
      <TableNumberCell>{formatAsEuros(taxableRevenue)}</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Cotisations sociales ({withAcre ? '11%' : '21.10%'})
      </TableCell>
      <TableNumberCell>{formatAsEuros(socialContributions)}</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Cotisations formation (0.2%)</TableCell>
      <TableNumberCell>{formatAsEuros(trainingContributions)}</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 11% ({secondTierPercentage})
      </TableCell>
      <TableNumberCell>
        {formatAsEuros(grossRevenueTax.secondTier)}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 30% ({thirdTierPercentage})
      </TableCell>
      <TableNumberCell>
        {formatAsEuros(grossRevenueTax.thirdTier)}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 41% ({fourthTierPercentage})
      </TableCell>
      <TableNumberCell>
        {formatAsEuros(grossRevenueTax.fourthTier)}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 45% ({fifthTierPercentage})
      </TableCell>
      <TableNumberCell>
        {formatAsEuros(grossRevenueTax.fifthTier)}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu final ({formatAsPercentage(revenueTaxPercentage)})
      </TableCell>
      <TableNumberCell>
        {formatAsEuros(revenueTax)}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Revenu annuel net</TableCell>
      <TableNumberCell>{formatAsEuros(netAnnualRevenue)}</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Revenu mensuel net</TableCell>
      <TableNumberCell>{formatAsEuros(netMonthlyRevenue)}</TableNumberCell>
    </TableRow>
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    min-width: 64rem;
    width: 100%;
  }
</style>
