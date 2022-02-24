<template>
<div class="body">
  <header>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo"><img src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.18172-8/12291824_988387264558155_1243154605543586984_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hasW1Bl5cE0AX8ag45Y&_nc_ht=scontent.frkv2-1.fna&oh=24bc6de799b0dbda31b22e875d3fe23f&oe=60D9DA84" alt="faook" width="80" height="80"> LÖKE</div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div class="menu-area">
                <div class="limit-box">
                  <h2 class="float">{{ user.name }} <img src="https://media.cdn.lexipol.com/article-images/funny_cop_420.jpg?w=300&format=jpg&quality=87&crop=0%2C0%2C420%2C370" alt="faook"
        width="80" height="80"></h2>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  <div id="wrapper">
    <!-- Sidebar -->
    
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10">
            <div v-if="criminal" class="center">
            
                <v-row>
                  <v-col>
                    <v-card 
                    max-width="800"
                    max-height = "10000"
                    class="mx-auto">
                      <v-card-title class="white--text black">
                        <p> Upplýsingar um glæpamann</p>
                      </v-card-title>
                      <v-card-text class="font-weight-bold"
                       >
                       The criminal name: <td
                       color="blue">"{{ criminal.name}}"</td>
                        <br>
                      Address: <td>"{{ criminal.address}}" 
                                  </td> 
                       <br>
                        Age: <td>"{{ criminal.age}}"</td>
                        <br>
                        Phonenumber: <td>"{{ criminal.phone}}"</td>
                        <br>
                        notes: <td> "{{criminal.note}}" </td>
                        <br>
                        <td v-if="criminal.hasBeenToPrison">Has not been to prison</td>
                                <td v-else>Has been to prison</td>
                                <br>
                                <img
                  :src="`http://159.65.88.14/images/${criminal.image}`"
                  style="max-height: 200px"
                  alt=""
                />

                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
           
              <note :criminal="criminal"> </note>
            </div>
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
// @ is an alias to /src


import note from "../components/criminals/note.vue"
import api from "../data/api";

export default {
  name: "criminals",
  components: {
    note,
  },
  created() {
    // Þurfum að byrja á því að sækja allt það sem við viljum birta á "crime skjánum"
    // notes <- komið
    // suspects <- komið
    // victims
    // tasks
    // Við þurfum að athuga hvort að allar upplýsingar um glæp eru til ef ekki sækja þær.
    this.criminalId = this.$route.params.id;
    this.getCriminalInfo();
  },
 computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  data: function () {
    return {
      criminalId: undefined,
      notes: undefined,
      criminal: undefined,
    };
  },
  methods: {
    getCriminalInfo() {
      api.getCriminalById(this.criminalId).then((res) => {
        // Ef res.data.data er undefined, þurfum við að kasta villu til notanda að
        // upplýsingar um þennan glæp finnast ekki
        this.criminal = res.data.data;
        this.$store.commit("SET_SELECTED_CRIMINAL", res.data.data);
      });
    },
   
  },
  
};
</script>
<style>

body{
  background: black;
}
#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
}
.text{
    background: rgb(224, 224, 7);
    text-align: center;
    font-size: 20px;
    
}
.v-card__text { 
font-size: 20px;
margin-top:0;
font-family: 'Courier New', Courier, monospace;}


</style>


