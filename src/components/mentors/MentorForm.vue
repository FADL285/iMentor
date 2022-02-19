<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstname.isValid }">
      <label for="firstname">First Name</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        v-model.trim="firstname.val"
        @blur="clearValidity('firstname')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !lastname.isValid }">
      <label for="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        v-model.trim="lastname.val"
        @blur="clearValidity('lastname')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !bio.isValid }">
      <label for="bio">Bio</label>
      <input
        type="text"
        name="bio"
        id="bio"
        v-model.trim="bio.val"
        @blur="clearValidity('bio')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          name="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Front-End Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          name="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Back-End Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="android"
          name="android"
          value="android"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="android">Android Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          name="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <p v-if="!isValidForm" class="invalid">
      Please fix above errors and try again.
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'MentorForm',
  emits: ['save-data'],
  data() {
    return {
      firstname: {
        val: '',
        isValid: true,
      },
      lastname: {
        val: '',
        isValid: true,
      },
      bio: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      isValidForm: true,
    };
  },
  methods: {
    clearValidity(input) {
      if (this[input].val !== '' || this[input].val.length !== 0)
        this[input].isValid = true;
    },
    validateForm() {
      this.isValidForm = true;
      const inputs = ['firstname', 'lastname', 'bio', 'description', 'areas'];
      for (const input of inputs) {
        if (this[input].val === '' || this[input].val.length === 0) {
          this[input].isValid = false;
          this.isValidForm = false;
        }
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.isValidForm) return;

      const formData = {
        first: this.firstname.val,
        last: this.lastname.val,
        bio: this.bio.val,
        desc: this.description.val,
        areas: this.areas.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid,
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
