<template>
  <section>
    <base-card>
      <h2>Register as a mentor now!</h2>
      <mentor-form @save-data="saveData"></mentor-form>
    </base-card>
  </section>
</template>

<script>
import MentorForm from '@/components/mentors/MentorForm';

export default {
  name: 'MentorRegistration',
  components: { MentorForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('mentors/registerMentor', data);
      this.$router.replace({ name: 'mentors' });
    },
  },
};
</script>

<style scoped></style>
