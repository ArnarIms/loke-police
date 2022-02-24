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
    <div id="service" class="about top_layer">
      <div class="titlepage">
        <div class="container">
          <h3>Crime database</h3>
          <p>
            We manage a range of databases containing information related to
            criminals and crimes. The databases contain millions of records with
            information on individuals such as names and fingerprints; stolen
            property such as passports and vehicles; and weapons and threats
            such as firearms. <br />
            National police can search our databases in real time as part of
            their investigations. This can be done via their INTERPOL National
            Central Bureau, or directly at the frontline, for instance by
            specialized crime units and border officials. Databases are accessed
            via I-24/7, our secure global police communications system. This is
            the technical network that links law enforcement in all member
            countries and enables authorized users to share sensitive and urgent
            police information with their counterparts around the globe.
          </p>
          <div class="aboutpic">
            <img
              src="https://s01.sgp1.digitaloceanspaces.com/large/859674-75199-axhywvjxyg-1511960362.jpg"
              alt="lethal"
              width="700"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="wrapper">
      <!-- Sidebar -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <v-container fluid>
                <br />
                <v-row>
                  <v-col>
                    <v-card class="yellow">
                      <v-card-title class="black white--text">
                        <h3>Crimes</h3>
                      </v-card-title>

                      <v-card-text>
                        <v-simple-table class="yellow">
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th>
                                  <input
                                    type="text"
                                    placeholder="Search by name"
                                    v-model="searchTerm"
                                  />
                                </th>

                                <th>
                                  <button @click="sortLowest">
                                    Most recent
                                  </button>
                                  - <button @click="sortHighest">Older</button>
                                </th>
                              <!--   <th>
                                  <input
                                    type="radio"
                                   
                                    value="true"
                                    v-model="crime.caseStatus"
                                  />
                                  <label for="one">open</label>
                                  <br />
                                  <input
                                    type="radio"
                                    
                                    value="false"
                                    v-model="crime.caseStatus"
                                  />
                                  <label for="two">Closed</label>
                                </th>-->
                              </tr>
                              <tr>
                                <th class="text-left">Name</th>
                                <th class="text-left">Date</th>
                                <th class="text-left">Type</th>
                                <th class="text-left">case status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in searchList"
                                :key="item._id"
                              >
                                <td>{{ item.name }}</td>
                                <td>{{ item.date | formatYear }}</td>
                                <td>{{ item.crimeType }}</td>
                                <td v-if="item.caseStatus">case closed</td>
                                <td v-else>case open</td>
                                <v-icon @click="setSelectedCrime(item)"
                                  >mdi-file-find</v-icon
                                >
                                <v-icon @click="remove(item._id, index)"
                                  > mdi-delete </v-icon>
                                
                                <v-icon @click="setEdit(item)">
                                  mdi-file-edit-outline
                                </v-icon>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="4" v-if="registerCrime">
                    <v-card class="yellow">
                      <v-card-title class="black white--text">
                        Register Crime
                      </v-card-title>
                      <v-card-text>
                        <v-text-field
                          type="text"
                          v-model="crime.name"
                          placeholder="Name of Crime"
                        >
                        </v-text-field>
                        <br />
                        <v-text-field
                          type="text"
                          v-model="crime.address"
                          placeholder="Address"
                        >
                        </v-text-field>
                        <br />
                        <v-text-field
                          type="text"
                          v-model="crime.crimeType"
                          placeholder="Type of crime"
                        >
                        </v-text-field>
                        <br />
                        <input type="date" v-model="crime.date" />
                        <br />
                         <vue-number-input v-model="crime.severeness" :min="1" :max="10" inline controls></vue-number-input>
                        <br />
                        <v-text-field
                          type="text"
                          v-model="crime.shortDesc"
                          placeholder="Short description"
                        >
                        </v-text-field>
                        <br />
                        <input type="checkbox" id="false" value="false" v-model="crime.caseStatus" >
<label for="false">please check the box if the case is closed</label>
<br>

                        
                        <br />
                        <v-icon @click="postCrime(crime)" v-if="!editMode"
                          >mdi-account-plus</v-icon
                        >
                        <v-icon @click="putCrime(crime)" v-if="editMode"
                          >mdi-clipboard-edit</v-icon
                        >
                        <v-icon
                          @click="
                            crime = {};
                            editMode = false;
                          "
                          >mdi-autorenew</v-icon
                        >
                        <v-icon @click="registerCrime = false">mdi-close-circle</v-icon>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="2" v-else>
                    <v-btn @click="registerCrime = true">Register crime</v-btn>
                     
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
</template>

<script>
import api from "../data/api";

export default {
  created() {
    this.getCrimes();
  },
  data: function () {
    return {
      crime: {},
      crimes: [],
      search: "",
      registerCrime: false,
      searchTerm: "",
      searchTerm2: "",
      editMode: false,
    };
  },

  methods: {
    getCrimes() {
      api.getCrimes().then((res) => {
        console.log("HTTP GET REQ ALL CRIMES", res);
        this.crimes = res.data.data;
      });
    },
    putCrime(crime) {
      api
        .putCrime(crime)
        .then((res) => {
          console.log(res);
          this.crime = {};
          this.editMode=false;
        })
        .catch((error) => console.log(error));
    },

    postCrime(crime) {
      crime.caseStatus = false;
      crime.projectId = "arim-2021";
      console.log(crime);
      api.postCrime(crime).then((res) => {
        this.crimes.push(res.data.data);
        console.log(res);
        this.crime = {};
      });
    },
    setSelectedCrime(crime) {
      //this.$store.commit('SET_SELECTED_CRIME', crime)
      this.$router.push({ path: `crime/${crime._id}` });
    },
    remove(id, index) {
      api
        .delCrime(id)
        .then((res) => {
          console.log("Action success mabey show alert?", res);
          this.crimes.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setEdit(item) {
      this.crime = item;
      this.editMode = true;
    },
    sortLowest() {
      this.crimes.sort((a, b) => (a.date > b.date ? 1 : -1));
    },
    sortHighest() {
      this.crimes.sort((a, b) => (a.date < b.date ? 1 : -1));
    },
  },
  computed: {
    searchList() {
      return this.crimes.filter((item) => {
        return item.name.includes(this.searchTerm);
      });
    },

    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>
</style>
