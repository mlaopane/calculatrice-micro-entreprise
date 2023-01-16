<script lang="ts">
  import CalculatorMainTable from './app/CalculatorMainTable.svelte';
  import CalculatorHeaderTitle from './app/CalculatorHeaderTitle.svelte';
  import CalculatorMainDetails from './app/CalculatorMainDetails.svelte';
  import Header from './lib/Header.svelte';
  import Main from './lib/Main.svelte';
  import Column from './lib/Column.svelte';
</script>

<Header>
  <Column>
    <CalculatorHeaderTitle />
  </Column>
</Header>

<Main>
  <Column>
    <CalculatorMainDetails />
    <CalculatorMainTable />
  </Column>
</Main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 62.5%;
  }

  :global(body) {
    margin: 0px;
  }

  :global(body *) {
    box-sizing: border-box;
  }

  :global(input) {
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 2rem;
    height: 40px;
    padding: 4px 16px;
  }
  :global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
    -webkit-appearance: none;
    margin: 0;
  }
  :global(input[type='number']) {
    appearance: textfield;
  }
</style>
