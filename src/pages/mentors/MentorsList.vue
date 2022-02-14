<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <button>Refresh</button>
        <router-link :to="{ name: 'mentor-register' }">
          Become a Mentor
        </router-link>
      </div>
      <ul v-if="hasMentors">
        <mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :first-name="mentor.firstName"
          :last-name="mentor.lastName"
          :username="mentor.username"
          :bio="mentor.bio"
          :areas="mentor.areas"
        ></mentor-item>
      </ul>
      <h3 v-else>No Mentors Found</h3>
    </base-card>
  </section>
</template>

<script>
import MentorItem from '@/components/mentors/MentorItem';
import BaseCard from '@/components/ui/BaseCard';
export default {
  name: 'MentorsList',
  components: { BaseCard, MentorItem },
  computed: {
    filteredMentors() {
      return this.$store.getters['mentors/mentors'];
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
