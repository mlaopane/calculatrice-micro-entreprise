<script lang="ts">
  export let name: string;
  export let id: string;
  export let value = 0;
  export let onInput: (event: { target: { value: number } }) => void = ({
    target,
  }) => {
    value = target.value;
  };
</script>

<mlp-number-input {...$$restProps} {name} {id} {value} on:input={onInput} />

<style>
</style>
