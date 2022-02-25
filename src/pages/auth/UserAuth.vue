<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      {{ error }}
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm" novalidate>
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
          <label for="password">Password</label>
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
        <base-button type="submit" class="capitalize">{{ mode }}</base-button>
        <base-button
          type="button"
          mode="flat"
          @click="switchAuthMode"
          class="capitalize"
          >{{ switchAuthModeButtonCaption }}</base-button
        >
      </form>
    </base-card>
  </div>
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
      isLoading: false,
      error: null,
    };
  },
  computed: {
    switchAuthModeButtonCaption() {
      return this.mode === 'login' ? 'Signup instead' : 'login instead';
    },
  },
  methods: {
    async submitForm() {
      this.isValidForm =
        this.$refs.email.checkValidity() && this.password.length > 6;

      if (!this.isValidForm) return;

      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
        const redirectTo = this.$route.query.redirect || 'mentors';
        await this.$router.replace({ name: redirectTo });
      } catch (error) {
        this.error = error.message || 'Failed to signup try letter';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
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
