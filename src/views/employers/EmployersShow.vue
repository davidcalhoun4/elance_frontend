<template>
  <div class="employers-show">
    <!-- ==============================
			///// Begin services section /////
			=============================== -->
    <section id="services-section">
      <div class="row margin-bottom-100">
        <div class="col-md-4">
          <img
            v-bind:src="employer.image_url"
            alt=""
            class="text-main margin-bottom-15"
            width="310"
            height="310"
          />
          <h2 class="text-main margin-bottom-15">
            {{ employer.company_name }}
          </h2>
          <p>Type: {{ employer.employer_type }}</p>
          <hr class="hr-short" />
          <br />
          <a
            v-bind:href="'mailto:' + employer.email"
            class="btn btn-dark margin-top-15"
            >Contact Employer</a
          >
        </div>
        <!-- /.col -->

        <div class="col-md-6">
          <!-- <p>Type: {{ employer.employer_type }}</p> -->
          <hr class="hr-short" />
          <p>
            <u>About {{ employer.company_name }} </u>
            {{ employer.description }}
          </p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Begin info box wrap -->
      <div class="info-box-wrap">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <!-- Begin info box 
							* Use class "ib-bordered" for box border.
							* Use class "ib-hover" for box hover effect.
							-->
            <div class="info-box ib-bordered ib-hover">
              <span class="info-box-icon"
                ><i class="fa fa-paint-brush"></i
              ></span>
              <h3 class="info-box-title">designing</h3>
              <hr class="hr-short" />
              <p class="info-box-text">
                Cras faucibus nisi eu vehicula fermentum. Integer ultricies nisl
                id enim varius, at pharetra.
              </p>
              <a href="#" class="btn btn-link btn-sm">read more...</a>
            </div>
            <!-- End infobox -->
          </div>
          <!-- /.col -->

          <div class="col-lg-3 col-sm-6">
            <!-- Begin info box 
							* Use class "ib-bordered" for box border.
							* Use class "ib-hover" for box hover effect.
							-->
            <div class="info-box ib-bordered ib-hover">
              <span class="info-box-icon"><i class="fa fa-code"></i></span>
              <h3 class="info-box-title">developing</h3>
              <hr class="hr-short" />
              <p class="info-box-text">
                Cras faucibus nisi eu vehicula fermentum. Integer ultricies nisl
                id enim varius, at pharetra.
              </p>
              <a href="#" class="btn btn-link btn-sm">read more...</a>
            </div>
            <!-- End infobox -->
          </div>
          <!-- /.col -->

          <div class="col-lg-3 col-sm-6">
            <!-- Begin info box 
							* Use class "ib-bordered" for box border.
							* Use class "ib-hover" for box hover effect.
							-->
            <div class="info-box ib-bordered ib-hover">
              <span class="info-box-icon"><i class="fa fa-globe"></i></span>
              <h3 class="info-box-title">branding</h3>
              <hr class="hr-short" />
              <p class="info-box-text">
                Cras faucibus nisi eu vehicula fermentum. Integer ultricies nisl
                id enim varius, at pharetra.
              </p>
              <a href="#" class="btn btn-link btn-sm">read more...</a>
            </div>
            <!-- End infobox -->
          </div>
          <!-- /.col -->

          <div class="col-lg-3 col-sm-6">
            <!-- Begin info box 
							* Use class "ib-bordered" for box border.
							* Use class "ib-hover" for box hover effect.
							-->
            <div class="info-box ib-bordered ib-hover">
              <span class="info-box-icon"><i class="fa fa-users"></i></span>
              <h3 class="info-box-title">marketing</h3>
              <hr class="hr-short" />
              <p class="info-box-text">
                Cras faucibus nisi eu vehicula fermentum. Integer ultricies nisl
                id enim varius, at pharetra.
              </p>
              <a href="#" class="btn btn-link btn-sm">read more...</a>
            </div>
            <!-- End infobox -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row margin-top-100 margin-auto max-width-800">
          <div class="col-md-12 text-center">
            <p>
              Duis mattis quam quis quam cursus, a rutrum ante luctus. Phasellus
              porta ornare enim ac euismod. Nulla fringilla lectus ac tincidunt
              viverra a accumsan <a href="#">sapien mollis</a>.
            </p>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- End info box wrap -->
    </section>
    <!-- End services section -->

    <h1>
      <u>{{ employer.company_name }}</u>
    </h1>
    <p>Type: {{ employer.employer_type }}</p>
    <img v-bind:src="employer.image_url" alt="" />
    <h3>{{ employer.description }}</h3>
    <a v-bind:href="'mailto:' + employer.email">
      <h4><button>Contact Employer</button></h4>
    </a>
    <div v-if="employer.id == $parent.getEmployerId()">
      <router-link v-bind:to="`/employers/${employer.id}/edit`">
        <button>Edit Employer</button></router-link
      >
    </div>
    <br />
    <h2><u>Employers Postings</u></h2>
    <div v-for="post in employer.posts" v-bind:key="post">
      <router-link :to="`/posts/${post.id}`">
        <h3>Title: {{ post.title }}</h3>
      </router-link>
    </div>

    <router-link to="/employers"
      ><b><button>Back to all employers</button></b></router-link
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      employer: {},
    };
  },
  created: function() {
    axios.get(`/api/employers/${this.$route.params.id}`).then((response) => {
      console.log("employers show", response);
      this.employer = response.data;
    });
  },
  methods: {},
};
</script>
