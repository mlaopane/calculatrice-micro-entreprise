<script lang="ts">
  import Field from '../lib/Field.svelte';
  import {
    calculatorViewModel,
    computeCalculatorViewModel,
    isEligibleToAcre,
  } from './calculatorViewModel';

  function handleInput(event: { currentTarget: { checked: boolean } }) {
    isEligibleToAcre.set(event.currentTarget.checked);
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
  <label for="isEligibleToAcre-checkbox" id="isEligibleToAcre-label">
    Avec ACRE ?
  </label>
  <input
    {...$$restProps}
    id="isEligibleToAcre-checkbox"
    name="isEligibleToAcre"
    type="checkbox"
    on:input={handleInput}
  />
</Field>

<style>
  label {
    font-size: 1.6rem;
    margin-right: 0.8rem;
  }
</style>
