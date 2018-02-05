<template>

</template>


  
<template>
  <div>
    <header>
      <HeaderMenus/>
      <h1><a href="<?php echo BASE_URI; ?>"><?php echo self::escape(APPLICATION_NAME); ?></a></h1>
      <div class="utilityBar">
	<?php
           $this->addToAsset('scripts', BASE_URI.'/js/menus.js');
      
           $this->_include('/partials/panel-widgets/User_menu.inc');
           $this->_include('/partials/panel-widgets/Administrator_menu.inc');
	?>
      </div>
      <HeaderNav/>
    </header>
  
    <main>
      <div class="panel" id="content-panel">
        <?php
            include BLOSSOM.'/errorMessages.php';
            echo $this->includeBlocks();
        ?>
      </div>
      <nuxt/>
    </main>
    <?php $this-> _include('partials/footer.inc'); ?>
  
  </div>
</template>

<script>
// https://nuxtjs.org/guide/views
// see also app.html in root for foundation markup

import HeaderMenus from '~/components/header-menus.vue'
import HeaderNav from '~/components/header-nav.vue'

export default {
  components: {
    HeaderMenus,
    HeaderNav
  }
}
</script>

<style>
</style>
