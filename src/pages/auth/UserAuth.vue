<template>
  <form @submit.prevent="submitForm" novalidate>
    <base-card>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model.trim="email"
          ref="email"
          required
        />
      </div>
      <div class="form-control">
        <label for="password">E-Mail</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model.trim="password"
        />
      </div>
      <p v-if="!isValidForm" class="errors">
        Please Enter a valid email & password must be at least 7 characters
      </p>
      <base-button class="capitalize">{{ mode }}</base-button>
      <base-button
        type="button"
        mode="flat"
        @click="switchAuthMode"
        class="capitalize"
        >{{ switchAuthModeButtonCaption }}</base-button
      >
    </base-card>
  </form>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      isValidForm: true,
      mode: 'login',
    };
  },
  computed: {
    switchAuthModeButtonCaption() {
      return this.mode === 'login' ? 'Signup instead' : 'login instead';
    },
  },
  methods: {
    submitForm() {
      this.isValidForm =
        this.$refs.email.checkValidity() && this.password.length > 6;

      if (!this.isValidForm) return;

      console.log('login');
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
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

.capitalize {
  text-transform: capitalize;
}
</style>
