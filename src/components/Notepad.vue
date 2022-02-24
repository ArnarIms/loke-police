<template>
  <v-container>
      <v-row>
          <v-col>
            <br>
            <input type="text" v-model="note.note" placeholder="Description"/>
            <br>
            <input type="text" v-model="note.crimeId" placeholder="CrimeId"/>
            <br>
            <input type="date" v-model="note.date" placeholder="date"/>
            <br>
            <input type="text" v-model="note.projectId" placeholder="ProjectId"/>
            <br>
            <button v-if="!editMode" @click="postNote(note)">Send</button>
            <button v-else @click="putNote(note)">Update</button>
          </v-col>
      </v-row>
      <v-row>
          <v-col>
              <ul>
                  <li v-for="n in notes" :key="n._id" @click="setEditNote(n)">
                      <div>
                          <h3>{{n.date}}</h3>
                          <p>{{n.note}}</p>
                      </div>
                      
                  </li>
              </ul>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import api from '../data/api'

export default {
    created() {
        api.getNotes().then(res => {
            this.notes = res.data.data;
            console.log(res);
        }).catch(error => {console.log(error)});
    },
    data: function () {
        return {
            notes: undefined,
            note: {},
            editMode: false,
        }
    },
    methods: {
        postNote(note) {
            api.postNote(note).then(res => {
                console.log('worked', res);
            }).catch(error => console.log(error));
        },
        putNote(note) {
            api.putNote(note).then(res => {
                this.note = {};
                console.log(res.data.data);
                this.editMode = false;
            }).catch(error => console.log(error))
        },
        setEditNote(note) {
            this.note = note;
            var dt = new Date(note.date);
            this.note.date = dt;
            
            this.editMode = true;
        }
    }
}
</script>

<style>

</style>