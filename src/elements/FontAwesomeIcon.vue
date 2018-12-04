<template>
  <component :is="type" :aria-label="ariaLabel" :icon="icon" />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */
export default {
  name: "FontAwesomeIcon",
  status: "prototype",
  release: "1.0.0",
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: "currentColor",
    },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: "icon",
    },
    /**
     * The html element name used for the icon.
     * `svg`
     */
    type: {
      type: String,
      default: "svg",
    },
  },
  // data() {
  //   return {
  //     svg: req("./" + this.name + ".svg").replace(/^<svg /, `<svg style="fill: ${this.fill}" `),
  //   }
  // },
}
</script>

<style lang="scss">
// This is here just to provide defaults if the original tokens are removed.
// Can be removed once you’re ready to start defining your own sizes.
@import "../../docs/docs.tokens.scss";

// We don’t want to use scoped since these styles need to cascade down to SVGs.
// We also want to be able to style .icon inside buttons etc.
.icon {
  @include reset;
  @include inline-space($space-m);

  svg {
    width: $space-m;
    height: $space-m;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <font-awesome-icon icon="coffee" />
  </div>
  ```
</docs>
