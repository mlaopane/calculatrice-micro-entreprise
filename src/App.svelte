<script lang="ts">
  import Calculator from './app/Calculator.svelte';
  import MainTitle from './app/MainTitle.svelte';
  import MainDescription from './app/MainDescription.svelte';
</script>

<main>
  <MainTitle />
  <MainDescription />
  <Calculator />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  :global(input) {
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 20px;
    height: 40px;
    padding: 4px 16px;
  }
  :global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
    -webkit-appearance: none;
    margin: 0;
  }
  :global(input[type='number']) {
    -moz-appearance: textfield;
  }
</style>
