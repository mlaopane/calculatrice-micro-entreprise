<script lang="ts">
  import NumberInput from '../lib/NumberInput.svelte';

  export let grossRevenue: number;
</script>

<NumberInput
  id="ca-brut"
  name="grossRevenue"
  placeholder="Ex. 72600"
  bind:value={grossRevenue}
/>
