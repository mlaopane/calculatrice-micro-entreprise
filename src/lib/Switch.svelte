<script lang="ts">
  export let inputId: string;
  export let labelId: string = '';
  export let label: string;
  export let name: string;
  export let onToggled: (payload: { toggled }) => void;
</script>

<mlp-switch {inputId} {label} {labelId} {name} on:toggled={onToggled} />
