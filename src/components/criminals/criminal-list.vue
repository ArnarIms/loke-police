<template>
    <v-card>
        <v-list>
             <v-subheader>Criminal</v-subheader>
            <template v-for="(criminal, index) in criminals">
                
                <v-list-item :key="criminal._id">
                    <v-list-item-content disabled>
                        <v-container>
                            <v-row class="row">
                                <v-col hidden>Name: {{criminal._id}}</v-col> 
                                <v-col @click="setSelectedCriminal(criminal)">Name: {{criminal.name}}</v-col> 
                                <v-col>Known address: {{criminal.address}}</v-col> 
                                <v-col> Age: {{criminal.age}}</v-col> 
                                <v-col> Phonenumber: {{criminal.phone}}</v-col> 
                                <v-col v-if="criminal.hasBeenToPrison">Has served time</v-col>
                                <v-col v-else>Has not served time</v-col>
                                <v-col><v-btn @click="remove(criminal._id, index)">Delete</v-btn> </v-col>
                            </v-row>
                        </v-container> 
                    </v-list-item-content>
                </v-list-item>
            
            </template>
        </v-list>
  </v-card>
</template>

<script>
import api from '../../data/api';
export default {
    data() {
        return {
            criminals: undefined,
        }
    },
    computed: {
    criminal() {
        return this.$store.getters.selectedCriminal
    }
},
    methods: {
    getCriminals() {
      api.getCriminals().then(res => {
        this.criminals = res.data.data;
        console.log(res);
      });
    },
    setSelectedCriminal(criminal) {
        this.$store.commit('SET_SELECTED_CRIMINAL', criminal)
        this.$router.push({path:`note/${criminal._id}`})
    },
    remove(id, index) {
        api.delCriminal(id).then(res => {
            console.log('Action success mabey show alert?', res);
            this.criminals.splice(index, 1);
        }).catch(error => {console.log(error)})
    },
    getNotes() {
        api.getNotes().then(res => {
            console.log(res)
        }).catch(error => {console.log(error)})
    },
    addNote() {
        let dt = new Date();
        api.postNote('Vantar að prufa notes', 1, dt).then(res => {
            console.log('Worked', res);
        }).catch(error => {console.log(error)})
    }

  },
  created() {
    this.getCriminals()
    //this.getNotes()
    //this.addNote()
    
  }
    
}
</script>

<style>
body{
    background: black;
}
.row{
    color: green;
}
</style>