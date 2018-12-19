<template>
  <component :is="wrapper">
    <div class="modal-mask" id="expand">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> {{ title }} </slot>
          </div>

          <div class="modal-body"><slot name="body"></slot></div>

          <div class="modal-footer"><slot name="footer"></slot></div>
        </div>
      </div>
    </div>

    <fn1-button type="a" class="modal-button" href="#expand">Show Modal</fn1-button>

    <a @click.prevent href="#example1">Open example #1</a>
    <a v-on:click="greet" href="#example2">Open example #2</a>

    <div class="lightbox" id="example1">
      <figure>
        <a href="#" class="close"></a>
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim, placerat id
          eleifend eu, semper vel sem.
        </figcaption>
      </figure>
    </div>

    <div class="lightbox" id="example2">
      <figure>
        <a href="#" class="close"></a>
        <figcaption>
          Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam quis sapien
          dignissim auctor. Quisque quis neque arcu, nec gravida magna.
        </figcaption>
      </figure>
    </div>
  </component>
</template>

<script>
/**
 * Modals are pretty sweet! :]
 */
export default {
  name: "fn1-modal",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The component used for Alerts.
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
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    greet: function(event) {
      event.preventDefault()

      if (event) {
        console.log(event.currentTarget)
        console.log(event)
        console.log(event.target.tagName)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
  display: none;
  // display: table;

  &:target {
    display: table;
  }
}

.lightbox {
  display: none;

  &:target {
    display: table;
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;

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
      color: black;
      font-size: 16px;
      max-height: 275px;
      overflow: auto;

      p {
        margin: 0 0 10px 0;
        line-height: 24px;

        &:last-of-type {
          margin: 0;
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

.modal-button {
  cursor: pointer;
  background: pink;
}
</style>

<docs>
  ```jsx
  <fn1-modal title="Modal Title Here">
    <p slot="body">This is where the Modal content lives.</p>
    <p slot="body">If this is an emergency, please dial 911.</p>
    <button slot="footer" type="a" class="modal-button" href="#expand">I Understand</button>
  </fn1-modal>
  ```
</docs>
