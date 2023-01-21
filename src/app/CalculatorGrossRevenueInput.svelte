<script lang="ts">
  import NumberInput from '../lib/NumberInput.svelte';

  export let grossRevenue: number | null;
</script>

<NumberInput
  id="ca-brut"
  name="grossRevenue"
  label="CA Brut"
  bind:value={grossRevenue}
  {...$$restProps}
/>
