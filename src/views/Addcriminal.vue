<template>
  <div>
    <!-- Sidebar -->
     <header>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo"><img src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.18172-8/12291824_988387264558155_1243154605543586984_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hasW1Bl5cE0AX8ag45Y&_nc_ht=scontent.frkv2-1.fna&oh=24bc6de799b0dbda31b22e875d3fe23f&oe=60D9DA84" alt="faook" width="80" height="80"> LÖKE</div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <div class="menu-area">
                <div class="limit-box">
                  <h2 class="float">{{ user.name }} <img src="https://media.cdn.lexipol.com/article-images/funny_cop_420.jpg?w=300&format=jpg&quality=87&crop=0%2C0%2C420%2C370" alt="faook"
        width="80" height="80"></h2>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- /#sidebar-wrapper -->
<div id="service" class="about top_layer">
    <div class="titlepage">
      <div class="container">
        <h3>Criminal database</h3>
        <p>
       A criminal is someone who breaks the law. If you're a murderer, thief, or tax cheat, you're a criminal.

When you think of criminals, your first thought might be of someone awful like a murderer. But this word is a lot broader — Anyone who breaks the law is technically a criminal, even if the crime is just not paying a speeding ticket. You can also talk about criminal activities: things that are illegal. 
                   </p>
        <div class="aboutpic"> 
           <img src="https://static.toiimg.com/thumb/msid-67521581,imgsize-531640,width-800,height-600,resizemode-75/67521581.jpg" alt="lethal"
        width="700" height="500">
        </div>
      </div>
    </div>
    </div>
    <div id="wrapper">
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <v-container fluid>
              <br />
              <v-row>
                <v-col>
                  <v-card class="yellow">
                    <v-card-title class="black white--text">
                      <h1>Criminals</h1>
                    </v-card-title>
                    <v-card-text>
                      <v-simple-table class="yellow">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left">Name</th>
                              <th class="text-left">Address</th>
                              <th class="text-left">age</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in criminals" :key="item._id">
                              <td>
                                {{ item.name }}
                              </td>
                              <td>{{ item.address }}</td>
                              <td>{{ item.age }}</td>
                              
                              <v-icon @click="setSelectedCriminal(item)"
                                  >mdi-file-find</v-icon
                                >
                                <v-icon @click="remove(item._id, index)"
                                  > mdi-delete </v-icon>
                                
                                <v-icon @click="setEdit(item)">
                                  mdi-file-edit-outline
                                </v-icon>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card-text>
                  </v-card>
                </v-col>
                <!--<v-col>
               <ul>
                  <li v-for="c in crimes" :key="c.key">
                      old method <router-link :to="`crime/${c._id}`" > {{c._id}} </router-link> - {{c.name}} 
                      <span @click="setSelectedCrime(c)">{{c._id}}</span> - {{c.name}}
                  </li>
              </ul>
            </v-col>-->
                <v-col cols="4" v-if="registerCriminal">
                  <v-card class="yellow">
                    <v-card-title class="black white--text">
                      Register Criminal
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        type="text"
                        v-model="criminal.name"
                        placeholder="Name of Criminal"
                      >
                      </v-text-field>
                      <br />
                      <v-text-field
                        type="text"
                        v-model="criminal.address"
                        placeholder="Address"
                      >
                      </v-text-field>
                      <br />
                      <v-text-field
                        type="number"
                        v-model="criminal.age"
                        placeholder="Age"
                      >
                      </v-text-field>
                      <br />
                      <v-text-field
                        type="number"
                        v-model="criminal.phone"
                        placeholder="Phone number"
                      >
                      </v-text-field>
                      <br />
                        <input type="checkbox" id="false" value="false" v-model="criminal.hasBeenToPrison" >
<label for="false">please check the box if the criminal has been to prison</label>
                      <br />
                      <v-text-field
                        type="text"
                        v-model="criminal.note"
                        placeholder="Short description"
                      >
                      </v-text-field>
                      <br />
                      
                      <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            List of criminals
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="item in criminals"
                            :key="item._id"
                          >
                            <v-list-item-title>{{
                              item.name
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                      <br />
                      <br>
                       <div>
                <label>Select your picture:</label>
                <input type="file" name="image" ref="file" @change="onSelect" />
              </div>
              <br>
                      
                        <v-icon @click="postCriiminal(criminal)" v-if="!editMode"
                          >mdi-add-plus</v-icon
                        >
                       
                        <v-icon @click="putCriminal(criiminal)" v-if="editMode"
                          >mdi-clipboard-edit</v-icon
                        >
                        <v-icon
                          @click="
                            criminal = {};
                            editMode = false;
                          "
                          >mdi-autorenew</v-icon
                        >
                         <v-icon @click="registerCriminal = false">mdi-close-circle</v-icon>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="2" v-else>
                  <v-btn @click="registerCriminal = true">Register crime</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </div>
    <!-- /#page-content-wrapper -->
    </div>
  </div>
</template>

<script>
import api from "../data/api";

export default {
  created() {
    this.getCriminals();
  },

  data: function () {
    return {
      criminal: {},
      criminals: [],
      registerCriminal: false,
      editMode: false,
    };
  },
  methods: {
   remove(id, index) {
      api
        .delCriminal(id)
        .then((res) => {
          console.log("Action success mabey show alert?", res);
          this.criminals.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setSelectedCriminal(criminal) {
      //this.$store.commit('SET_SELECTED_CRIME', crime)
      this.$router.push({ path: `Criminal/${criminal._id}` });
    },
    getCriminals() {
      api.getCriminals().then((res) => {
        console.log("HTTP GET REQ ALL CRIMINALS", res);
        this.criminals = res.data.data;
      });
    },
    postCriminal(criminal) {
      criminal.projectId = "arim-2021";
      console.log(criminal);
      api.postCriminal(criminal).then((res) => {
        this.criminals.push(res.data.data);
        console.log(res);
        this.criminal = {};
        this.registerCriminal = false;
                
            })
           if (this.file) {
        const formData = new FormData();
        formData.append("image", this.file);
        api
          .postPhoto(formData)
          .then((res) => {
            console.log(res, " things worked out great");
            // Here is the ideal place, to set the image property on criminals ?
            console.log(res);
            criminal.image = res.data.filename;
            api
              .postCriminal(criminal)
              .then((r) => {
                // emit, breytingar eða state ? til að koma nýja suspect á listan
                console.log("added criminal", r);
                this.$emit("add- criminal", r.data.data);
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
   
    putCriminal(criminal) {
            api.putCriminal(criminal).then(res => {
                console.log(res)
                this.criminal = {};
            }).catch(error => console.log(error))
        },
  
  setEdit(item) {
      this.criminal = item;
      this.editMode = true;
    },
    },
   computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style>

</style>