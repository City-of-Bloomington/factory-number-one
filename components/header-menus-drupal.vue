<template>
  <div>
  <div class="row">
    <section id="menu">
      <input id="hamburger" type="checkbox" />
      <label for="hamburger"></label>
    </section>
    
    <section id="block-cob-branding">      
      <h1><a href="/" title="Home" rel="home">City of Bloomington, Indiana</a></h1>     
    </section>

    <section id="feedback">
      <a id="feedback" href="https://bloomington.in.gov/open311-proxy/embed?client=2;service_code=53">Feedback</a>
    </section>

    <Search />
  </div>
</div>
</template>

<script>
import Search from '~/components/search.vue'

export default {
  components: {
    Search
  }
}
</script>

<style lang="scss">
  @import "../assets/main.scss";
  
  #feedback {
    position:absolute; top:$size-gutter; right:$size-gutter;
    color:white;
    font-family:$font-family-nav; font-size:$font-size-normal; font-weight:bold;

    @media all and (min-width:$viewport-medium) {
        right:50%;
    }
  }

  #block-cob-branding {
    padding-left:2em;

    @media all and (min-width:$viewport-medium) {
        padding:0;
        flex:1 0 320px;
    }
  }

 
</style>
