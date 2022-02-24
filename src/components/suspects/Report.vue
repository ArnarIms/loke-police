<template>
  <v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title class="black white--text">
                    Add a Report
                </v-card-title>
                <v-card-text class="crimes">
                    <div v-for="(r, index) in reports" :key="r._id">
                    <br>
                        <div>
                            
                            "{{r.body}}" 
                            <span class="float-right">
                                <v-icon @click="setEdit(r)" >
                                    mdi-file-edit-outline
                                </v-icon>
                                &nbsp;
                                <v-icon @click="delReport(r, index)">
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
                <v-card-title class="black white--text">Add report</v-card-title>
                <v-card-text class="notes">
                    <v-text-field type="text" placeholder="Please enter your note" v-model="report.body"> </v-text-field>
                    <br>
                    <v-select v-model="report.userName" :items="users" item-text="name" item-value="id">
                      <br>
                
              </v-select>
               
                    
                    <v-btn @click="postReport(report)" v-if="!editMode">Add</v-btn>
                    <v-btn @click="putReport(report)" v-if="editMode">Update</v-btn>
                    <v-btn @click="report = {}; editMode = false">Clear</v-btn>
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
    this.getReports();
    
  },

  props: {
    crime: Object,
    msg: String,
  },
  data: function () {
    return {
      reports: [],
      report: {},
      editMode: false,
      user: {},
      users: Array,
    
    };
  },
 methods: {
    getReports() {
         api.getUsers().then(res => {
                console.log('HTTP GET REQ ALL USERS', res)
                this.users = res.data.data
            })
      console.log(this.crime);
      if (this.crime === undefined) {
        api.getReports().then((res) => (this.reports = res));
      } else {
        this.reports = this.crime.reports;

      }
      if (this.reports=== undefined) {
        this.reports = new Array; //api eitthvað í rugli???
      }
    },
    postReport(report) {
      report.crimeId = this.crime.crime._id;
      api
        .postReport(report)
        .then(res => {
          console.log(res);
          this.reports.push(res.data.data)
          this.report = {};
        })
        .catch((error) => console.log(error));
    },
    putReport(report) {
      api
        .putReport(report)
        .then((res) => {
          console.log(res);
          this.report = {};
          this.editMode=false; //setja þetta allstaðar
        })
        .catch((error) => console.log(error));
    },

    delReport(report, index) {
      api.delReport(report._id).then((res) => {
        this.reports.splice(index, 1);
        if (this.report._id == report.id) {
          this.report = {};
        }
        console.log("Works" + index, res);
      });
    },
    setEdit(r) {
      this.report = r;
      this.editMode = true;
    },


     


}
}
</script>

<style>

</style>