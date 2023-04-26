<script lang="ts">
  import type { EventHandler } from './utils';
  type NumberInputEvent = { target: { value: number } };

  export let name: string;
  export let id: string;
  export let value = 0;
  export let onInput: EventHandler<NumberInputEvent> = ({ target }) => {
    value = target.value;
  };
</script>

<mlp-number-input {...$$restProps} {name} {id} {value} on:input={onInput} />

<style>
</style>
