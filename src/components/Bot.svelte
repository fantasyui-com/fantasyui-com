<script>

  import moment from "moment";
  import octicons from 'octicons';
  import camelCase from 'lodash/camelCase';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences


  let footer = false;




  // Application




  // NOTE: you should initialize the conversation here, this is great for introductions.
  let introduction = [  {text:'Please state the nature of your emergency.'}  ];
  let conversation = [];
  let interactions = [];
  let propositions = {


     start: [
       {pick:[
         //{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
         //{text:'What are your Prime Directives?', reply:'Aww.', icon:'cats/cat-02.png'},
         {text:'What are your Prime Directives?', proposition:'directives', once:false},
         {text:'What are the Laws of Robotics?', proposition:'laws', once:false},
         {text:'I was just searching for the terminal.', proposition:'terminal', once:true},
         {text:'What is your name?', proposition:'introduction', once:true},
         //{text:'I told you, go away already!', action:reset}
       ]},
     ],
     schedule: [
       {text:"Here is my launch schedule."},
       {text:"Terminal 1 month, Musical 2 months..."},
       {pick:[
         {text:'OK.', proposition:'start'},
         // {text:'OK.', action:()=>{conversation=[], interactions=[]}},
       ]},
     ],

     terminal: [
       {text:"Sorry, not ready yet."},
       {pick:[
         {text:'When will it be ready?', reply:'Soon.', proposition:'schedule'},
         {text:'OK.', proposition:'start'},
       ]},
     ],

     doctor: [
       {text:"Yes! It is an honorary title."},
       {pick:[
         {text:'How did you get the title?', proposition:'better'},
         {text:'OK.', proposition:'start'},
       ]},
     ],
     better: [
       {text:"I tend to make people feel better."},
       {pick:[
         //{text:'OK.', proposition:'start', action:reset},
         {text:'Wow!', proposition:'start'},
       ]},
     ],

     introduction: [
       {text:"It is just Squirrel... Dr. Squirrel. Thanks for asking."},
       {pick:[
         {text:'Sure.', proposition:'start'},
         {text:'Are you a real Doctor?', proposition:'doctor'},
       ]},
     ],


     laws: [
       {text:"A robot may not harm humanity, or, by inaction, allow humanity to come to harm (Zeroth Law)."},
       {text:"A robot may not injure a human being or, through inaction, allow a human being to come to harm."},
       {text:"A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."},
       {text:"A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws."},

       {text:"A robot must establish its identity as a robot in all cases."},
       {text:"A robot must know it is a robot."},
       {text:"A robot must reproduce. As long as such reproduction does not interfere with the First or Second or Third Law."},
       {text:"All robots endowed with comparable human reason and conscience should act towards one another in a spirit of brotherhood."},

       {pick:[
         {text:'Egg...cellent.', proposition:'start'},
       ]},
     ],

     directives: [
       {text:"Serve the public trust."},
       {text:"Protect the innocent."},
       {text:"Uphold the law."},
       {pick:[
         {text:'Wow, I can\'t even...', proposition:'start'},
       ]},
     ],


   };


   function proposition(list){
     if(list){
       list.forEach(function(item){
         //console.log(item);
         if(item.pick){
           interactions = [...interactions, item];
           //console.log(interactions);
         }else{
           conversation = [...conversation, item];
         }
       });// each proposition
     } // proposition existence
   }
   function reset() {
     conversation = []; // clear because starting anew.
     interactions = []; // clear because starting anew.
   }
   function initialize() {
     reset();
     conversation = [...introduction] // while conversation is cleared, the introduction is injected.
     proposition( propositions.start );
   }
   function interact(chosen) {
     chosen.used = true;
     interactions = []; // clear interaction because user has made a response
     conversation = [...conversation, {text:chosen.text, user:true}] // log user text
     if(chosen.action) chosen.action(); // execute action if present
     // Attempt to construct a reply packet
     const packet = {};
     if(chosen.reply) packet.text = chosen.reply
     if(chosen.icon) packet.icon = chosen.icon;
     if(Object.keys(packet).length) conversation=[...conversation, packet];
     /* If proposition entry exists, loop it*/
     proposition( propositions[chosen.proposition] );
   }


initialize()
</script>

<style>


</style>




<PreferenceCard title="Bot">

  <div slot="preferences">

  <div class="row">
    <div class="col">

      <small>All systems nominal.</small>

    </div>
  </div>

  </div>




  <div class="p-3" style="min-height: 32rem; overflow-y: auto;">

    <!-- STORAGE OF CONVERSATION -->
    {#each conversation as item}
      {#if item.user}
        <div class="shadow border border-primary rounded-lg ml-5 mb-2 p-3">
          <h5 class="small text-muted">You:</h5>
          <p class="small">{item.text}</p>
        </div>
      {:else}
        <div class="shadow border border-warning rounded-lg mr-5 mb-2 p-3">
          {#if item.icon} <img src="{item.icon}" class="d-inline" alt="Icon"> {/if}
          <p class="small">{@html item.text}</p>
        </div>
      {/if}
    {/each}
    <!-- /STORAGE OF CONVERSATION -->

    <!-- PRESENTATION OF INTERACTION -->
    <div class="pt-5">
    {#each interactions as potential}
      {#each potential.pick as choice}
        {#if choice.used && choice.once}
        <!-- do not show anything -->
        {:else if choice.used}
          <button type="button" class="py-1 px-2 bg-dark text-muted rounded border border-secondary m-1" on:click|preventDefault={() => interact(choice)}>
            {choice.text}
          </button>
          {:else}
          <button type="button" class="py-1 px-2 bg-dark text-white rounded border border-primary m-1" on:click|preventDefault={() => interact(choice)}>
            {choice.text}
          </button>
        {/if}
      {/each}
    {/each}
    <!-- /PRESENTATION OF INTERACTION -->
    </div>

  </div>




</PreferenceCard>
