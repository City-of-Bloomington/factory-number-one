<template>
  <component :is="wrapper" :class="['field-group']">
    <input
      :id="id"
      :disabled="disabled"
      :type="type"
      :value="value"
      :name="name"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
    <label :for="id" v-if="label">{{ label }}</label>
  </component>
</template>

<script>
/**
 * Form Inputs are used to allow users to provide text input when the expected
 * input is short. Form Input has a range of options and supports several text
 * formats including numbers. For longer input, use the form `Textarea` element.
 */
export default {
  name: "fn1-checkbox",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The type of the input checkbox.
     * `checkbox`
     */
    type: {
      type: String,
      default: "checkbox",
      validator: value => {
        return value.match(/(checkbox)/)
      },
    },
    /**
     * Text value of the input checkbox.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The label of the input checkbox.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The name of the input checkbox.
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
     * Unique identifier of the input checkbox.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Whether the form input field is disabled or not.
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
    &[type="checkbox"] {
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
    <fn1-checkbox label="Checkbox" name="checkbox-1" id="checkbox-1" value="checkbox-1"/>
    <fn1-checkbox label="Checkbox [disabled]" name="checkbox-2" id="checkbox-2" value="checkbox-2" disabled />
  </div>
  ```
</docs>
