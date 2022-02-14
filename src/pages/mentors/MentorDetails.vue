<template>
  <section>
    MENTOR DETAILS
    <router-link :to="{ name: 'mentor-contact', params: { slug: 'fadl285' } }">
      Contact
    </router-link>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'MentorDetails',
};
</script>

<style scoped></style>
