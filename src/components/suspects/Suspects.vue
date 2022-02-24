<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="black white--text">
            Possible suspects
          </v-card-title>
          <v-card-text class="suspects">
            <div v-for="(suspect, index) in suspects" :key="suspect._id">
              <br />
              <div>
                {{ suspect.name }} -
                <img
                  :src="`http://159.65.88.14/images/${suspect.image}`"
                  style="max-height: 150px"
                  alt=""
                />
                <span class="float-right">
                  <v-icon @click="delSuspect(suspect, index)">
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
          <v-card-title class="black white--text">Add suspects</v-card-title>
          <v-card-text class="suspect">
            <form method="POST" enctype="multipart/form-data">
              <v-text-field placeholder="Name of the suspect" v-model="name">
              </v-text-field>
              
              <div>
                <label>Select your picture:</label>
                <input type="file" name="image" ref="file" @change="onSelect" />
              </div>
              <br>
              <div>
              
                <v-icon @click="sub" >
                                    mdi-comment-plus
                                </v-icon>
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
    suspects: Array,
    crimeId: String,
  },
  created() {
    console.log("passed suspects", this.suspects);
  },
  data: function () {
    return {
      file: undefined,
      name: undefined,
    };
  },
  methods: {
    sub() {
      let suspect = {
        name: this.name,
        crimeId: this.crimeId,
      };
      if (this.file) {
        const formData = new FormData();
        formData.append("image", this.file);
        api
          .postPhoto(formData)
          .then((res) => {
            console.log(res, " things worked out great");
            // Here is the ideal place, to set the image property on criminals ?
            console.log(res);
            suspect.image = res.data.filename;
            api
              .postSuspect(suspect)
              .then((r) => {
                // emit, breytingar eða state ? til að koma nýja suspect á listan
                console.log("added suspect", r);
                this.$emit("add-suspect", r.data.data);
              })
              .catch((error, info) => console.log(error, info));
          })
          .catch((error) =>
            console.log("things did not work out so great", error)
          );
      }
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    delSuspect(suspect, index) {
      api.delSuspect(suspect._id).then((res) => {
        this.suspects.splice(index, 1);
        if (this.suspect._id == suspect.id) {
          this.suspect = {};
        }
        console.log("Works" + index, res);
      });
    },
  },
};
</script>

<style>
.suspect {
  background: yellow;
  color: black;
}

.suspects {
  background: yellow;
  color: black;
}
</style>