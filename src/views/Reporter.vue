<template>
<div>
<!-- <header>
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
    </header>  -->

  <div id="wrapper">

        
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                  <v-container fluid>
      <br>
      <v-row>
          <v-col>
              <v-card class="yellow">
              <v-card-title class="black white--text">
                  <h1>Tasks</h1>
              </v-card-title>
              <v-card-text>
                <v-simple-table class="yellow">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            name of crime
                        </th>
                        <th class="text-left">
                            type of crime
                        </th>
                        <th class="text-left">
                           Date
                        </th>
                         <th class="text-left">
                           Add a report and task
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item) in crimes"
                        :key="item._id"
                        >
                        <td>{{ item.name }}</td>
                        <td>{{ item.crimeType }}</td>
                        <td>{{item.date | formatYear}}</td>
                        <td><v-icon @click="setSelectedCrime(item)"
                                  > mdi-file-edit-outline</v-icon
                                  
                                >&nbsp; </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
              </v-card-text>
          </v-card>
          </v-col>
           
           
      </v-row>
  </v-container>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    </div>
</template>

<script>
import api from '../data/api'
export default {
     created() {
    this.getCrimes();

  },
  data: function () {
    return {
      crime: {},
      crimes: [],
      task: {},
      tasks: {},
    
    };
  },
    methods: {
      
        
 getCrimes() {
            api.getCrimes().then(res => {
                console.log('HTTP GET REQ ALL TASKS', res)
                this.crimes = res.data.data
            });
            api.getTasks().then((res) => {
         console.log("HTTP GET REQ ALL TASKS", res);
         this.tasks = res.data.data;
       });
        },
        setSelectedCrime(crime) {
      //this.$store.commit('SET_SELECTED_CRIME', crime)
      this.$router.push({ path: `crime/${crime._id}` });
    },
}
}
</script>

<style>

</style>