<template>
  <component :is="wrapper">
    <legend v-if="legend">{{ legend }}</legend>
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
    </div>
  </component>
</template>

<script>
/**
 * Radio buttons are normally presented in groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.
 */
export default {
  name: "fn1-radio",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The type of input field.
     * `radio`
     */
    type: {
      type: String,
      default: "radio",
      validator: value => {
        return value.match(/(radio)/)
      },
    },
    /**
     * Value of the radio input.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The label of the radio input.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The legend of the radios.
     */
    legend: {
      type: String,
      default: null,
    },
    /**
     * The name of the radio input.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * The html element name used for the wrapper.
     * `div`
     */
    wrapper: {
      type: String,
      default: "fieldset",
      validator: value => {
        return value.match(/(fieldset)/)
      },
    },
    /**
     * Unique identifier of the radio input.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Whether the radio input is disabled or not.
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

<style lang="scss" scoped>
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
    &[type="radio"] {
      &[disabled="disabled"] {
        cursor: not-allowed;

        + label {
          color: tint($color-slate, 40%);
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <fn1-radio
      legend="Choose your favorite radio"
      name="radios"
      :options="[
        { text: 'Toggle this custom radio', value: 'first' },
        { text: 'Or toggle this one',       value: 'second' },
        { text: 'This one is Disabled',     value: 'third', disabled: true },
        { text: 'This is the 4th radio',    value: 4 }
      ]" />
  </div>
  ```
</docs>
