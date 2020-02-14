<script>

import "../../node_modules/cssgui/dist/css/cssgui.css";

import Tool from '../components/Tool.svelte';
import News from '../components/News.svelte';
import Bot from '../components/Bot.svelte';

</script>

<style>
</style>

<svelte:head>
  <title>fantasyui.com</title>
</svelte:head>

<div class="container-fluid text-muted">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">


    <div class="col pb-3">
      <Tool name="fantasy-gui" description="Fantasy GUI Construction Kit" img="tools/fantasy-gui.png" url="https://fantasyui-com.github.io/fantasy-gui/"/>
    </div>

    <div class="col pb-3">
      <Tool name="neumorphism" description="Neumorphism Construction Kit" img="tools/neumorphism.png" url="https://fantasyui-com.github.io/neumorphism/"/>
    </div>

    <div class="col pb-3">
      <Bot/>
    </div>

    <div class="col pb-3">
      <News/>
    </div>

    </div>
</div>
