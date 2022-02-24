<template>
  
<v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title class="black white--text">
                    Crime reports
                </v-card-title>
                <v-card-text class="crimes">
                    <div v-for="(r, index) in reports" :key="r._id">
                    <br>
                        <div>
                            
                            {{ date }} {{ time }}  "{{r.body}}"
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
                <v-card-text class="reports">
                    <v-text-field type="text" placeholder="Please enter your report" v-model="report.report"> </v-text-field>
                    <br>
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
    name: "CurrentDate",


    mounted() {
        this.getReports()
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
            reports: [],
            report: {},
            editMode: false,
             timestamp: "",
  date: "",
  time: "",
  currentYear: "",
        }
    },
    methods: {
        getReports() {
            console.log(this.crime)
            if(this.crime === undefined) {
                api.getReports().then(res => this.reports = res)
            }else {
                this.reports = this.crime.reports
            }
        },
        postReport(report) {
            report.crimeId = this.crime.crime._id
            api.postReport(report).then(res => {
                console.log(res)
                this.reports.push(res.data.data)
                this.report = {}
            }).catch(error => console.log(error))
        },
        putReport(report) {
            api.putReport(report).then(res => {
                console.log(res)
                this.report = {};
                
                
            }).catch(error => console.log(error))
        },
        delReport(report, index) {
            api.delReport(report._id).then(res => {
                this.reports.splice(index, 1)
                if(this.report._id == report.id) {
                    this.report = {};
                }
                console.log('Works' + index, res);
            })
        },
        setEdit(r) {
            this.report = r
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

.reports{
    background: yellow;
    color: black;
}
.crimes{
    background: yellow;
    color: black;
    font-size: 20px;
}

</style>
</template>

<script>
export default {

}
</script>

<style>

</style>