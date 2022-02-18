<template>
  <base-card>
    <h2>Find Your Mentor</h2>
    <div class="filter-wrapper">
      <div class="filter-option">
        <input type="checkbox" id="frontend" checked @change="setFilter" />
        <label for="frontend">Front-End</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="backend" checked @change="setFilter" />
        <label for="backend">Back-End</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="android" checked @change="setFilter" />
        <label for="android">Android</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="career" checked @change="setFilter" />
        <label for="career">Career</label>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  name: 'MentorFilter',
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        android: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;

      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin: 0 0.5rem;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
