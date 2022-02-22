<template>
  <section>
    <base-card>
      <h1>Page Not Found</h1>
      <p>
        This page could not be found. Go to
        <router-link :to="{ name: 'mentors' }">Home</router-link>
      </p>
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped></style>
