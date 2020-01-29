<script>

import "../../node_modules/cssgui/dist/css/cssgui.css";


import octicons from 'octicons';
import moment from "moment";

import News from '../components/News.svelte';
import Bot from '../components/Bot.svelte';



</script>

<style>
</style>

<svelte:head>
  <title>fantasyui.com</title>
</svelte:head>







<div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">

    <div class="col pb-3">
      <Bot/>
    </div>

    <div class="col pb-3">
      <News/>
    </div>

    </div>
</div>
