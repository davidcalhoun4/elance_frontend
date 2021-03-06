<template>
  <div class="dancers-edit">
    <h1>Edit Dancer</h1>
    <form v-on:submit.prevent="updateDancer(dancer)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      First Name:
      <input type="text" v-model="dancer.first_name" /><br />
      Last Name:
      <input type="text" v-model="dancer.last_name" /><br />
      About:
      <input type="text" v-model="dancer.about" /><br />
      Resume:
      <input type="text" v-model="dancer.resume" /><br />
      Video:
      <input type="text" v-model="dancer.video" /><br />
      Genre:
      <input type="text" v-model="dancer.genre" /><br />
      Image:
      <input type="text" v-model="dancer.image_url" /><br />
      Email:
      <input type="text" v-model="dancer.email" /><br />
      Password:
      <input type="text" v-model="dancer.password" /><br />
      Password Confirmation:
      <input type="text" v-model="dancer.password_confirmation" /><br />

      <input type="submit" value="Update Dancer" />
    </form>
    <button v-on:click="destroyDancer()">Destroy</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      dancer: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/dancers/${this.$route.params.id}`).then((response) => {
      console.log("dancer show", response);
      this.dancer = response.data;
    });
  },
  methods: {
    updateDancer: function(dancer) {
      var params = {
        email: dancer.name,
        password: dancer.password,
        password_confirmation: dancer.password_confirmation,
        first_name: dancer.first_name,
        last_name: dancer.last_name,
        image: dancer.image_url,
        resume: dancer.resume,
        about: dancer.about,
        video: dancer.video,
        genre: dancer.genre_id,
      };
      axios
        .patch(`/api/dancers/${this.dancer.id}`, params)
        .then((response) => {
          console.log("dancer update", response);
          this.$router.push(`/dancers/${this.dancer.id}`);
        })
        .catch((error) => {
          console.log("dancer update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyDancer: function() {
      if (confirm("Are you 100% certain you want to delete this dancer?")) {
        axios.delete(`/api/dancers/${this.dancer.id}`).then((response) => {
          console.log(response.data);
          console.log("dancer deleted");
          this.$router.push("/dancers");
        });
      }
    },
  },
};
</script>
