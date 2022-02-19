<template>
  <form @submit.prevent="submitForm" novalidate>
    <div class="form-control">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        v-model.trim="email"
        ref="email"
      />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        rows="5"
        v-model.trim="message"
      ></textarea>
    </div>
    <p class="errors" v-if="!isValidForm">
      Please enter a valid email & non-empty message.
    </p>
    <div class="actions">
      <base-button> Send Message </base-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactMentor',
  data() {
    return {
      email: '',
      message: '',
      isValidForm: true,
    };
  },
  methods: {
    submitForm() {
      this.isValidForm =
        this.message !== '' && this.$refs.email.checkValidity();
      if (!this.isValidForm) return;

      this.$store.dispatch('requests/contactMentor', {
        mentorUsername: this.$route.params.username,
        email: this.email,
        message: this.message,
      });
      this.$router.replace({ name: 'mentors' });
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
