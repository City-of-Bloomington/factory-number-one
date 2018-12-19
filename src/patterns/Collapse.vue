<template>
  <component :is="type"> <summary v-html="summary"></summary> <slot /> </component>
</template>

<script>
/**
 * Toggle the heading by clicking to view/hide the details.
 */
export default {
  name: "fn1-collapse",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The component used for Collapse.
     */
    type: {
      type: String,
      default: "details",
      validator: value => {
        return value.match(/(details)/)
      },
    },
    /**
     * The heading that will toggle the collapse state.
     */
    summary: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss"></style>

<docs>
  ```jsx
  <fn1-collapse summary="Click here">
    <p><strong>Holy Guacamole!</strong> Better make some more.</p>
  </fn1-collapse>
  ```
</docs>
