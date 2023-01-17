<script lang="ts">
  import NumberInput from '../lib/NumberInput.svelte';
  import TableCell from '../lib/TableCell.svelte';
  import TableNumberCell from '../lib/TableNumberCell.svelte';
  import TableRow from '../lib/TableRow.svelte';
  import { calculateTrainingContributions } from './calculateTrainingContributions';
  import { makeGrossRevenueTax } from './makeGrossRevenueTax';
  import { makeSocialContributionsCalculator } from './socialContributionsCalculator';
  let grossRevenue = null;
  let withAcre = false;
  $: calculateSocialContributions = makeSocialContributionsCalculator({
    withAcre,
  });
  $: socialContributions = calculateSocialContributions(grossRevenue);
  $: trainingContributions = calculateTrainingContributions(grossRevenue);
  $: grossRevenueTax = makeGrossRevenueTax(grossRevenue);
  $: taxableRevenue = grossRevenueTax.taxableRevenue;
  $: revenueTax = grossRevenueTax.total;
  $: netRevenue =
    grossRevenue - socialContributions - trainingContributions - revenueTax;
  $: revenueTaxPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? 0
      : (100 * revenueTax) / grossRevenue;
  $: secondTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? '0.000'
      : ((grossRevenueTax.secondTier * 100) / grossRevenue).toFixed(3);
  $: thirdTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? '0.000'
      : ((grossRevenueTax.thirdTier * 100) / grossRevenue).toFixed(3);
  $: fourthTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? '0.000'
      : ((grossRevenueTax.fourthTier * 100) / grossRevenue).toFixed(3);
  $: fifthTierPercentage =
    grossRevenue === 0 || grossRevenue === null
      ? '0.000'
      : ((grossRevenueTax.fifthTier * 100) / grossRevenue).toFixed(3);
</script>

<table id="calculator__main-table">
  <tbody>
    <TableRow>
      <TableCell>CA brut</TableCell>
      <TableCell>
        <NumberInput
          id="ca-brut"
          name="grossRevenue"
          placeholder="Ex. 72600"
          bind:value={grossRevenue}
        />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Avec ACRE ?</TableCell>
      <TableCell>
        <input
          id="eligible-acre"
          name="withAcre"
          type="checkbox"
          bind:checked={withAcre}
        />
      </TableCell>
    </TableRow>
  </tbody>
</table>
<table>
  <tbody>
    <TableRow>
      <TableCell>CA imposable (abattement 34%)</TableCell>
      <TableNumberCell>{taxableRevenue.toFixed(3)}€</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Cotisations sociales ({withAcre ? '11%' : '21.10%'})
      </TableCell>
      <TableNumberCell>{socialContributions.toFixed(3)}€</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Cotisations formation (0.2%)</TableCell>
      <TableNumberCell>{trainingContributions.toFixed(3)}€</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 11% ({secondTierPercentage}%)
      </TableCell>
      <TableNumberCell>
        {grossRevenueTax.secondTier.toFixed(3)}€
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 30% ({thirdTierPercentage}%)
      </TableCell>
      <TableNumberCell>
        {grossRevenueTax.thirdTier.toFixed(3)}€
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 41% ({fourthTierPercentage}%)
      </TableCell>
      <TableNumberCell>
        {grossRevenueTax.fourthTier.toFixed(3)}€
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 45% ({fifthTierPercentage}%)
      </TableCell>
      <TableNumberCell>
        {grossRevenueTax.fifthTier.toFixed(3)}€
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu final ({revenueTaxPercentage.toFixed(3)}%)
      </TableCell>
      <TableNumberCell>
        {revenueTax.toFixed(3)}€
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Revenu annuel net</TableCell>
      <TableNumberCell>{netRevenue.toFixed(3)}€</TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Revenu mensuel net</TableCell>
      <TableNumberCell>{(netRevenue / 12).toFixed(3)}€</TableNumberCell>
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
