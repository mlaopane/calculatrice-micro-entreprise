<script lang="ts">
  export let name;
  export let id;
  export let placeholder = '';
  export let onInput: (event: {
    currentTarget: EventTarget & HTMLInputElement;
  }) => void = undefined;
  export let value;
</script>

<input
  {...$$restProps}
  {name}
  {id}
  {placeholder}
  bind:value
  type="text"
  on:input={onInput}
/>

<style>
  input {
    border-style: solid;
    border-color: hsla(205, 50%, 30%, 0.9);
    border-width: 0.2rem;
    border-radius: 0.2rem;
    box-sizing: border-box;
    height: 5.6rem;
    font-size: 1.8rem;
    padding: 0px 1.6rem;
    transition: border-color 150ms;
  }

  input:focus {
    outline: 0.2rem solid hsla(205, 90%, 70%, 0.9);
  }

  input[aria-invalid='true'] {
    border-color: hsla(350, 50%, 50%, 0.9);
  }

  input[aria-invalid='true']:focus {
    outline: 0.2rem solid hsla(350, 90%, 70%, 0.9);
  }
</style>
