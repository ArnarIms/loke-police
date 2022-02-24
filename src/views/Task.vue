<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="black white--text"> Crime tasks </v-card-title>
            <v-card-text class="crimes">
              <div v-for="(t, index) in tasks" :key="t._id">
                <br />
                <div>
                  {{ t.task }} - {{ t.assigned }}

                  <div v-if="t.status == true">case is open</div>
                  <div v-else>case is closed</div>

                  <span class="float-right">
                    <v-icon @click="setEdit(t)"> mdi-file-edit-outline </v-icon>
                    &nbsp;
                    <v-icon @click="delTask(t, index)"> mdi-delete </v-icon>
                  </span>
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
              <v-text-field
                type="text"
                v-model="task.task"
                placeholder="Name of task"
              >
              </v-text-field>
              <br />
              <v-text-field
                type="number"
                v-model="task.crimeId"
                placeholder="who is assigned"
              >
              </v-text-field>
              <br />
              <p>is the case open?</p>
              <label
                >yes<v-checkbox
                  type="checkbox"
                  v-model="task.status"
                  placeholder="status"
                >
                </v-checkbox>
              </label>
              <br />
              <v-select v-model="task.assigned" :items="users" item-text="name" item-value="id">
                  
                     
                      
                
              </v-select>
              <br />
              <v-btn @click="postTask(task)" v-if="!editMode">Add</v-btn>
              <v-btn @click="putTask(task)" v-if="editMode">Update</v-btn>
              <v-btn
                @click="
                  task = {};
                  editMode = false;
                "
                >Clear</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '../data/api'
export default {
  mounted() {
     this.getTasks();
     
   },
 
   
   data: function () {
     return {
       tasks: [],
       task: {},
       editMode: false,
       user: {},
       users: Array,
     
     };
   },
 methods: {
    getTasks() {
       api.getTasks().then((res) => {
         console.log("HTTP GET REQ ALL TASKS", res);
         this.tasks = res.data.data;
       });
       api.getUsers().then((res) => {
         console.log("HTTP GET REQ ALL USERS", res);
         this.users = res.data.data;
       });
     },
     putTask(task) {
       api
         .putTask(task)
         .then((res) => {
           console.log(res);
           this.task = {};
         })
         .catch((error) => console.log(error));
     },
     postTask(task) {
       
       task.projectId = "arim-2021";
       console.log(task);
       api.postTask(task).then((res) => {
         this.tasks.push(res.data.data);
         console.log(res);
         this.task = {};
 
        
       });
     },
     
      delTask(task, index) {
       api.delTask(task._id).then((res) => {
         this.tasks.splice(index, 1);
         if (this.task._id == task.id) {
           this.task = {};
         }
         console.log("Works" + index, res);
       });
     },
     setEdit(t) {
       this.task = t;
       this.editMode = true;
     },
},
 computed: {
    
  },
}
</script>

<style>

</style>