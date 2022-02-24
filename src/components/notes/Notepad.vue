<template>
<v-container>
    <v-row>
        <v-col>
            <v-card max-width="800">
                <v-card-title class="black white--text">
                    Crime notes
                </v-card-title>
                <v-card-text class="crimes">
                    <div v-for="(n, index) in notes" :key="n._id">
                    <br>
                        <div>
                            
                         {{n.date | formatDate}} "{{n.note}}" 
                            <span class="float-right">
                                <v-icon @click="setEdit(n)" >
                                    mdi-file-edit-outline
                                </v-icon>
                                &nbsp;
                                <v-icon @click="delNote(n, index)">
                                    mdi-delete
                                </v-icon>
                            </span>
                        </div>

                      
                        <v-divider style="opacity: 0.55"></v-divider>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="yellow">
                <v-card-title class="black white--text">Add note</v-card-title>
                <v-card-text class="notes">
                    <v-text-field type="text" placeholder="Please enter your note" v-model="note.note" > </v-text-field>
                    <br>
                   
                   
                     <v-icon @click="postNote(note)" v-if="!editMode"
                          >mdi-account-plus</v-icon
                        >
                    
                    <v-icon @click="putNote(note)" v-if="editMode"
                          >mdi-clipboard-edit</v-icon
                        >
                     <v-icon
                          @click="
                            note = {};
                            editMode = false;
                          "
                          >mdi-autorenew</v-icon
                        >
                </v-card-text>
            </v-card>
            
        </v-col>
    </v-row>
</v-container>
    
</template>

<script>
import api from '../../data/api'

export default {
    
    name: "CurrentDate",


    mounted() {
        this.getNotes()
      this.date = this.getDate();
  this.time = this.getTime();
  this.timestamp = this.getTimestamp();
  this.currentYear = this.getCurrentYear();
    
    },
    props: {
        crime: Object,
        msg: String,
    },
    
    data: function() {
        return {
            notes: [],
            note: {},
            editMode: false,
            
         
        }
    },
    methods: {
        
       

        getNotes() {
            console.log(this.crime)
            if(this.crime === undefined) {
                api.getNotes().then(res => this.notes = res)
            }else {
                this.notes = this.crime.notes
            }
            console.log('checknote', this.notes)
        },
        postNote(note) {
            note.crimeId = this.crime.crime._id
           
            api.postNote(note).then(res => {
                console.log(res)
                this.notes.push(res.data.data)
                this.note = {}
            }).catch(error => console.log(error))
        },
        putNote(note) {
            api.putNote(note).then(res => {
                console.log(res)
                this.note = {};
                this.editMode=false;
                
                
            }).catch(error => console.log(error))
        },
        delNote(note, index) {
            api.delNote(note._id).then(res => {
                this.notes.splice(index, 1)
                if(this.note._id == note.id) {
                    this.note = {};
                }
                console.log('Works' + index, res);
            })
        },
        setEdit(n) {
            this.note = n
            this.editMode = true
        },
         getDate: function () {
    return new Date().toLocaleDateString();
  },
  getTime: function () {
    return new Date().toLocaleTimeString();
  },
  getTimestamp: function () {
    return Date.now();
  },
  getCurrentYear: function () {
    return new Date().getFullYear();
  },


},

    
}
</script>

<style>

.notes{
    background: yellow;
    color: black;
}
.crimes{
    background: yellow;
    color: black;
    font-size: 20px;
}

</style>