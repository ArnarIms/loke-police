<template>
  <v-container fluid>
      <br>
      <v-row>
          <v-col>
              <v-card>
              <v-card-title class="green white--text">
                  <h1>Criminals</h1>
              </v-card-title>
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
                            age
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in criminals"
                        :key="item._id"
                        >
                        <td @click="setSelectedCriminal(item)">{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.age }}</td>
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
            <v-col cols="4" v-if="registerCriminal">
                <v-card>
                    <v-card-title class="red white--text">
                        Register Criminal
                    </v-card-title>
                    <v-card-text>
                        <v-text-field type="text" v-model="criminals.name" placeholder="Name of Criminal"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="criminals.address" placeholder="Address"> </v-text-field>
                        <br>
                        <v-text-field type="number" v-model="criminals.age" placeholder="Age"> </v-text-field>
                        <br>
                        <v-text-field type="number" v-model="criminals.phone" placeholder="Phone number"> </v-text-field>
                        <br>
                        <v-checkbox v-model="criminals.hasBeenToPrison" placeholder="Prison"> </v-checkbox>
                        <br>
                        <v-text-field type="text" v-model="criminals.note" placeholder="Short description"> </v-text-field>
                        <br>
                        <v-btn @click="postCriminal(criminal)">Add</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2" v-else>
                <v-btn @click="registerCriminal = true">Register crime</v-btn>
            </v-col>
      </v-row>
  </v-container>
</template>

<script>
import api from '../../data/api'

export default {
    created() {
        this.getCriminals()
    },
  
    data: function () {
        return{
            
            criminal: {},
            criminals: [],
            registerCriminal: false,

        }
    },
    methods: {
       
        setSelectedCriminal(criminal) {
            //this.$store.commit('SET_SELECTED_CRIME', crime)
            this.$router.push({path:`criminal/${criminal._id}`})
        },
         getCriminals() {
            api.getCriminals().then(res => {
                console.log('HTTP GET REQ ALL CRIMINALS', res)
                this.criminals = res.data.data
            })
        },
        postCriminal(criminal) {
            
            criminal.projectId = 'arim-2021'
            console.log(criminal)
            api.postCriminal(criminal).then(res => {
                this.criminal.push(res.data.data)
                console.log(res)
                this.criminal = {}
                this.registerCriminal = false
                
            })
        },
    }
}
</script>

<style>

</style>