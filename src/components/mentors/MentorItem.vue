<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h5 class="bio">
      {{ bio }}
    </h5>
    <div class="areas">
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="mentorContactLink">Contact</router-link>
      <router-link :to="mentorDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MentorItem',
  props: {
    firstName: String,
    lastName: String,
    username: String,
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
          slug: this.username,
        },
      };
    },
    mentorDetailsLink() {
      return {
        name: 'mentor',
        params: {
          slug: this.username,
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
