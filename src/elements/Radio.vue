<template>
  <component :is="wrapper" :class="['field-group']">
    <input
      :id="id"
      :disabled="disabled"
      :type="type"
      :value="value"
      :name="name"
      :class="state"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
    <label :for="id" v-if="label">{{ label }}</label>
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
      default: "div",
      validator: value => {
        return value.match(/(div)/)
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
    <fn1-radio label="One" name="radio" id="radio-1" value="radio-1"/>
    <fn1-radio label="Two [disabled]" name="radio" id="radio-2" value="radio-2" disabled />
    <fn1-radio label="Three" name="radio" id="radio-3" value="radio-3"/>
    <fn1-radio label="Four" name="radio" id="radio-4" value="radio-4"/>
  </div>
  ```
</docs>
