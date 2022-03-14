<script lang="ts">
  export let name;
  export let value;
  export let id;
  export let placeholder = '';
</script>

<input type="number" {id} {name} {placeholder} bind:value />
