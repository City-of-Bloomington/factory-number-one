<template>
  <component :is="wrapper">
    <transition name="modal">
      <div class="modal-mask" v-show="showModal" @click.self="outside">
        <div class="modal-wrapper" v-show="showModal">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">{{ title }}</slot>
            </div>

            <div class="modal-body"><slot name="body" /></div>

            <div class="modal-footer">
              <fn1-button v-show="true" @click.stop>Cancel</fn1-button>
              <fn1-button v-show="true" @click.native="destroyModal">Confirm</fn1-button>
              <!-- <slot name="footerBtnConfirm"  /> -->
            </div>
          </div>
        </div>
      </div>
    </transition>

    <fn1-button @click.native="displayModal">Show Modal</fn1-button>
  </component>
</template>

<script>
/**
 * Modals act as dialogs that overlay the page to provide additional context.
 */
export default {
  name: "fn1-modal",
  status: "ready",
  release: "1.0.0",
  metaInfo: {
    title: "Page Not Found | Vue Design System",
  },
  props: {
    /**
     * The element used for Modals.
     * `div`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    outside() {
      this.showModal = false
    },
    displayModal() {
      this.showModal = true
    },
    destroyModal() {
      this.showModal = false
    },
  },
}
</script>

<!-- note: remove the `scoped` below for use, it's only for Docs scoping -->
<style lang="scss">
body.showing-modal {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
}

.modal-mask {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  > div {
    &:last-of-type {
      margin: auto;
    }
  }
}

.modal-wrapper {
  position: absolute;
  z-index: 10000;
  display: inline-block;
  vertical-align: middle;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  margin: auto;
  top: 25%;
  left: 50%;
  transform: translate(-25%, -50%);
  width: auto;

  > div {
    &:last-of-type {
      margin: auto;
    }
  }

  .modal-container {
    width: 350px;
    margin: 0px auto;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;

    .modal-header {
      color: white;
      padding: 10px 15px;
      margin: 0;
      background-color: $color-blue;
      -webkit-border-top-left-radius: 2px;
      -webkit-border-top-right-radius: 2px;
      -moz-border-radius-topleft: 2px;
      -moz-border-radius-topright: 2px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;

      h4 {
        margin-top: 0;
        color: white;
      }
    }

    .modal-body {
      margin: 0;
      padding: 15px;
      font-size: 16px;
      max-height: 275px;
      overflow: auto;

      p {
        margin: 0 0 10px 0;
        padding: 0;
        line-height: 24px;

        &:last-of-type {
          margin: 0;
          padding: 0;
        }
      }
    }

    .modal-footer {
      background: #ccc;
      padding: 10px 15px;
      border-top: 1px solid #ccc;
      -webkit-border-bottom-right-radius: 2px;
      -webkit-border-bottom-left-radius: 2px;
      -moz-border-radius-bottomright: 2px;
      -moz-border-radius-bottomleft: 2px;
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;

      button {
        cursor: pointer;
        font-size: 14px;
        background: $color-green;
        color: white;
        padding: 5px 15px;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<docs>
  ```jsx
  <fn1-modal title="Modal Title Here">
    <p slot="body">This is where the Modal content lives.</p>
    <p slot="body">If this is an emergency, please dial 911.</p>
    <fn1-button slot="footerBtnConfirm">I Understand</fn1-button>
  </fn1-modal>
  ```
</docs>
