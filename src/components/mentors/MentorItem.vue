<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h5 class="bio">
      {{ bio }}
    </h5>
    <div class="areas">
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="mentorContactLink" mode="flat"
        >Contact</base-button
      >
      <base-button link :to="mentorDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MentorItem',
  props: {
    id: String,
    firstName: String,
    lastName: String,
    bio: String,
    areas: Array,
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    mentorContactLink() {
      return {
        name: 'mentor-contact',
        params: {
          userId: this.id,
        },
      };
    },
    mentorDetailsLink() {
      return {
        name: 'mentor',
        params: {
          userId: this.id,
        },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h5 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
