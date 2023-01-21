<script lang="ts">
  import TextInput from './TextInput.svelte';

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
    const sanitizedEventValue = eventValue.trim();
    if (isEmpty(sanitizedEventValue)) {
      return null;
    }
    if (hasLastCharacterNumber(sanitizedEventValue)) {
      return +sanitizedEventValue;
    }
    const previousValue = extractPreviousValue(sanitizedEventValue);
    if (isEmpty(previousValue)) {
      return null;
    }
    return +previousValue;
  }

  function handleInputEvent(event: { currentTarget: HTMLInputElement }) {
    value = keepNumbersOnly(event.currentTarget.value);
  }
</script>

<TextInput
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
