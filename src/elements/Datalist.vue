<template>
  <component :is="wrapper" class="field-group">
    <!-- <legend v-if="legend">{{ legend }}</legend>
    <div v-for="(item, index) in options">
      <input
        :key="index"
        :id="item.value"
        :type="type"
        :value="item.value"
        :name="name"
        :class="state"
        :disabled="item.disabled"
        @input="onInput($event.target.value)"
        @focus="onFocus($event.target.value)"
      />
      <label :for="item.value" v-if="item.text">{{ item.text }}</label>
    </div> -->

    <label :for="name" v-if="label">{{ label }}</label>
    <input :list="list" :id="name" :name="name" />
    <datalist :id="list">
      <option v-for="(item, index) in options" :value="item.value"></option>
    </datalist>
  </component>
</template>

<script>
/**
 * The HTML `<datalist>` element contains a set of `<option>` elements that represent the values available for other controls.
 */
export default {
  name: "fn1-datalist",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * Value of the datalist input.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The label of the datalist input.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The name of the datalist input.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * The name of the datalist input.
     */
    list: {
      type: String,
      default: null,
    },
    /**
     * The html element name used for the wrapper.
     * `div`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
    /**
     * Unique identifier of the datalist input.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Whether the datalist input is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Menu items to be displayed on the nav bar.
     */
    options: {
      required: true,
      type: Array,
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
.field-group {
  @include stack-space($space-s);
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-xs;
  width: 100%;

  label {
    cursor: pointer;
    display: block;
    font-family: $font-text;
    font-size: $size-s;
    line-height: $size-m + 2;
    color: tint($color-slate, 20%);
  }

  input {
  }
}
</style>

<docs>
  ```jsx
  <div>
    <fn1-datalist
      label="Choose a flavor:"
      name="datalist-name"
      list="datalist-options"
      :options="[
        { value: 'Chocolate' },
        { value: 'Coconut' },
        { value: 'Mint' },
        { value: 'Strawberry' }
      ]" />
  </div>
  ```
</docs>
