<template>
  <component v-show="isActive" :is="wrapper" class="tab-pane"> <slot /> </component>
</template>

<script>
/**
 * These are individual Tabs for the Tabs component. They are not meant to be used individually.
 *
 * eg. They are tab-pane `elements` that make up the Tabs `pattern`.
 */
export default {
  name: "fn1-tab",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * Applies an `active` css class dynamically.
     */
    selected: {
      type: Boolean,
      default: false,
    },
    /**
     * The name of each Tab.
     */
    name: {
      type: String,
      default: null,
      required: true,
    },
    /**
     * The element used for the Tabs component.
     * `div`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-")
    },
  },
  mounted() {
    this.isActive = this.selected
  },
}
</script>

<style lang="scss"></style>

<!-- Tab styles are located in patterns/Tabs.vue -->
<docs>
  ```jsx
    <fn1-tab name="Tab One" :selected="true">
      <p>This is the content area for Tab one.</p>
    </fn1-tab>
  ```
</docs>
