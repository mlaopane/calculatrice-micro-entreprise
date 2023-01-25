<script lang="ts">
  export let id: string;
</script>

<table {...$$restProps} {id}>
  <slot />
</table>

<style>
  table {
    border-collapse: collapse;
    border-color: var(--color_papyrus-border);
    border-radius: 2px;
    border-style: solid;
    border-width: 0.1rem;
    box-shadow: 0 0 2.4rem -0.8rem var(--color_papyrus-shadow);
    display: block;
    overflow-x: auto;
  }
</style>
