<template>
  <section class="search-block-form" data-drupal-selector="search-block-form" id="block-searchform" role="search">
    
    <div>
      <form action="/search/node" method="get" id="search-block-form" accept-charset="UTF-8">
	<div class="js-form-item form-item js-form-type-search form-item-keys js-form-item-keys form-no-label">
	  <label for="edit-keys" class="visually-hidden">Search</label>
          <input title="Enter the terms you wish to search for." placeholder="Type here" data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search" />
	  
        </div>
	<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit" />
	</div>
	
      </form>
      
    </div>
  </section>  
</template>

<style lang="scss">
  @import "../assets/main.scss";


  #block-searchform {
    form {
        height:2em; margin:0;
        display:flex; flex-direction:row; justify-content:stretch;

        div { height:100%; }
        input { display:block; height:100%; }
    }
    .form-item {
        flex:1 0 286px;
    }

    #edit-actions {
        flex:0 0 34px;

        .button {
            width:34px; height:100%;
            padding:0;
            border:0; border-radius:0;
            margin:0;
        }
    }
    input[type="search"] {
        border:0; padding:0 0 0 $size-gutter;
        width:100%; height:100%;
        font-size:$font-size-big;
        background-color:$color-selected-background;
    }

    @media all and (min-width:$viewport-medium) {
        flex:0 0 320px;
    }
  }  

#block-searchform .button {
    width:0; height:1em;
    overflow: hidden;
    text-indent: -10em;
    background-repeat:no-repeat;
    background-position: center center;
    background-size:($size-gutter*2) ($size-gutter*2);
    background-image:url('/static/img/fa-svg/white/search.svg');
}
  
</style>
   
