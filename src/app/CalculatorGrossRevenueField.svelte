<script lang="ts">
  import Field from '../lib/Field.svelte';
  import NumberInput from '../lib/NumberInput.svelte';
  import {
    calculatorViewModel,
    computeCalculatorViewModel,
    grossRevenue,
  } from './calculatorViewModel';

  function handleInput(event: { target: { value: number } }) {
    const inputValue = event.target.value;
    grossRevenue.set(inputValue);
  }

  grossRevenue.subscribe((newGrossRevenue) => {
    calculatorViewModel.update((currentCalculatorViewModel) =>
      computeCalculatorViewModel({
        grossRevenue: newGrossRevenue,
        withAcre: currentCalculatorViewModel.withAcre,
      }),
    );
  });
</script>

<Field>
  <NumberInput
    {...$$restProps}
    id="grossRevenue-input"
    name="grossRevenue"
    label="Chiffre d'affaires annuel brut"
    onInput={handleInput}
  />
</Field>
