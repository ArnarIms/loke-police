<template>
<v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title class="black white--text">
                    Crime tasks
                </v-card-title>
                <v-card-text class="crimes">
                    <div v-for="(t, index) in tasks" :key="t._id">
                    <br>
                        <div>
                            <ul>
                                <li>
                                    {{ t.task }}
                                </li>
                                <li>
                                    {{ t.assigned }}
                                </li>
                                <li  v-if="t.status==true">case is open </li>
                                <li v-else>case is closed</li>
                            
                       
                            <span class="float-right">
                                <v-icon @click="setEdit(t)" >
                                    mdi-file-edit-outline
                                </v-icon>
                                &nbsp;
                                <v-icon @click="delTask(t, index)">
                                    mdi-delete
                                </v-icon>
                            </span>
                            </ul>
                        </div>

                      
                        <v-divider style="opacity: 0.55"></v-divider>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card>
                <v-card-title class="black white--text">Add task</v-card-title>
                <v-card-text class="tasks">
                     <v-text-field type="text" v-model="task.task" placeholder="Name of task"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="task.assigned" placeholder="who is assigned"> </v-text-field>
                        <br>
                        <p>is the case open?</p>
                        <v-checkbox type="checkbox" v-model="task.status" placeholder="status"> </v-checkbox> <p>yes</p>
                        <br>
                    <v-btn @click="postTask(task)" v-if="!editMode">Add</v-btn>
                    <v-btn @click="putTask(task)" v-if="editMode">Update</v-btn>
                    <v-btn @click="task = {}; editMode = false">Clear</v-btn>
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
        this.getTasks()
    
    },
    props: {
        crime: Object,
        msg: String,
    },
    data: function() {
        return {
            tasks: [],
            task: {},
            editMode: false,
            
        }
    },
    methods: {
        getTasks() {
            console.log(this.crime)
            if(this.crime === undefined) {
                api.getTasks().then(res => this.tasks = res)
            }else {
                this.tasks = this.crime.tasks
            }
        },
        postTask(task) {
            task.crimeId = this.crime.crime._id
            api.postTask(task).then(res => {
                console.log(res)
                this.tasks.push(res.data.data)
                this.task = {}
            }).catch(error => console.log(error))
        },
        putNote(task) {
            api.putTask(task).then(res => {
                console.log(res)
                this.task = {};
                
                
            }).catch(error => console.log(error))
        },
        delNote(task, index) {
            api.delNote(task._id).then(res => {
                this.tasks.splice(index, 1)
                if(this.task._id == task.id) {
                    this.task = {};
                }
                console.log('Works' + index, res);
            })
        },
        setEdit(t) {
            this.task = t
            this.editMode = true
        },
   


},

    
}
</script>

<style>

.tasks{
    background: yellow;
    color: black;
}
.crimes{
    background: yellow;
    color: black;
    font-size: 20px;
}

</style>