<script lang="ts">
  export let inputId: string;
  export let labelId: string = '';
  export let label: string;
  export let name: string;
  export let onToggle: (payload: { toggled }) => void;

  const handleInput = ({
    currentTarget,
  }: {
    currentTarget: { checked: boolean };
  }) => {
    if (onToggle) {
      onToggle({ toggled: currentTarget.checked });
    }
  };
</script>

<div class="switch">
  <input
    type="checkbox"
    class="checkbox"
    id={inputId}
    {name}
    on:input={handleInput}
  />
  <label for={inputId} id={labelId}>
    <div class="toggle" aria-hidden="true"><span /></div>
    {label}
  </label>
</div>

<style>
  label {
    display: flex;
    font-size: 1.6rem;
    font-weight: 600;
  }

  input[type='checkbox'] {
    visibility: hidden;
    display: none;
  }

  .toggle {
    display: block;
    height: 2rem;
    margin-right: 0.6rem;
    position: relative;
    width: 4rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
  }

  .toggle:before {
    content: '';
    position: relative;
    top: 3px;
    left: 3px;
    width: 34px;
    height: 14px;
    display: block;
    background: #9a9999;
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .toggle span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
    transition: all 0.2s ease;
  }

  input[type='checkbox']:checked + label .toggle:before {
    background: var(--color_blue-medium);
  }

  input[type='checkbox']:checked + label .toggle span {
    background: var(--color_blue-dark);
    transform: translateX(20px);
    transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25),
      background 0.15s ease;
    box-shadow: 0 3px 8px rgba(79, 46, 220, 0.2);
  }
  input[type='checkbox']:checked + label .toggle span:before {
    transform: scale(1);
    opacity: 0;
    transition: all 0.4s ease;
  }
</style>
