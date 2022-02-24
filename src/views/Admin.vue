<template>
<div>
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
                  <h2 class="float">{{ }} <img src="https://media.cdn.lexipol.com/article-images/funny_cop_420.jpg?w=300&format=jpg&quality=87&crop=0%2C0%2C420%2C370" alt="faook"
        width="80" height="80"></h2>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="service" class="about top_layer">
    <div class="titlepage">
      <div class="container">
        <h3>Admin console</h3>
        <p>
            An administrator is a person who ensures that an organization operates efficiently. Their specific duties depend on the type of company, organization, or entity where they work. Above all, administrators need to be highly organized and have good communication skills.

        </p>
        <div class="aboutpic"> 
           <img src="https://static9.depositphotos.com/1034895/1134/i/950/depositphotos_11344236-stock-photo-login-box.jpg" alt="lethal"
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
      <br>
      <v-row>
          <v-col class="yellow">
              <v-card class="yellow">
              <v-card-title class="black white--text">
                  <h1>Police officers</h1>
              </v-card-title>
              <v-card-text>
                <v-simple-table class="yellow">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Badge Id
                        </th>
                        <th class="text-left">
                            Email
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in users"
                        :key="item._id"
                        >
                        <td >{{ item.name }}</td>
                        <td>{{ item.badgeId }}</td>
                        <td>{{ item.email }}  </td>
                         <v-icon @click="setSelectedUser(item)"
                                  >mdi-file-find</v-icon
                                >
 <v-icon @click="delUser(item._id, index)"
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
            
            <v-col cols="4" v-if="registerUser" >
                <v-card class="yellow">
                    <v-card-title class="black white--text">
                        Register User
                    </v-card-title>
                    <v-card-text>
                        <v-text-field type="text" v-model="user.name" placeholder="Name"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="user.badgeId" placeholder="BadgeId"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="user.email" placeholder="email"> </v-text-field>
                        <br>
                        <v-text-field type="number" v-model="user.phone" placeholder="Phone number"> </v-text-field>
                        <br>
                        <v-text-field type="text" v-model="user.password" placeholder="Password"> </v-text-field>
                  
              
                  <div>
                <label>Select your picture:</label>
                <input type="file" name="image" ref="file" @change="onSelect" />
              </div>
                        <br>
                        
                      
                        <v-icon @click="postUser(user)" v-if="!editMode"
                          >mdi-account-plus</v-icon
                        >
                        <v-icon @click="putUser(user)" v-if="editMode"
                          >mdi-clipboard-edit</v-icon
                        >
                         <v-icon
                          @click="
                            user = {};
                            editMode = false;
                          "
                          >mdi-autorenew</v-icon
                        >
                        <v-icon @click="registerCrime = false">mdi-close-circle</v-icon>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="2" v-else>
                <v-btn @click="registerUser = true">Register User</v-btn>
            </v-col>
      </v-row>
  </v-container>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
    <!-- /#wrapper -->
    </div>
</template>

<script>
import api from '../data/api'

export default {
    created() {
        this.getUsers()
        
    console.log("passed users", this.users);

    },
  
    data: function () {
        return{
           

            user: {},
            users: [],
            registerUser: false,

        }
    },
    methods: {
  delUser(id, index) {
      api
        .delUser(id)
        .then((res) => {
          console.log("did it work?", res);
          this.users.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
        setSelectedUser(user) {
            //this.$store.commit('SET_SELECTED_CRIME', crime)
            this.$router.push({path:`Officerinfo/${user._id}`})
        },
         getUsers() {
            api.getUsers().then(res => {
                console.log('HTTP GET REQ ALL ', res)
                this.users = res.data.data
              

            })
            
        },
        postUser(user) {
            
            user.projectId = 'arim-2021'
            console.log(user)
            api.postUser(user).then(res => {
                this.user.push(res.data.data)
                console.log(res)
                this.user = {}
                this.registerUser = false
                
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
            user.image = res.data.filename;
            api
              .postUser(user)
              .then((r) => {
                // emit, breytingar eða state ? til að koma nýja suspect á listan
                console.log("added user", r);
                this.$emit("add-user", r.data.data);
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
    setEdit(item) {
      this.user = item;
      this.editMode = true;
    },
    
   
    }
}
</script>

<style>

</style>