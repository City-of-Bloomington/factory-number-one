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
      type: String,
      default: 100,
    },
    /**
     * The value for the progress.
     */
    value: {
      type: String,
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

<style lang="scss">
progress {
  width: 100%;

  &::-webkit-progress-bar {
    width: 100%;
    background: #ccc;
  }

  &::-webkit-progress-value {
    width: 100%;
    background: $color-blue;
  }

  &::-moz-progress-bar {
    width: 100%;
  }
}
</style>

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
