<script lang="ts">
  import TableCell from '../../lib/TableCell.svelte';
  import NumberInput from '../../lib/NumberInput.svelte';
  import TableRow from '../../lib/TableRow.svelte';
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
</script>

<div>
  <table>
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
        <TableCell>{taxableRevenue.toFixed(2)}€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Cotisations sociales ({withAcre ? '11%' : '22%'})
        </TableCell>
        <TableCell>{socialContributions.toFixed(2)}€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cotisations formation (0.1%)</TableCell>
        <TableCell>{trainingContributions.toFixed(2)}€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Impôts sur le revenu - Tranche 11% ({(
            (grossRevenueTax.secondTier * 100) /
            grossRevenue
          ).toFixed(2)}%)
        </TableCell>
        <TableCell>
          {grossRevenueTax.secondTier.toFixed(2)}€
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Impôts sur le revenu - Tranche 30% ({(
            (grossRevenueTax.thirdTier * 100) /
            grossRevenue
          ).toFixed(2)}%)
        </TableCell>
        <TableCell>
          {grossRevenueTax.thirdTier.toFixed(2)}€
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Impôts sur le revenu - Tranche 41% ({(
            (grossRevenueTax.fourthTier * 100) /
            grossRevenue
          ).toFixed(2)}%)
        </TableCell>
        <TableCell>
          {grossRevenueTax.fourthTier.toFixed(2)}€
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Impôts sur le revenu - Tranche 45% ({(
            (grossRevenueTax.fifthTier * 100) /
            grossRevenue
          ).toFixed(2)}%)
        </TableCell>
        <TableCell>
          {grossRevenueTax.fifthTier.toFixed(2)}€
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          Impôts sur le revenu final ({revenueTaxPercentage.toFixed(2)}%)
        </TableCell>
        <TableCell>
          {revenueTax.toFixed(2)}€
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Revenu annuel net</TableCell>
        <TableCell>{netRevenue.toFixed(2)}€</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Revenu mensuel net</TableCell>
        <TableCell>{(netRevenue / 12).toFixed(2)}€</TableCell>
      </TableRow>
    </tbody>
  </table>
</div>

<style>
  div {
    margin: 0 auto;
    max-width: 720px;
  }
  table {
    width: 100%;
  }
</style>
