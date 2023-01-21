<div class="field">
  <slot />
</div>

<style>
  .field {
    display: flex;
    align-items: center;
    height: 6.4rem;
  }
  .field > :global(mlp-number-input) {
    width: 100%;
  }
</style>
