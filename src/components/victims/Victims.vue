<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="black white--text"> Victim </v-card-title>
          <v-card-text class="victims">
            <div v-for="(victim, index) in victims" :key="victim._id">
              <br />
              <div>
                
                  Name: {{ victim.name }}
                  <br>
                  Address: {{ victim.address }}
                  <br>
                  Age: {{ victim.age }}
                  <br>
                  Phonenumber: {{ victim.phone }}
                  
                    <img
                      :src="`http://159.65.88.14/images/${victim.image}`"
                      style="max-height: 150px"
                      alt=""
                    />
              
                  <span class="float-right">
                    <v-icon @click="delVictim(victim, index)">
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
          <v-card-title class="black white--text">Add Victim</v-card-title>
          <v-card-text class="victim">
            <form method="POST" enctype="multipart/form-data">
              <v-text-field placeholder="Name of the victim" v-model="name">
              </v-text-field>
              <v-text-field
                placeholder="Adress of the victim"
                v-model="address"
              >
              </v-text-field>
              <v-text-field
                type="text"
                placeholder="Age of the victim"
                v-model="age"
              >
              </v-text-field>
              <v-text-field
                type="text"
                placeholder="Phonenumber of the victim"
                v-model="phone"
              >
              </v-text-field>
              <div>
                <label>Select your picture:</label>
                <input type="file" name="image" ref="file" @change="onS" />
              </div>
              <br>
              <div>
                
                <v-icon @click="victimSub"
                          >mdi-account-plus</v-icon
                        >
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../../data/api";
export default {
  props: {
    victims: Array,
    crimeId: String,
  },
  created() {
    console.log("passed victim", this.victims);
  },
  data: function () {
    return {
      file: undefined,
      name: undefined,
      phone: undefined,
      address:undefined,
      age:undefined,

    
    }
  },
  methods: {

    
    //Victim api-inn er ekki að skila inn mynd!!

    victimSub() {
      let victim = {
        name: this.name,
        phone: this.phone,
        age: this.age,
        address: this.address,
        
        crimeId: this.crimeId,
      };
      if (this.file) {
        const formData = new FormData();
        formData.append("image", this.file);
        api
          .postPhoto(formData)
          .then((res) => {
            console.log(res, " things worked out great");

            console.log(res);
            victim.image = res.data.filename;
            api
              .postVictim(victim)
              .then((r) => {
                console.log("added victim", r);
                this.$emit("add-victim", r.data.data);
              
              })
              .catch((error, info) => console.log(error, info));
          })
          .catch((error) =>
            console.log("things did not work out so great", error));
      }
    },
    onS() {
      this.file = this.$refs.file.files[0];
    },
    delVictim(victim, index) {
      api.delVictim(victim._id).then((res) => {
        this.victims.splice(index, 1);
        if (this.victim._id == victim.id) {
          this.victim = {};
        }
        console.log("Works" + index, res);
      });
    },
  },
};
</script>

<style>
.victim {
  background: yellow;
  color: black;
}

.victims {
  background: yellow;
  color: black;
}
</style>