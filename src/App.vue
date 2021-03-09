<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home | </router-link>
      <!-- <router-link to="/about">About | </router-link> -->
      <router-link v-if="isLoggedIn()" to="/dancers"
        >Dancer Index | </router-link
      ><router-link v-if="isLoggedIn()" to="/dancers/new"
        >Dancer New |
      </router-link>
      <router-link v-if="isLoggedIn()" to="/posts">Post Index | </router-link>
      <router-link v-if="isLoggedIn()" to="/posts/new">Post New | </router-link>
      <router-link v-if="!isLoggedIn()" to="/dancer/signup"
        >Dancer Signup |
      </router-link>
      <router-link v-if="!isLoggedIn()" to="/dancer/login"
        >Dancer Login |
      </router-link>
      <router-link v-if="!isLoggedIn()" to="/employer/signup"
        >Employer Signup |
      </router-link>
      <router-link v-if="!isLoggedIn()" to="/employer/login"
        >Employer Login |
      </router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.jwt;
    },
    getDancerId: function() {
      return localStorage.dancer_id;
    },
    getEmployerId: function() {
      return localStorage.employer_id;
    },
  },
};
</script>
