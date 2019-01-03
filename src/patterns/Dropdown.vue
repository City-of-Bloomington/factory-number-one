<template>
  <component
    :is="type"
    :class="['navigation-dropdown']"
    role="navigation dropdown"
    aria-label="navigation dropdown"
    ref="navigationDropdown"
  >
    <details ref="dropdownDetails">
      <summary v-html="text"></summary>
      <ul v-if="navItems" :class="[{ right: align }]">
        <li v-for="(item, index) in navItems" :key="index">
          <a
            :href="item.href"
            :class="item.class"
            :disabled="item.disabled"
            :title="item.name"
            :target="item.target"
            v-html="item.name"
          ></a>
        </li>
      </ul>
    </details>
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
     * `nav`
     */
    type: {
      type: String,
      default: "nav",
      validator: value => {
        return value.match(/(nav)/)
      },
    },
    /**
     * The button text to be shown
     */
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
    /**
     * Open link in a new tab.
     */
    target: {
      type: String,
      default: "_self",
    },
    /**
     * Aligns the dropdown subnavigation element (the `ul`).
     *
     * `right` is the only option at the moment.
     */
    navAlign: {
      type: String,
      default: "left",
    },
  },
  methods: {
    outside(e) {
      let navigationDropdown = this.$refs.navigationDropdown
      let dropdownDetails = this.$refs.dropdownDetails

      if (!navigationDropdown.contains(e.target)) dropdownDetails.removeAttribute("open")
    },
  },
  mounted() {
    document.addEventListener("click", this.outside)
  },
  computed: {
    align: function() {
      if (this.navAlign == "right") return true
    },
  },
}
</script>

<style lang="scss">
.navigation-dropdown {
  position: relative;

  summary {
    @include reset;
    z-index: 1;
    position: relative;
    will-change: transform;
    transition: all 0.2s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
    margin: 0;
    padding: 0 8px;
    border: 0;
    border-radius: $radius-default;
    background: $color-blue;
    color: white;
    font-weight: $weight-semi-bold;
    font-size: $size-m;
    font-family: $font-text;
    line-height: $line-height-m;
    cursor: pointer;
  }

  ul {
    z-index: 10;
    background: white;
    border: 1px solid $color-grey;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 30px;
    min-width: 100px;
    list-style: none;
    border-radius: $radius-default;

    &.right {
      right: 0;
    }

    li {
      padding: 0 10px;

      &:hover {
        background: $color-grey-lighter;
      }

      a {
        display: inline-block;
        padding: 5px 0;
        width: 100%;
        color: tint($color-slate, 10%);
        text-decoration: none;
        font-weight: $weight-normal;
        font-size: $size-s;
        font-family: $font-text;
        line-height: $line-height-s;
      }
    }
  }
}
</style>

<docs>
  ```jsx
    <fn1-dropdown
      text="Dropdown Menu"
      navAlign="right"
      :navItems="[
        {name: 'Case',     href: 'https://google.com/', target: '_blank'},
        {name: 'Location', href: '#'},
        {name: 'Datasets', href: '#'},
        {name: 'About',    href: '#'},
        {name: 'Misc.',    href: '#'}
      ]"
    />
  ```
</docs>
