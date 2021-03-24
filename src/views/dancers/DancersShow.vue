<template>
  <div class="dancers-show">
    <!-- ================================
			///// Begin page header section /////
			================================= -->
    <section id="page-header-section">
      <div
        class="section-inner no-padding bg-image"
        style="background-image: url(/assets/img/page-header/fuzzy.jpeg); background-position: 50% 50%;"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-5-dark"></div>

        <!-- Page header caption -->
        <div
          class="page-header-caption vertical-align-center text-center text-white"
        >
          <h1 class="page-header-title">
            {{ dancer.first_name }} {{ dancer.last_name }}
          </h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <!-- ===========================
			///// Begin skills section /////
			============================ -->
    <section id="skills-section">
      <div class="section-inner no-padding bg-transparent max-width-1400">
        <div class="row">
          <div class="col-md-5 margin-bottom-60 text-center">
            <p class="text-main margin-bottom-20">
              <img v-bind:src="dancer.image_url" alt="" />
            </p>
            <h2 v-if="dancer.genre" class="text-main margin-bottom-15">
              {{ dancer.first_name }} {{ dancer.last_name }}
            </h2>
            <p>Genre: {{ dancer.genre.style }}</p>
            <hr class="hr-short margin-bottom-10 " />
            <br />
            <div v-if="dancer.id == $parent.getDancerId()">
              <router-link v-bind:to="`/dancers/${dancer.id}/edit`"
                ><button>Edit Profile</button></router-link
              >
            </div>
            <a
              v-bind:href="'mailto:' + dancer.email"
              class="btn btn-dark margin-top-15"
              >Contact Dancer</a
            >

            <!-- <div v-if="dancer.id == $parent.getDancerId()">
              <router-link v-bind:to="`/dancers/${dancer.id}/edit`"
                ><button>Edit Profile</button></router-link
              >
            </div> -->
          </div>
          <!-- /.col -->

          <div class="col-md-6 text-center">
            <!-- Begin progress bar wrap -->
            <iframe
              v-if="dancer.youtube_embed"
              width="560"
              height="315"
              :src="dancer.youtube_embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <p class="margin-top-15 margin-right-5">
              {{ dancer.about }}
            </p>
            <hr class="hr-short margin-top-15 margin-right-5" />
            <br />
            <a
              :href="dancer.resume"
              class="btn btn-primary margin-top-15 margin-right-5"
              >View PDF Resume</a
            >

            <!-- <a
              v-bind:href="'mailto:' + dancer.email"
              class="btn btn-dark margin-top-15"
              >Contact Dancer</a
            > -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End skills section -->

    <!-- initial dancer show display before Bootstrap
    <h1>{{ dancer.first_name }} {{ dancer.last_name }}</h1>
    <h3 v-if="dancer.genre"><u>Genre</u>: {{ dancer.genre.style }}</h3>
    <img v-bind:src="dancer.image_url" alt="" />
    <h3><u>About</u>: {{ dancer.about }}</h3>

    <a :href="dancer.resume">Dancer Resume</a>
    <br />
    <iframe
      v-if="dancer.youtube_embed"
      width="560"
      height="315"
      :src="dancer.youtube_embed"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <br />

    <a v-bind:href="'mailto:' + dancer.email">
      <button>
        <h4>Contact Dancer</h4>
        {{ dancer.email }}
      </button></a
    >
    <div v-if="dancer.id == $parent.getDancerId()">
      <router-link v-bind:to="`/dancers/${dancer.id}/edit`"
        ><button>Edit Profile</button></router-link
      >
    </div>
    <br />
    <br />
    <router-link to="/dancers"
      ><b><button>Back to all dancers</button></b></router-link
    >
    end of initial dancer show display before Bootstrap -->
  </div>
</template>
<style>
img {
  border-radius: 8px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      dancer: {},
    };
  },
  created: function() {
    axios.get(`/api/dancers/${this.$route.params.id}`).then((response) => {
      console.log("dancers show", response);
      this.dancer = response.data;
    });
  },
  methods: {},
};
</script>
