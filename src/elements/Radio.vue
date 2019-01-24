<template>
  <component :is="wrapper" :class="['form-group', { inline: inline }]">
    <fieldset>
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
    </fieldset>
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
     * @model
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
     * Whether to display the radio inputs inline or not.
     * `true, false`
     */
    inline: {
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
</style>

<docs>
  ```jsx
  <div>
    <fn1-radio
      legend="Choose your favorite radio:"
      name="radios"
      :options="[
        { text: 'Toggle this custom radio', value: 'radio-1' },
        { text: 'Or toggle this one',       value: 'radio-2' },
        { text: 'This one is Disabled',     value: 'radio-3', disabled: true },
        { text: 'This is the 4th radio',    value: 'radio-4' }
      ]" />

    <fn1-radio
      inline
      legend="Choose your favorite inline radio:"
      name="inline-radios"
      :options="[
        { text: 'Toggle this custom radio', value: 'inline-radio-1' },
        { text: 'Or toggle this one',       value: 'inline-radio-2' },
        { text: 'This one is Disabled',     value: 'inline-radio-3', disabled: true },
        { text: 'This is the 4th radio',    value: 'inline-radio-4' },
        { text: 'This is the 5th radio',    value: 'inline-radio-5' },
        { text: 'This is the 6th radio',    value: 'inline-radio-6' }
      ]" />
  </div>
  ```
</docs>
