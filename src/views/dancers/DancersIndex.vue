<template>
  <div class="dancers-index">
    <!-- ================================
			///// Begin page header section /////
			================================= -->
    <section id="page-header-section">
      <div
        class="section-inner no-padding bg-image"
        style="background-image: url(/assets/img/page-header/crystal_pite.jpeg); background-position: 50% 50%;"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-5-dark"></div>

        <!-- Page header caption -->
        <div
          class="page-header-caption vertical-align-center text-center text-white"
        >
          <h1 class="page-header-title">Browse Dancers</h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <div class=" text-center margin-top-35">
      Search Dancers by Genre Or Name:
      <input type="text" v-model="filter" placeholder="i.e. Ballet or Colin" />
    </div>
    <!-- ==============================
			///// Begin blog list section /////
			=============================== -->
    <section id="blog-list-section">
      <!-- Begin blog list
				=====================
				* Use class "blog-list-classic" to enable classic blog list layout.
				-->
      <div class="blog-list">
        <div class="blog-wrap">
          <!-- Begin blog list item 1 
						============================
						* Use class "no-margin" to disable space between blog items.
						-->
          <div
            v-for="dancer in filterBy(dancers, filter, 'genre', 'first_name')"
            v-bind:key="dancer.id"
            class="blog-list-item row text-center"
          >
            <!-- Left column -->
            <div class="col col-md-6 col-md-push-6 no-padding">
              <img v-bind:src="dancer.image_url" alt="" />
            </div>
            <!-- /.col -->

            <!-- Right column -->
            <div class="col col-md-6 col-md-pull-6 no-padding">
              <router-link :to="`/dancers/${dancer.id}`">
                <div class="bco blog-list-info">
                  <h2 class="blog-list-title">
                    <a
                      href="blog-single-no-sidebar.html"
                      title="Aenean Odio Metus"
                      >{{ dancer.first_name }} {{ dancer.last_name }}</a
                    >
                  </h2>
                  <div class="blog-list-meta">
                    <a class="article-time"
                      ><b>- {{ dancer.genre.style }} -</b></a
                    >
                  </div>
                  <hr class="hr-short" />
                  <p class="blog-list-desc"></p>

                  <a
                    href="blog-single-no-sidebar.html"
                    class="btn btn-primary margin-top-40"
                    >view dancer
                  </a>
                </div>
              </router-link>
            </div>
            <!-- /.col -->
          </div>
          <!-- End blog list item 1 -->
        </div>
        <!-- /.blog-wrap -->
      </div>
      <!-- End blog-list -->
    </section>
    <!-- End blog list section -->
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      dancers: [],
      filter: "",
    };
  },
  created: function() {
    axios.get("/api/dancers").then((response) => {
      console.log("dancer index", response);
      this.dancers = response.data;
    });
  },
  methods: {},
};
</script>
