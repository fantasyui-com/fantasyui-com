<script>

export let title = 'Preferences Card';

import octicons from 'octicons';


/*
  0 is Preference View
  1 is Application View
*/
let view = 1; // controlled via UI icons

</script>



{#if view == 0}

  <div class="container-fluid bg-dark text-white shadow rounded p-2" style="max-height: 32rem; overflow-y: auto; overflow-x: hidden;">

    <div class="row mb-3">
      <div class="col">
        <strong>{title}</strong>
        <button class="px-2 pb-1 bg-dark rounded border border-secondary float-right" on:click="{e => view = 1}">{@html octicons.checklist.toSVG({ "class": "fill-white" })}</button>
        <slot name="buttons"></slot>
      </div>
    </div>

    <slot name="preferences">
    <div class="row">
      <div class="col">
          Preferences Empty
      </div>
    </div>
    </slot>

  </div>

{:else if view == 1}

  <div class="container-fluid bg-dark text-white shadow rounded p-2" style="max-height: 32rem; overflow-y: auto; overflow-x: hidden;">
    <div class="row mb-3">
      <div class="col">
        <strong>{title}</strong>
        <button class="px-2 pb-1 bg-dark rounded border border-secondary float-right" on:click="{e => view = 0}">{@html octicons.gear.toSVG({ "class": "fill-white" })}</button>
        <slot name="buttons"></slot>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <slot>
        </slot>
      </div>
    </div>
  </div>

{/if}
