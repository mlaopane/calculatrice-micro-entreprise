<script lang="ts">
  import Input from './Input.svelte';

  export let name: string;
  export let id: string;
  export let placeholder = '';
  export let value = 0;

  function isEmpty(value: string): boolean {
    return value.length === 0;
  }

  function hasLastCharacterNumber(value: string): boolean {
    return !isNaN(+value.slice(-1));
  }

  function extractPreviousValue(value: string): string {
    return value.slice(0, value.length - 1);
  }

  function keepNumbersOnly(eventValue: string): number | null {
    if (isEmpty(eventValue)) {
      return null;
    }
    if (hasLastCharacterNumber(eventValue)) {
      return +eventValue;
    }
    const previousValue = extractPreviousValue(eventValue);
    if (isEmpty(previousValue)) {
      return null;
    }
    return +previousValue;
  }

  function handleInputEvent(event: { currentTarget: HTMLInputElement }) {
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
