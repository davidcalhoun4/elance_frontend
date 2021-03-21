<template>
  <div class="dancers-index">
    <div class=" text-center margin-top-25">
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
              <!-- <a
                href="blog-single-no-sidebar.html"
                class="bco blog-list-image bg-image"
                style="background-image: url(/assets/img/blog/blog-1.jpg); background-position: 50% 50%;"
              ></a> -->
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
                      ><b>{{ dancer.genre.style }}</b></a
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
    <!-- <h1>Dancers</h1>
    Search Dancers by Genre Or Name:
    <input type="text" v-model="filter" placeholder="i.e. Ballet or Colin" />
    <div
      v-for="dancer in filterBy(dancers, filter, 'genre', 'first_name')"
      v-bind:key="dancer.id"
    >
      <router-link :to="`/dancers/${dancer.id}`">
        <h2>{{ dancer.first_name }} {{ dancer.last_name }}</h2>
        <p v-if="dancer.genre">Genre: {{ dancer.genre.style }}</p>
        <img v-bind:src="dancer.image_url" alt="" />
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
