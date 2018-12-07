<template>
  <component :is="wrapper" :class="['field-group']">
    <label :for="id" v-if="label">{{ label }}</label>
    <progress :id="id" :name="id" :max="max" :value="value">{{ value }}%</progress>
  </component>
</template>

<script>
/**
 * The HTML `<progress>` element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 */
export default {
  name: "fn1-progress",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The max for the progress.
     */
    max: {
      type: Number,
      default: 100,
    },
    /**
     * The value for the progress.
     */
    value: {
      type: Number,
      default: null,
    },
    /**
     * The label of the progress.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The html element class name used for the wrapper.
     * `field-group`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
    /**
     * Unique identifier of the progress.
     */
    id: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(value) {
      this.$emit("change", value)
    },
    onFocus(value) {
      this.$emit("focus", value)
    },
  },
}
</script>

<style lang="scss" scoped></style>

<docs>
  ```jsx
    <fn1-progress
      label="File progress:"
      id="file-progress"
      max="100"
      value="70"
    />
  ```
</docs>
