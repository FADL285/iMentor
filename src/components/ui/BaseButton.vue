<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: [String, Object],
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #0c2461;
  border: 1px solid #0c2461;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease-in-out;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #1e3799;
  border-color: #1e3799;
}

.flat {
  background-color: transparent;
  color: #0c2461;
  /*border: none;*/
}

.outline {
  background-color: transparent;
  border-color: #1e3799;
  color: #1e3799;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: rgba(12, 36, 97, 0.07);
}
</style>
