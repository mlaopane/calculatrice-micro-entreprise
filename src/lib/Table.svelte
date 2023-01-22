<script lang="ts">
  export let id: string;
</script>

<table {...$$restProps} {id}>
  <slot />
</table>

<style>
  table {
    border-collapse: collapse;
    display: block;
    overflow-x: scroll;
  }
</style>
