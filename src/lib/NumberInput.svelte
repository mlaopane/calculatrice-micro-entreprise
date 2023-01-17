<script lang="ts">
  import Input from './Input.svelte';

  export let name;
  export let id;
  export let placeholder = '';
  export let value = 0;

  function isLastCharacterNumber(value: string): boolean {
    return !isNaN(+value.slice(-1));
  }

  function extractPreviousValue(value: string): string {
    return value.slice(0, value.length - 1);
  }

  function keepNumbersOnly(eventValue: string): number {
    if (isLastCharacterNumber(eventValue)) {
      return +eventValue;
    }
    return +extractPreviousValue(eventValue);
  }

  function handleInputEvent(event: { currentTarget: HTMLInputElement }) {
    console.log(typeof event.currentTarget.value);
    value = keepNumbersOnly(event.currentTarget.value);
  }
</script>

<Input
  {...$$restProps}
  {name}
  {id}
  {placeholder}
  inputmode="numeric"
  onInput={handleInputEvent}
  bind:value
/>

<style>
</style>
