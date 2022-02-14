<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #0a3d62;
  color: white;
}

.backend {
  background-color: #1e3799;
  color: white;
}

.android {
  background-color: #38ada9;
  color: white;
}

.career {
  background-color: #60a3bc;
  color: white;
}
</style>
