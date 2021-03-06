<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("employer_id");
    localStorage.removeItem("dancer_id");
    console.log("you have logged out");
    this.$router.push("/");
  },
};
</script>
