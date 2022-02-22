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
export default {
  name: 'MentorDetails',
  data() {
    return {
      selectedMentor: null,
    };
  },
  props: ['username'],
  computed: {
    fullName() {
      return this.selectedMentor.firstName + ' ' + this.selectedMentor.lastName;
    },
    contactLink() {
      return {
        name: 'mentor-contact',
        props: {
          username: this.username,
        },
      };
    },
  },
  created() {
    this.selectedMentor = this.$store.getters['mentors/mentors'].find(
      (mentor) => mentor.username === this.username
    );
  },
};
</script>

<style scoped></style>
