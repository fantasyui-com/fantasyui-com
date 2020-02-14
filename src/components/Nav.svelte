<script>
  export let segment;

  let collapse = true;

  function handleCollapse() {
  collapse=!collapse;
  }



</script>

<style>

</style>





<nav class="bg-dark shadow text-muted	mb-3 rounded-sm p-3">

  <a class="" class:text-secondary='{segment === undefined}' href="."><strong>Home</strong></a>
  <!-- <span class="text-danger">&middot;</span>
  <a class="" class:text-secondary='{segment === "about"}' href="/about"><strong>About</strong></a> -->

</nav>
