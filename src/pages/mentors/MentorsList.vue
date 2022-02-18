<template>
  <mentor-filter @change-filter="setFilters"></mentor-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline"> Refresh </base-button>
        <base-button link :to="{ name: 'mentor-register' }">
          Become a Mentor
        </base-button>
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
import MentorFilter from '@/components/mentors/MentorFilter';
export default {
  name: 'MentorsList',
  components: { MentorFilter, MentorItem },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        android: true,
        career: true,
      },
    };
  },
  computed: {
    filteredMentors() {
      const mentors = this.$store.getters['mentors/mentors'];
      return mentors.filter((mentor) => {
        if (this.activeFilters.frontend && mentor.areas.includes('frontend'))
          return true;
        if (this.activeFilters.backend && mentor.areas.includes('backend'))
          return true;
        if (this.activeFilters.android && mentor.areas.includes('android'))
          return true;
        return this.activeFilters.career && mentor.areas.includes('career');
      });
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
