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
      <div>
        Resume:
        <input type="file" v-on:change="setFile($event)" ref="fileInput" />
      </div>

      <!-- Resume:
      <input type="text" v-model="dancer.resume" /><br /> -->
      Video:
      <input type="text" v-model="dancer.video" /><br />

      <label for="genre-id">Choose a Genre:</label>
      <select value="1" name="genre" v-model="dancer.genre_id">
        <option value="1">Ballet</option>
        <option value="2">Modern</option>
        <option value="3">Contemporary</option>
        <option value="4">Tap</option>
        <option value="5">Hip-Hop</option>
      </select>
      <br />
      Image:
      <input type="text" v-model="dancer.image_url" /><br />
      Email:
      <input type="text" v-model="dancer.email" /><br />
      Password:
      <input type="text" v-model="dancer.password" /><br />
      Password Confirmation:
      <input type="text" v-model="dancer.password_confirmation" /><br />

      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="destroyDancer()">Destroy</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      dancer: {
        email: "",
      },
      errors: [],
      resumeFile: "",
      password: "",
      password_confirmation: "",
    };
  },
  created: function() {
    axios.get(`/api/dancers/${this.$route.params.id}`).then((response) => {
      console.log("dancer show", response);
      this.dancer = response.data;
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.resumeFile = event.target.files[0];
      }
    },
    updateDancer: function() {
      var formData = new FormData();
      formData.append("email", this.dancer.email);
      formData.append("password", this.dancer.password);
      formData.append(
        "password_confirmation",
        this.dancer.password_confirmation
      );
      formData.append("first_name", this.dancer.first_name);
      formData.append("last_name", this.dancer.last_name);
      formData.append("image_url", this.image_url);
      formData.append("about", this.dancer.about);
      formData.append("image_url", this.dancer.image_url);
      formData.append("genre_id", this.dancer.genre_id);
      if (this.resumeFile) {
        formData.append("resume_file", this.resumeFile);
      }
      // var params = {
      //   email: dancer.name,
      //   password: dancer.password,
      //   password_confirmation: dancer.password_confirmation,
      //   first_name: dancer.first_name,
      //   last_name: dancer.last_name,
      //   image_url: dancer.image_url,
      //   resume: dancer.resume,
      //   about: dancer.about,
      //   video: dancer.video,
      //   genre_id: dancer.genre_id,
      // };
      axios
        .patch(`/api/dancers/${this.dancer.id}`, formData)
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
          localStorage.removeItem("dancer_id");
          this.$router.push("/dancers");
        });
      }
    },
  },
};
</script>
