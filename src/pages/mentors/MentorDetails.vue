<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h5>{{ selectedMentor.bio }}</h5>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in selectedMentor.areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ selectedMentor.description }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'MentorDetails',
  props: ['userId'],
  computed: {
    selectedMentor() {
      return this.$store.getters['mentors/mentor'];
    },
    fullName() {
      return this.selectedMentor.firstName + ' ' + this.selectedMentor.lastName;
    },
    contactLink() {
      return {
        name: 'mentor-contact',
        props: {
          userId: this.userId,
        },
      };
    },
  },
  async beforeRouteEnter(to) {
    // console.log('BeforeRouteEnter');

    await store.dispatch('mentors/loadMentor', {
      id: to.params.userId,
    });
    const mentor = store.getters['mentors/mentor'];

    if (mentor && Object.keys(mentor).length === 0)
      return {
        name: 'NotFound',
        // preserve current path and remove the first char to avoid the target URL starting with `//`
        params: { notFound: to.path.substring(1).split('/') },
        // preserve existing query and hash if any
        query: to.query,
        hash: to.hash,
      };
  },
};
</script>

<style scoped></style>
