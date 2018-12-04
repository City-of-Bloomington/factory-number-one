<template>
  <component :is="type">
    <thead>
      <tr>
        <th v-for="(item, index) in header" :key="index">{{item}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in rows" :key="index">
        <td>{{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.tools}}</td>
      </tr>
    </tbody>
  </component>
</template>

<script>
/**
 * Table
 */
export default {
  name: "Table",
  status: "ready",
  release: "1.0.0",
  model: {
    prop: "active",
  },
  props: {
    type: {
      type: String,
      default: "table",
    },
    header: {
      required: true,
      type: Array,
    },
    rows: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;

  thead {
    th {
      font-weight: $weight-semi-bold;
      text-align: left;
      padding: 0 0 $space-xs $space-xs;
      // background: red;
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background: rgba($color-cloud, 0.3);
      }
    }

    td {
      border-top: 1px solid #ddd;
      padding: $space-xs;

      &:last-of-type {
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <Table
    :header="['First Name', 'Last Name', 'Tools']"
    :rows="[
      { firstName: 'Adam',    lastName: 'Butcher', tools: 'Macbook Pro, Sublime Text' },
      { firstName: 'Cliff',   lastName: 'Ingham',  tools: 'Dell, Linux' },
      { firstName: 'Charles', lastName: 'Brandt',  tools: 'Macbook Pro, VSCode' },
      { firstName: 'Seth',    lastName: 'Tierney', tools: 'Every tool' }
    ]"
  />
  ```
</docs>
