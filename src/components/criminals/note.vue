<template>
<v-container>
    <v-row>
        <v-col>
            <v-card  max-width="500">
                <v-card-title class="black white--text">
                    Criminal notes
                </v-card-title>
                <v-card-text class="crimes">
                    <div v-for="(n, index) in notes" :key="n._id">
                    <br>
                        <div>
                            {{n.note}}
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
            <v-card>
                <v-card-title class="black white--text">Add note</v-card-title>
                <v-card-text class="notes">
                    <v-text-field type="text" placeholder="Please enter your note" v-model="note.note"> </v-text-field>
                    <br>
                    <v-btn @click="postNote(note)" v-if="!editMode">Add</v-btn>
                    <v-btn @click="putNote(note)" v-if="editMode">Update</v-btn>
                    <v-btn @click="note = {}; editMode = false">Clear</v-btn>
                </v-card-text>
            </v-card>
            
        </v-col>
    </v-row>
</v-container>
    
</template>

<script>
import api from '../../data/api'
export default {
    mounted() {
        this.getNotes()
    },
    props: {
       
        criminal: Array,
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
            console.log(this.criminal)
            if(this.criminal === undefined) {
                api.getNotes().then(res => this.notes = res)
            }else {
                this.notes = this.criminal.notes
            }
        },
        postNote(note) {
            note.criminalId = this.criminal._id
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
        }

    }
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