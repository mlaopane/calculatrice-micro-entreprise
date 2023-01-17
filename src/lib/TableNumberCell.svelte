<script lang="ts">
  import TableCell from './TableCell.svelte';
</script>

<TableCell textAlign="right">
  <slot />
</TableCell>

<style>
  :global(.table-number-cell) {
    text-align: right;
  }
</style>
