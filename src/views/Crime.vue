<template>
<div>
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
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-10">
                  <div v-if="crime">
    <v-container>
      <v-row>
          <v-col>
              <v-card >
                  <v-card-title class="white--text black">
                      Glæpupplýsingar
                  </v-card-title>
                  <v-card-text class="text">
                     <ul class="ul">
                         <li>Name: {{crime.crime.name}}</li>
                         <li>Address: {{crime.crime.address}}</li>
                         <li>Type of crime: {{crime.crime.crimeType}}</li>
                         <li>Date of crime {{crime.crime.date | formatYear}}</li>
                         <li>The severness of the crime: {{crime.crime.severness}}</li>
                         
                         <li>A short description of the crime: {{crime.crime.shortDesc}}</li>
                        
                          
                         
                     </ul>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
    </v-container>
    <notepad :crime="crime" > </notepad>
    <virkar :crime="crime"></virkar>
    <suspects :suspects="crime.suspects" :crimeId="crimeId" @add-suspect="addSuspect"></suspects>
    <victims :victims="crime.victims" :crimeId="crimeId" @add-victim="addVictim"></victims>
    <report :crime="crime"> </report>
    
   
    
   
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
import Report from '../components/suspects/Report.vue'
import Virkar from '../components/suspects/Virkar.vue'
import Notepad from '../components/notes/Notepad.vue'
import Suspects from '../components/suspects/Suspects.vue'
import Victims from '../components/victims/Victims.vue'

import api from '../data/api'

export default {
    components: {
        Notepad,
        Suspects,
        Victims,
      Virkar,
      Report,
      
        
    },
    
    props: {
     
        msg: String,
    },
    created() {
        // Þurfum að byrja á því að sækja allt það sem við viljum birta á "crime skjánum"
        // notes <- komið
        // suspects <- komið
        // victims
        // tasks
        // Við þurfum að athuga hvort að allar upplýsingar um glæp eru til ef ekki sækja þær.
        this.crimeId = this.$route.params.id;
        this.getCrimeInfo()    
    },
    computed: {
    user() {
      return this.$store.getters.user;
    },
  },
    data: function() {
        return {
            crimeId: undefined,
            notes: undefined,
            crime: undefined,
            
          

        }
    },
    methods: {
        getCrimeInfo() {
            api.getCrimeById(this.crimeId).then(res => {
                // Ef res.data.data er undefined, þurfum við að kasta villu til notanda að
                // upplýsingar um þennan glæp finnast ekki
                this.crime = res.data.data;
                this.$store.commit('SET_SELECTED_CRIME', res.data.data);
            })
        },
        addSuspect(val) {
            console.log('Value from emit', val)
            this.crime.suspects.push(val)
        },
        addVictim(val) {
            console.log('Value from emit', val)
            this.crime.victims.push(val)
        },
         
        
  
    }
}
</script>

<style>
ul li{
  list-style: none;
}
</style>