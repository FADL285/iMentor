<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link :to="{ name: 'mentor-register' }"
        >Become a Mentor</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'MentorsList',
};
</script>

<style scoped></style>
