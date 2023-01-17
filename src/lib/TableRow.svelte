<tr>
  <slot />
</tr>

<style>
  tr:nth-child(2n + 1) {
    background-color: var(--color_papyrus-light);
  }
  tr:nth-child(2n) {
    background-color: var(--color_papyrus-extra-light);
  }
  tr {
    color: #222;
  }
</style>
