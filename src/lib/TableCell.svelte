<script lang="ts">
  export let textAlign: 'center' | 'left' | 'right' = 'left';
</script>

<td style="text-align: {textAlign}">
  <slot />
</td>

<style>
  td {
    font-size: 1.6rem;
    font-weight: 600;
    height: 4.8rem;
    padding: 0 2rem;
    white-space: nowrap;
  }
</style>
