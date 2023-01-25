<script lang="ts">
  import '@mlaopane/web-components';

  import CalculatorHeaderTitle from './app/CalculatorHeaderTitle.svelte';
  import CalculatorMainDetails from './app/CalculatorMainDetails.svelte';
  import CalculatorMainForm from './app/CalculatorMainForm.svelte';
  import CalculatorMainTable from './app/CalculatorMainTable.svelte';
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
    <CalculatorMainForm />
    <CalculatorMainTable />
  </Column>
</Main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    --color_blue-medium: hsl(205, 80%, 60%);
    --color_blue-dark: hsl(205, 80%, 30%);
    --color_grey-medium: hsl(47, 5%, 60%);
    --color_grey-light: hsl(47, 5%, 90%);
    --color_grey-extra-light: hsl(47, 5%, 96%);
    --color_papyrus-border: hsla(47, 15%, 75%);
    --color_papyrus-shadow: hsla(47, 100%, 20%, 60%);
    --color_papyrus-light: hsl(47, 87%, 90%);
    --color_papyrus-extra-light: hsl(47, 87%, 96%);
    --color_red-medium: hsla(350, 50%, 50%, 0.9);
    --color_white: #fff;
  }

  :global(html) {
    font-size: 62.5%;
  }

  :global(body) {
    background-color: var(--color_white);
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
