<template>
  <component :is="type" :class="['dropdown']" role="dropdown" aria-label="dropdown group">
    <fn1-button @click.native="openMenu" v-html="text" aria-expanded="false" />

    <ul v-if="navItems" class="links" hidden>
      <li v-for="(item, index) in navItems" :key="index">
        <a
          :href="item.href"
          :class="item.class"
          :disabled="item.disabled"
          :title="item.name"
          v-html="item.name"
          @click.prevent
        ></a>
      </li>
    </ul>

    <!-- <nav class="dropdown">
      <button
        @click="openMenu"
        class="launcher"
        id="genericMenuLauncher"
        aria-haspopup="true"
        aria-expanded="false">Generic Dropdown</button>

      <div class="links" aria-labeledby="genericMenuLauncher" hidden>
        <a href="#">Manage users</a>
        <a href="#">Update resources</a>
      </div>
    </nav> -->
  </component>
</template>

<script>
/**
 * A navigation dropdown that show/hides a set of links.
 */
export default {
  name: "fn1-dropdown",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The html element used for the button group.
     * `div`
     */
    type: {
      type: String,
      default: "nav",
      validator: value => {
        return value.match(/(nav)/)
      },
    },
    text: {
      type: String,
      default: null,
    },
    /**
     * Dropdown items to be displayed in the dropdown.
     */
    navItems: {
      type: Array,
      default: null,
    },
  },
  methods: {
    // openMenu(e) {
    //   let launcher  = e.target,
    //       container = launcher.parentElement,
    //       menu      = launcher.parentElement.querySelector('.dropdown .links');
    //   console.log('launcher :: ', launcher);
    //   console.log('container :: ', container);
    //   console.log('menu :: ', menu);
    //   launcher.blur();
    //   // this.closeMenus();
    //   menu.removeAttribute("hidden");
    //   launcher.setAttribute("aria-expanded", "true");
    //   // document.addEventListener('click', this.closeMenus);
    //   e.stopPropagation();
    //   e.preventDefault();
    //   menu.focus();
    // },
    // closeMenus() {},
    //   hideMenu(thisMenu) {
    //     setTimeout(function(){thisMenu.setAttribute("hidden", "hidden");}, 300);
    //   },
    //   launcherClick(e) {
    //     alert('clicked');
    //     let launchers = document.querySelectorAll('.dropdown .launcher');
    //     let len       = launchers.length;
    //     let i         = 0;
    //     for (i=0; i<len; i++) {
    //       launchers[i].addEventListener('click', launcherClick);
    //     };
    //       let launcher  = e.target,
    //           container = launcher.parentElement,
    //           menu      = launcher.parentElement.querySelector('.dropdown .links');
    //       launcher.blur();
    //       closeMenus();
    //       menu.removeAttribute("hidden");
    //       setTimeout(function() {
    //         launcher.setAttribute("aria-expanded", "true");
    //       }, 50);
    //       document.addEventListener('click', closeMenus);
    //       e.stopPropagation();
    //       e.preventDefault();
    //       menu.focus();
    //   },
  },
}
</script>

<style lang="scss">
// .dropdown {
//   $size-gutter: $space-m;

//     display: inline-block;
//     margin: 0 $size-gutter;
//     position: relative;

//     .launcher {
//         background-repeat: no-repeat;
//         background-position: $size-gutter center;
//         background-size: ($size-gutter*2) ($size-gutter*2);
//         background-image: url('https://bloomington.in.gov/inroads/css/images/fa-svg/white/chevron-down.svg');
//         padding-left:1.7em;

//         &[aria-expanded="true"] + .links {
//             display: block;
//         }
//         &[aria-expanded="false"] + .links {
//             display: none;
//         }
//     }

//     .links {
//         background: green;
//         box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);
//         min-width: 12rem;
//         padding: $size-gutter 0;
//         position: absolute;
//             top: 100%;
//             left: 0;
//         text-align: left; // In case a menu gets embedded in a parent that is right-aligned
//         transition: opacity .125s ease-in-out;
//         z-index: 20;
//     }
//     .subgroup {
//         &:not(:first-of-type):before {
//             background-color: red;
//             color: blue;
//             content: '';
//             display: block;
//             height: 1px;
//             margin: $size-gutter;
//         }
//     }
//     a {
//         display: block;
//         padding: ($size-gutter/2) $size-gutter;
//         &:hover {
//             background-color: red;
//             color: black;
//         }
//     }
// }
</style>

<docs>
  ```jsx
    <fn1-dropdown
      text="Dropdown Button"
      :navItems="[
        {name: 'Cases',     href: '#'},
        {name: 'Locations', href: '#'},
        {name: 'Datasets',  href: '#'},
        {name: 'About',     href: '#'},
        {name: 'Misc.',     href: '#'}
      ]"
    />
  ```
</docs>
