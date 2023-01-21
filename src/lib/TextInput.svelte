<script lang="ts">
  export let name;
  export let id;
  export let placeholder = '';
  export let onInput: (event: {
    currentTarget: EventTarget & HTMLInputElement;
  }) => void = undefined;
  export let value;
</script>

<mlp-text-input
  {...$$restProps}
  {name}
  {id}
  {placeholder}
  {value}
  type="text"
  on:input={onInput}
/>
