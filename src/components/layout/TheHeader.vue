<template>
  <header>
    <nav>
      <h1>
        <router-link to="/" class="logo">
          <svg
            class="logo"
            width="141"
            height="40"
            viewBox="0 0 141 40"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs><path id="a" d="M0 .022h140.858v39.325H0V.022z"></path></defs>
            <g fill="none" fill-rule="evenodd">
              <path
                d="M8.353.022L0 28.962l28.94 8.354 8.354-28.94L8.354.022zM4.57 26.442l6.305-21.85 21.85 6.306-6.307 21.85-21.85-6.307z"
                fill="#4287FF"
              ></path>
              <path
                d="M16.918 22.958h3.457v16.006h-3.457V22.958zm1.73-6.786c1.407 0 2.496 1.088 2.496 2.496 0 1.41-1.09 2.498-2.497 2.498-1.41 0-2.497-1.088-2.497-2.498 0-1.408 1.088-2.496 2.497-2.496zM56.62 29.49c0-2.083-.865-3.587-3.2-3.587-2.466 0-3.907 1.44-3.907 5.377v7.684h-3.49V29.49c0-2.083-.864-3.587-3.2-3.587-2.56 0-4.034 1.568-4.034 5.602v7.46h-3.4V22.957h3.392v1.632c1.056-1.22 2.72-2.02 4.48-2.02 2.594 0 4.066 1.15 4.994 2.624 1.345-1.603 2.914-2.627 5.442-2.627 4.64 0 6.402 2.817 6.402 7.234v9.157h-3.49v-9.47zm18.53-.258c-.384-2.113-1.73-3.33-3.874-3.33s-3.713 1.28-4.225 3.33h8.1zm2.945 7.106c-1.473 1.6-3.425 3.01-6.82 3.01-4.577 0-7.97-3.457-7.97-8.42 0-4.448 3.01-8.354 7.97-8.354 4.643 0 7.652 3.617 7.652 8.355v1.24H66.795c.32 2.466 2.24 3.84 4.48 3.84 2.306 0 3.78-.96 4.995-2.366l1.825 2.687zm7.265-4.833v7.46h-3.395V22.957h3.394v1.632c1.12-1.22 2.68-2.02 4.602-2.02 4.32 0 6.05 3.01 6.05 7.04v9.348H92.56V29.61c0-2.24-.895-3.713-3.168-3.713-2.177 0-4.033 1.25-4.033 5.602m16.35-5.41h-2.98v-3.13h2.978v-4.29h3.393v4.29h4.164v3.137H105.1v8.355c0 .897.386 1.377 1.154 1.408.863.033 1.95-.03 3.168-.192v3.106c-1.056.224-2.112.352-3.17.352-3.008 0-4.544-1.313-4.544-4.835V26.1zm22.915 4.865c0-2.787-1.984-5.06-4.77-5.06-2.784 0-4.77 2.273-4.77 5.06 0 2.784 1.986 5.06 4.77 5.06 2.786 0 4.77-2.276 4.77-5.06m3.586 0c0 4.642-3.713 8.387-8.354 8.387-4.64 0-8.355-3.747-8.355-8.388 0-4.64 3.714-8.387 8.356-8.387 4.64 0 8.356 3.745 8.356 8.387m12.64-4.39c-.543-.19-1.312-.32-1.984-.32-1.345 0-2.498.48-3.138 1.41-.704.993-.864 2.337-.864 3.906v7.393h-3.457v-16h3.362v1.792c.928-1.34 2.37-2.21 4.097-2.21.703 0 1.376.1 1.984.26v3.777z"
                fill="#1E2D66"
              ></path>
            </g>
          </svg>
        </router-link>
      </h1>

      <ul>
        <li>
          <router-link :to="{ name: 'mentors' }"> All Mentors </router-link>
        </li>
        <li v-if="!isMentor">
          <router-link :to="{ name: 'mentor-register' }">
            Become a Mentor
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'requests' }"> Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    isMentor() {
      return this.$store.getters['mentors/isMentor'];
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #1e2d66;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  transition: color 0.3s ease-in-out;
}

ul a:active,
ul a:hover,
ul a.router-link-active {
  color: #59e944;
}

h1 {
  margin: 0;
}

h1 a.logo path {
  fill: white;
  transition: fill 0.3s ease-in-out;
}

h1 a.logo:hover path {
  fill: #59e944;
  transition: fill 0.3s ease-in-out;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
