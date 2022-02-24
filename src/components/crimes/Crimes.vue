<template>
  <v-container fluid>
      <br>
      <v-row>
          <v-col>
              <v-card>
              <v-card-title class="green white--text">
                  <h1>Crimes</h1>
              </v-card-title>
              <input type="text" v-model="search" placeholder="search crime" >
              <v-card-text>
                  
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Address
                        </th>
                        <th class="text-left">
                            Type
                        </th>
                        </tr>
                        <input type="text" v-model="search" placeholder="search crime" >
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in crimes"
                        :key="item._id"
                        >
                        <td @click="setSelectedCrime(item)">{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.crimeType }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
              </v-card-text>
          </v-card>
          </v-col>
            <!--<v-col>
               <ul>
                  <li v-for="c in crimes" :key="c.key">
                      old method <router-link :to="`crime/${c._id}`" > {{c._id}} </router-link> - {{c.name}} 
                      <span @click="setSelectedCrime(c)">{{c._id}}</span> - {{c.name}}
                  </li>
              </ul>
            </v-col>-->
            <v-col cols="4" v-if="registerCrime">
                <v-card>
                    <v-card-title class="red white--text">
                        Register Crime
                    </v-card-title>
                    <v-card-text>
                        <v-text-field type="text" v-model="crime.name" placeholder="Name of Crime"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="crime.address" placeholder="Address"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="crime.crimeType" placeholder="Type of crime"> </v-text-field>
                        <br>
                        <input type="date" v-model="crime.date">
                        <br>
                        <v-text-field type="number" v-model="crime.severeness" max="10" min="1" placeholder="What is the severness of the crime"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="crime.shortDesc" placeholder="Short description"> </v-text-field>
                        <br>
                        <v-btn @click="postCrime(crime)">Add</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2" v-else>
                <v-btn @click="registerCrime = true">Register crime</v-btn>
            </v-col>
      </v-row>
  </v-container>
</template>

<script>
import api from '../../data/api'

export default {
    created() {
        this.getCrimes()
    },
    data: function () {
        return {
            crime: {},
            crimes: [],
            registerCrime: false,
        }
    },
    methods: {
        getCrimes() {
            api.getCrimes().then(res => {
                console.log('HTTP GET REQ ALL CRIMES', res)
                this.crimes = res.data.data
            })
        },
        postCrime(crime) {
            crime.caseStatus = false
            crime.projectId = 'no-2021'
            console.log(crime)
            api.postCrime(crime).then(res => {
                this.crimes.push(res.data.data)
                console.log(res)
                this.crime = {}
                this.registerCrime = false
                
            })
        },
        setSelectedCrime(crime) {
            //this.$store.commit('SET_SELECTED_CRIME', crime)
            this.$router.push({path:`crime/${crime._id}`})
        }
    }
}
</script>

<style>

</style>