<script lang="ts">
  import Table from '../lib/Table.svelte';
  import TableCell from '../lib/TableCell.svelte';
  import TableNumberCell from '../lib/TableNumberCell.svelte';
  import TableRow from '../lib/TableRow.svelte';
  import { calculatorViewModel } from './calculatorViewModel';
</script>

<Table id="calculator_main_table" style="margin-top: 3.2rem;">
  <tbody>
    <TableRow>
      <TableCell>
        Chiffres d'affaires annuel imposable (abattement 34%)
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.taxableRevenueAsEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Cotisations sociales ({$calculatorViewModel.socialContributionsPercentage})
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.socialContributionsEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell
        >Cotisations formation ({$calculatorViewModel.trainingContributionsPercentage})</TableCell
      >
      <TableNumberCell>
        {$calculatorViewModel.trainingContributionsEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 11% ({$calculatorViewModel.secondTierPercentage})
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.secondTierEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 30% ({$calculatorViewModel.thirdTierPercentage})
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.thirdTierEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 41% ({$calculatorViewModel.fourthTierPercentage})
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.fourthTierEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu - Tranche 45% ({$calculatorViewModel.fifthTierPercentage})
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.fifthTierEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>
        Impôts sur le revenu final ({$calculatorViewModel.revenueTaxPercentage})
      </TableCell>
      <TableNumberCell>
        {$calculatorViewModel.revenueTaxEuros}
      </TableNumberCell>
    </TableRow>
    <TableRow>
      <TableCell>Revenu annuel net</TableCell>
      <TableNumberCell
        >{$calculatorViewModel.netAnnualRevenueEuros}</TableNumberCell
      >
    </TableRow>
    <TableRow>
      <TableCell>Revenu mensuel net</TableCell>
      <TableNumberCell
        >{$calculatorViewModel.netMonthlyRevenueEuros}</TableNumberCell
      >
    </TableRow>
  </tbody>
</Table>

<style>
  tbody {
    display: table;
    width: 100%;
  }
</style>
