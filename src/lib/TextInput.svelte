<script lang="ts">
  export let name;
  export let id;
  export let value: string;
  export let onInput: (event: {
    currentTarget: EventTarget & HTMLInputElement;
  }) => void = undefined;
</script>

<mlp-text-input
  {...$$restProps}
  {name}
  {id}
  {value}
  type="text"
  on:input={onInput}
/>
