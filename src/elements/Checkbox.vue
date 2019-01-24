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
  name: "fn1-checkbox",
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
     * Value of the checkbox input.
     * @model
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The label of the checkbox input.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The legend of the checkboxs.
     */
    legend: {
      type: String,
      default: null,
    },
    /**
     * The name of the checkbox input.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * Unique identifier of the checkbox input.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Whether the checkbox input is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether to display the checkbox inputs inline or not.
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
.form-group {
  &.inline {
    fieldset {
      div {
        display: inline-flex;
        margin: 0 $space-xs $space-xs 0;

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
}

fieldset {
  @include stack-space($space-s);
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-xs;
  border: none;
  width: 100%;

  div {
    margin: 0 0 $space-xs 0;
    display: flex;
    align-items: center;
  }

  legend {
    margin: 0 0 $space-xs 0;
  }

  label {
    cursor: pointer;
    display: block;
    font-family: $font-text;
    font-size: $size-s;
    line-height: $size-m + 2;
    margin: 0 0 0 $space-xxs;
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
    <fn1-checkbox
      legend="Choose your favorites:"
      name="checkbox"
      :options="[
        { text: 'Toggle this custom checkbox', value: 'checkbox-1' },
        { text: 'Or toggle this one',          value: 'checkbox-2' },
        { text: 'This one is Disabled',        value: 'checkbox-3', disabled: true },
        { text: 'This is the 4th checkbox',    value: 'checkbox-4' }
      ]" />

    <fn1-checkbox
      inline
      legend="Choose your favorite inline checkboxes:"
      name="inline-checkbox"
      :options="[
        { text: 'Toggle this custom checkbox', value: 'inline-checkbox-1' },
        { text: 'Or toggle this one',          value: 'inline-checkbox-2' },
        { text: 'This one is Disabled',        value: 'inline-checkbox-3', disabled: true },
        { text: 'This is the 4th checkbox',    value: 'inline-checkbox-4' },
        { text: 'This is the 5th checkbox',    value: 'inline-checkbox-5' },
        { text: 'This is the 6th checkbox',    value: 'inline-checkbox-6' },
        { text: 'This is the 7th checkbox',    value: 'inline-checkbox-7' },
        { text: 'This is the 8th checkbox',    value: 'inline-checkbox-8' },
        { text: 'This is the 9th checkbox',    value: 'inline-checkbox-9' },
        { text: 'This is the 10th checkbox',   value: 'inline-checkbox-10' }
      ]" />
  </div>
  ```
</docs>
