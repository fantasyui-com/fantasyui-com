<script>

  import moment from "moment";
  import octicons from 'octicons';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  let items = 10;
  let footer = true;

  // Application







  let news = [

    {date:'2020-02-14T13:29:32.322Z', html:'Initial Toolbox Introduction'},
    {date:'2020-01-29T03:34:30.737Z', html:'Static Website Launch'},
    {date:'2020-01-29T00:00:00.737Z', html:'Drop Bootstrap Components'},

   ];

  function recalculateTimestamps(){
    news = news
      .map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  // Timers

  setInterval(recalculateTimestamps,60000)

  // Initialization

  recalculateTimestamps();

</script>

<style>


</style>




<PreferenceCard title="News">

  <div slot="preferences" class="card-text">

    <div class="row pb-5">
      <div class="col">
        <label class="d-block" for="items">Number of News Items:</label>
        <input id="items" type="number" name="items" min="2" max="50" class="bg-dark border-info rounded-sm p-1 text-white" style="border: solid 1px;" placeholder="number of items to display" bind:value={items}>
      </div>
    </div>

    <div class="row pb-5">
      <div class="col">
        <label class="d-block" for="footer">Activate footer status bar:</label>
        <input type="checkbox" bind:checked={footer} id="footer">
      </div>
    </div>

    <div class="row">
      <div class="col">
        {#if news.length >= items}
        <small>Showing {items} out of {news.length} items.</small>
        {:else}
        <small>Max items to display {items}, items in database {news.length}.</small>
        {/if}
      </div>
    </div>

  </div>

  <div class="row pb-5">
    <div class="col">
      {#each news as item, i}
        {#if i<items}
          <div><span class="fill-white">{@html octicons.info.toSVG({style:'vertical-align: sub;'})}</span> {@html item.html}</div>
          <div class="text-right"><span class="badge badge-secondary">{item.ago}</span></div>
        {/if}
      {/each}
    </div>
  </div>

  {#if footer}
    <div class="row">
      <div class="col">
        <small>Showing {items} out of {news.length} items.</small>
      </div>
    </div>
  {/if}

</PreferenceCard>
