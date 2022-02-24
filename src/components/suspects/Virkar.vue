<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="black white--text"> Crime tasks </v-card-title>
            <v-card-text class="crimes">
              <div v-for="(t, index) in (tasks)" :key="t._id">
                <br />
                <div>
                  Task: {{ t.task }} <br> Assigned officer: {{ t.assigned }}  <br> Status:
                   <div v-if="t.status == true">task is done</div>
                  <div v-else>task is incomplete</div>

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
          <v-card class="yellow">
            <v-card-title class="black white--text">Add task</v-card-title>
            <v-card-text class="tasks">
              <v-text-field
                type="text"
                v-model="task.task"
                placeholder="Name of task"
              >
              </v-text-field>
              <br />
              
              <br />
            <input type="checkbox" id="false" value="false" v-model="task.status" >
<label for="false">please check the box if the task is done</label>
              <br />
              <v-select v-model="task.assigned" :items="users" item-text="name" item-value="id">
                  

              </v-select>
              <br />
              <v-icon @click="postTask(task)" v-if="!editMode"
                          >mdi-account-plus</v-icon
                        >
              
              <v-icon @click="putTask(task)" v-if="editMode"
                          >mdi-clipboard-edit</v-icon
                        >
              <v-icon
                          @click="
                            task = {};
                            editMode = false;
                          "
                          >mdi-autorenew</v-icon
                        >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import api from "../../data/api";

export default {
              
  mounted() {
    this.getTasks();
    
  },

  props: {
    crime: Object,
    msg: String,
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
         api.getUsers().then(res => {
                console.log('HTTP GET REQ ALL USERS', res)
                this.users = res.data.data
            })
      console.log(this.crime);
      if (this.crime === undefined) {
        api.getTasks().then((res) => (this.tasks = res));
      } else {
        this.tasks = this.crime.tasks;
      }
      
    },
    postTask(task) {
      task.crimeId = this.crime.crime._id;
      api
        .postTask(task)
        .then((res) => {
          console.log(res);
          this.tasks.push(res.data.data);
          this.task = {};
        })
        .catch((error) => console.log(error));
    },
    putTask(task) {
      api
        .putTask(task)
        .then((res) => {
          console.log(res);
          this.task = {};
          this.editMode=false;
        })
        .catch((error) => console.log(error));
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


     


}
};
</script>

<style>
.tasks {
  background: yellow;
  color: black;
}

.crimes {
  background: rgb(136, 136, 79);
  color: black;
  font-size: 20px;
}
</style>

