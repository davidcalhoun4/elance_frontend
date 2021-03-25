<template>
  <div class="employers-index">
    <!-- ================================
			///// Begin page header section /////
			================================= -->
    <section id="page-header-section">
      <div
        class="section-inner no-padding bg-image"
        style="background-image: url(/assets/img/page-header/crystal_pite2.jpeg); background-position: 50% 50%;"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-2-dark"></div>

        <!-- Page header caption -->
        <div
          class="page-header-caption vertical-align-center text-center text-white"
        >
          <h1 class="page-header-title">Browse Employers</h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <div class=" text-center margin-top-25">
      Search Employers by Type Or Name:
      <input
        type="text"
        v-model="filter"
        placeholder="i.e Company or dawsondancesf"
      />
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
            v-for="employer in filterBy(
              employers,
              filter,
              'employer_type',
              'company_name'
            )"
            v-bind:key="employer.id"
            class="blog-list-item row text-center"
          >
            <!-- Left column -->
            <div class="col col-md-6 col-md-push-6 no-padding">
              <img v-bind:src="employer.image_url" alt="" />
            </div>
            <!-- /.col -->

            <!-- Right column -->
            <div class="col col-md-6 col-md-pull-6 no-padding">
              <router-link :to="`/employers/${employer.id}`">
                <div class="bco blog-list-info">
                  <h2 class="blog-list-title">
                    <a
                      href="blog-single-no-sidebar.html"
                      title="Aenean Odio Metus"
                      >{{ employer.company_name }}</a
                    >
                  </h2>
                  <div class="blog-list-meta">
                    <a v-if="employer.employer_type" class="article-time"
                      ><b>- {{ employer.employer_type }} -</b>
                    </a>
                  </div>
                  <hr class="hr-short" />
                  <p class="blog-list-desc"></p>

                  <a
                    href="blog-single-no-sidebar.html"
                    class="btn btn-primary margin-top-40"
                    >view employer
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

      <div class="row">
        <div class="col-lg-12 text-center">
          <!-- Begin pagination -->
          <nav>
            <ul class="pagination margin-top-100">
              <li>
                <!-- <a href="#" aria-label="Previous">
                  <span aria-hidden="true">first</span>
                </a> -->
              </li>
              <li><a href="#">prev</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>

              <li><a href="#">next</a></li>
              <li>
                <!-- <a href="#" aria-label="Next">
                  <span aria-hidden="true">last</span>
                </a> -->
              </li>
            </ul>
            <!-- <div class="pagination-info ">showing page 2 of 48</div> -->
          </nav>
          <!-- End pagination -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- End blog list section -->
    <!-- <h1>Employers</h1>
    Search Employers by Type Or Name:
    <input
      type="text"
      v-model="filter"
      placeholder="i.e Company or dawsondancesf"
    />
    <div
      v-for="employer in filterBy(
        employers,
        filter,
        'employer_type',
        'company_name'
      )"
      v-bind:key="employer.id"
    >
      <router-link :to="`/employers/${employer.id}`">
        <h2>{{ employer.company_name }}</h2>
        <p v-if="employer.employer_type">
          Employer Type: {{ employer.employer_type }}
        </p>
        <img v-bind:src="employer.image_url" alt="" />
      </router-link>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      employers: [],
      filter: "",
    };
  },
  created: function() {
    axios.get("/api/employers").then((response) => {
      console.log("employer index", response);
      this.employers = response.data;
    });
  },
  methods: {},
};
</script>
