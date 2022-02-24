<template>
  <div>
    <header>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo">
                    <img
                      src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.18172-8/12291824_988387264558155_1243154605543586984_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hasW1Bl5cE0AX8ag45Y&_nc_ht=scontent.frkv2-1.fna&oh=24bc6de799b0dbda31b22e875d3fe23f&oe=60D9DA84"
                      alt="faook"
                      width="80"
                      height="80"
                    />
                    LÖKE
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div class="menu-area">
                <div class="limit-box">
                  <h2 class="float">
                    {{ user.name }}
                    <img
                      src="https://media.cdn.lexipol.com/article-images/funny_cop_420.jpg?w=300&format=jpg&quality=87&crop=0%2C0%2C420%2C370"
                      alt="faook"
                      width="80"
                      height="80"
                    />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div id="wrapper">
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div v-if="crime">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-card>
                        <v-card-title class="white--text black">
                          Glæpupplýsingar
                        </v-card-title>
                        <v-card-text class="text">
                          <ul class="ul">
                            <li>Name: {{ crime.crime.name }}</li>
                            <li>Address: {{ crime.crime.address }}</li>
                            <li>Type of crime: {{ crime.crime.crimeType }}</li>
                            <li>Date of crime {{ crime.crime.date }}</li>
                            <li>
                              The severness of the crime:
                              {{ crime.crime.severness }}
                            </li>

                            <li>
                              A short description of the crime:
                              {{ crime.crime.shortDesc }}
                            </li>
                          </ul>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../data/api";

export default {
  data: function () {
    return {
      crimeId: undefined,
      crime: undefined,
    }
  },
  props: {
    msg: String,
  },
  created() {
    this.crimeId = this.$route.params.id;
    this.getCrimeInfo();
  },

  methods: {
    getCrimeInfo() {
      api.getCrimeById(this.crimeId).then((res) => {
        // Ef res.data.data er undefined, þurfum við að kasta villu til notanda að
        // upplýsingar um þennan glæp finnast ekki
        this.crime = res.data.data;
        this.$store.commit("SET_SELECTED_CRIME", res.data.data);
      })
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>

</style>