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
                  <h2 class="float">{{ user.name }} <img src="https://media.cdn.lexipol.com/article-images/funny_cop_420.jpg?w=300&format=jpg&quality=87&crop=0%2C0%2C420%2C370" alt="faook"
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
        <h3>Officers of LÖKE</h3>
        <p>
            An officer is a person who has a position of authority in a hierarchical organization. The term derives from Old French oficier "officer, official" (early 14c., Modern French officier), from Medieval Latin officiarius "an officer," from Latin officium "a service, a duty" the late Latin from officiarius, meaning "official."
        </p>
        <div class="aboutpic"> 
           <img src="https://images.metadata.sky.com/pd-image/1fb6ef74-bf14-4018-b1ea-174cf7e31cf5/16-9" alt="lethal"
        width="700" height="500">
        </div>
      </div>
    </div>
    </div>
<div id="wrapper">

        <!-- Sidebar -->
     
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                  <div v-if="user">
    <v-container>
      <v-row>
          <v-col>
              <v-card class="margin yellow">
                  <v-card-title class="white--text black">
                     Upplýsingar um starfsmann
                  </v-card-title>
                  <v-card-text>
                     <ul class="ul">
                         <li>Name: {{user.name}}</li>
                         <li>Address: {{user.badgeId}}</li>
                         <li>Email: {{user.email}}</li>
                         <li>Phonenumber: {{user.phone}}</li>
                         <li>Officers password: {{user.password}}</li>
                         <img
                  :src="`http://159.65.88.14/images/${user.image}`"
                  style="max-height: 150px"
                  alt=""
                />
                        
                          
                         
                     </ul>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
    </v-container>
</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
</div>
    <!-- /#wrapper -->
</template>

<script>

import api from '../data/api'
export default {
    
    created() {
       
        this.userId = this.$route.params.id;
        this.getUserInfo()    
    },
    computed: {
        
    },
    data: function() {
        return {
            userId: undefined,
           
            user: undefined,

        }
    },
    methods: {
        getUserInfo() {
            api.getUserById(this.userId).then(res => {
                this.user = res.data.data;
                this.$store.commit('SET_SELECTED_USER', res.data.data);
            })
        },
   
       
    }
}
</script>

<style>
 body {
    overflow-x: hidden;
 }



#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled {
    padding-left: 250px;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
    width: 250px;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
}

/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255,255,255,0.2);
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

@media(min-width:768px) {
    #wrapper {
        padding-left: 250px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 250px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
    h1{
        text-decoration: underline;
    }
}
</style>