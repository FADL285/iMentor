<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <h2>Register as a mentor now!</h2>
        <mentor-form @save-data="saveData"></mentor-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import MentorForm from '@/components/mentors/MentorForm';

export default {
  name: 'MentorRegistration',
  components: { MentorForm },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async saveData(data) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('mentors/registerMentor', data);
        await this.$router.replace({ name: 'mentors' });
      } catch (err) {
        this.error = err.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped></style>
