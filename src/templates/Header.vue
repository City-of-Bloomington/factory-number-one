<template>
  <component :is="type"> this is the header area </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "fn1-header",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the component.
     * `header`
     */
    type: {
      type: String,
      default: "header",
    },
  },
}
</script>

<style lang="scss">
header {
  width: 100%;
  background: red;

  &.full-width {
    padding: 0;
  }
}
</style>

<docs>
  ```jsx
  <fn1-header />
  ```
</docs>
