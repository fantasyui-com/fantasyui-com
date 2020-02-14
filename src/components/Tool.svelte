<script>
  // This is a "Tool Card"

  import moment from "moment";
  import octicons from 'octicons';

  import PreferenceCard from '../containers/PreferenceCard.svelte';


  // Setup
  export let name = "";
  export let description = "";
  export let img = "";
  export let url = "";


  // Preferences

  let items = 1;
  let footer = false;

  // Application







  let news = [

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




<PreferenceCard title="{description}">

  <div slot="preferences" class="card-text">

  <h5>
    <a href="{url}" rel="noopener noreferrer" target="_blank">{name}</a> &middot; <small>{description}</small>
  </h5>

  <p>
    <a href="{url}" rel="noopener noreferrer" target="_blank">{url}</a>
  <p>

  </div>

  <div class="row pb-1">
    <div class="col">

    <a href="{url}" rel="noopener noreferrer" target="_blank">
    <img src={img} class="w-100" alt={name}>
    </a>

    <p>
      <a href="{url}" rel="noopener noreferrer" target="_blank">{url}</a>
    <p>

    </div>
  </div>



</PreferenceCard>
