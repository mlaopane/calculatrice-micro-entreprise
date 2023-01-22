<script lang="ts">
  import type { ToggledEvent } from '@mlaopane/web-components';

  import Switch from '../lib/Switch.svelte';
  import Field from '../lib/Field.svelte';
  import {
    calculatorViewModel,
    computeCalculatorViewModel,
    isEligibleToAcre,
  } from './calculatorViewModel';

  function handleToggled(event: ToggledEvent) {
    isEligibleToAcre.set(event.detail.toggled);
  }

  isEligibleToAcre.subscribe((newIsEligibleToAcre) => {
    calculatorViewModel.update((currentCalculatorViewModel) =>
      computeCalculatorViewModel({
        grossRevenue: currentCalculatorViewModel.grossRevenue,
        withAcre: newIsEligibleToAcre,
      }),
    );
  });
</script>

<Field>
  <Switch
    label={`Je bénéficie de l'ACRE`}
    labelId="isEligibleToAcre-label"
    inputId="isEligibleToAcre-input"
    name="isEligibleToAcre"
    onToggled={handleToggled}
  />
</Field>

<style>
  /* label {
    font-size: 1.6rem;
    margin-right: 0.8rem;
  } */
</style>
