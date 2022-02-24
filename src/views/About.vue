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
        <h3>About the police</h3>
        <p>
            The police are a constituted body of persons empowered by a state, with the aim to enforce the law, to ensure the safety, health and possessions of citizens, and to prevent crime and civil disorder. Their lawful powers include arrest and the use of force legitimized by the state via the monopoly on violence. The term is most commonly associated with the police forces of a sovereign state that are authorized to exercise the police power of that state within a defined legal or territorial area of responsibility. Police forces are often defined as being separate from the military and other organizations involved in the defense of the state against foreign aggressors; however, gendarmerie are military units charged with civil policing. Police forces are usually public sector services, funded through taxes.

Law enforcement is only part of policing activity. Policing has included an array of activities in different situations, but the predominant ones are concerned with the preservation of order. In some societies, in the late 18th and early 19th centuries, these developed within the context of maintaining the class system and the protection of private property. Police forces have become ubiquitous in modern societies. Nevertheless, their role can be controversial, as they may be involved to varying degrees in corruption, brutality and the enforcement of authoritarian rule.

A police force may also be referred to as a police department, police service, constabulary, gendarmerie, crime prevention, protective services, law enforcement agency, civil guard, or civic guard. Members may be referred to as police officers, troopers, sheriffs, constables, rangers, peace officers or civic/civil guards. Ireland differs from other English-speaking countries by using the Irish language terms Garda (singular) and Gardaí (plural), for both the national police force and its members. The word police is the most universal and similar terms can be seen in many non-English speaking countries.

Numerous slang terms exist for the police. Many slang terms for police officers are decades or centuries old with lost etymologies. One of the oldest, cop, has largely lost its slang connotations and become a common colloquial term used both by the public and police officers to refer to their profession.
        </p>
        <div class="aboutpic"> 
           <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/23/1497018472-lethal-weapon-4.jpg?resize=480:*" alt="lethal"
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
                  <v-container  fluid >
      <br>
      
  
              <v-card class="yellow">
              <v-card-title class="black white--text">
                  <h1>Tasks</h1>
              </v-card-title>
              <v-card-text>
                <v-simple-table class="yellow">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Task
                        </th>
                        <th class="text-left">
                            Officer assigned
                        </th>
                        <th class="text-left">
                            status of the case
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item) in tasks"
                        :key="item._id"
                        >
                        <td>{{ item.task }}</td>
                        <td>{{ item.assigned }}</td>
                        <td v-if="item.status == false">the task is done</td>
                        <td v-else>The task is incomplete</td>
                        
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
              </v-card-text>
          </v-card>
         
           
           
      
  </v-container>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->
<div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                  <v-container fluid>
      <br>
      <v-row>
          <v-col>
              <v-card class="yellow">
              <v-card-title class="black white--text">
                  <h1>Crimes</h1>
              </v-card-title>
              <v-card-text>
                <v-simple-table class="yellow">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            name of crime
                        </th>
                        <th class="text-left">
                            type of crime
                        </th>
                        <th class="text-left">
                           Date
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item) in crimes"
                        :key="item._id"
                        >
                        <td>{{ item.name }}</td>
                        <td>{{ item.crimeType }}</td>
                        <td>{{item.date | formatYear}}</td>
                        
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
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
    <!-- about  -->
    <div id="service" class="about top_layer">
      <v-container fluid>
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage">
              <h2>Add a crime or criminal</h2>
              
              <div class="buttons">
                <v-col cols="md-6" v-if="registerCrime">
                  <v-card class="card" >
                    <v-card-title class="red white--text">
                      Register Crime
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        type="text"
                        v-model="crime.name"
                        placeholder="Name of Crime"
                      >
                      </v-text-field>
                      <br />
                      <v-text-field
                        type="text"
                        v-model="crime.address"
                        placeholder="Address"
                      >
                      </v-text-field>
                      <br />
                      <v-text-field
                        type="text"
                        v-model="crime.crimeType"
                        placeholder="Type of crime"
                      >
                      </v-text-field>
                      <br />
                      <input type="date" v-model="crime.date" />
                      <br />
                      <v-text-field
                        type="number"
                        v-model="crime.severeness"
                        max="10"
                        min="1"
                        placeholder="What is the severness of the crime"
                      >
                      </v-text-field>
                      <br />
                      <v-text-field
                        type="text"
                        v-model="crime.shortDesc"
                        placeholder="Short description"
                      >
                      </v-text-field>
                      <br />
                      <v-btn @click="postCrime(crime)">Add</v-btn>
                      <v-btn @click="closeCrime()">close</v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
                <div v-else>
                  <v-btn @click="registerCrime = true">Register crime</v-btn>
                </div>
                <v-col cols="md-6" v-if="registerCriminal">
                  <v-card class="prufa">
                    <v-card-title class="red white--text">
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
                      <v-checkbox
                        v-model="criminal.hasBeenToPrison"
                        placeholder="Prison"
                      >
                      </v-checkbox>
                      <br />
                      <v-text-field
                        type="text"
                        v-model="criminal.note"
                        placeholder="Short description"
                      >
                      </v-text-field>
                      <br />
                      <v-btn @click="postCriminal(criminal)">Add</v-btn>
                      <v-btn @click="closeCriminal()">close</v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" v-else>
                  <v-btn @click="registerCriminal = true"
                    >Register criminal</v-btn
                  >
                </v-col>
              </div>
              <div>
              <img src="https://compote.slate.com/images/2424ce42-8232-4b1f-b3d5-61353a13f059.jpg?width=840" alt="lethal" width="700" height="500">
            </div>
            </div>
            
          </div>
        </div>
      </v-container>
    </div>
<footer class="black">
    <div class="container black">
      <div class="black">
    <div class="shit">
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-12 thumb">
          <div class="box">
            <v-btn round color="primary" dark @click="crimi()"
              >Criminal database</v-btn
            >
          </div>
        </div>
        
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-12 thumb">
          <div class="service-box">
            <v-btn round color="primary" dark @click="crim()"
              >Crime database</v-btn
            >
          </div>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-12 thumb">
          <div class="service-box">
            <v-btn round color="primary" dark @click="admin()">Admin Control</v-btn>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
          <div class="service-box">
            <v-btn round color="primary" dark @click="reporter()"
              >Reports and tasks</v-btn
            >
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </footer>
  </div>
</template>

<script>
import api from "../data/api";
export default {
  created() {
    this.getCrimes();
    this.getTasks();
  },
  data: function () {
    return {
      crime: {},
      crimes: [],
      registerCrime: false,
      criminal: {},
      criminals: [],
      registerCriminal: false,
      task: {},
      tasks: [],
    };
  },
  methods: {
    crimi() {
      this.$router.push("/Addcriminal");
    },
    crim() {
      this.$router.push("/Addcrime");
    },
  
    admin() {
      this.$router.push("/Admin");
    },
    home() {
      this.$router.push("/About");
    },
    reporter() {
      this.$router.push("/reporter");
    },
    criminalList() {
      this.$router.push("/Addcriminal");
    },
     getTasks() {
            api.getTasks().then(res => {
                console.log('HTTP GET REQ ALL TASKS', res)
                this.tasks = res.data.data
            });
        },
    getCrimes() {
      api.getCrimes().then((res) => {
        console.log("HTTP GET REQ ALL CRIMES", res);
        this.crimes = res.data.data;
      });
    },
    logOut() {
      this.$router.push("/Home");
    },

    postCrime(crime) {
      crime.caseStatus = false;
      crime.projectId = "arim-2021";
      console.log(crime);
      api.postCrime(crime).then((res) => {
        this.crimes.push(res.data.data);
        console.log(res);
        this.crime = {};
        this.registerCrime = false;
      });
    },
    setSelectedCrime(crime) {
      //this.$store.commit('SET_SELECTED_CRIME', crime)
      this.$router.push({ path: `crime/${crime._id}` });
    },
    closeCrime() {
      this.registerCrime = false;
    },
    closeCriminal() {
      this.registerCriminal = false;
    },
    setSelectedCriminal(criminal) {
      //this.$store.commit('SET_SELECTED_CRIME', crime)
      this.$router.push({ path: `Criminal/${criminal._id}` });
    },

    postCriminal(criminal) {
      criminal.projectId = "arim-2021";
      console.log(criminal);
      api.postCriminal(criminal).then((res) => {
        this.criminal.push(res.data.data);
        console.log(res);
        this.criminal = {};
        this.registerCriminal = false;
      });
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
.header {
  background: rgb(3, 3, 4);
  padding: 40px 0px;
  padding-bottom: 35px;
}
#wrapper {
  background: black;
}

.logo {
  font-size: 50px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  line-height: 40px;
}
.shit{
  margin-left: 400px;
  margin-bottom: 100px;
  margin-top: 100px;

}

.float{
  text-align: end;
  color: white;
  
}

img {
  border-radius: 50%;
  margin: 0px 20px;
  
 
}
.ble{
  background: black;
}

.banner-main {
  position: relative;
}

.about {
  padding-top: 90px;
  padding-bottom: 90px;
  background: #f4f4f4;
  
}

.about .titlepage {
  text-align: center;
  align-items: center;
  padding-bottom: 0px;
}

.about .titlepage h3 {
  padding: 0px 0px 6px 0px;
  font-size: 40px;
  font-weight: bold;
  color: #050303;
  line-height: 46px;
  border-bottom: #0fc690 solid 1px;
  width: 410px;
  margin: 0 auto;
  margin-bottom: 0px;
  margin-bottom: 20px;
}
.about .titlepage h2 {
  padding: 0px 0px 6px 0px;
  font-size: 40px;
  font-weight: bold;
  color: #050303;
  line-height: 46px;
  border-bottom: #0fc690 solid 1px;
  width: 410px;
  margin: 0 auto;
  margin-bottom: 0px;
  margin-bottom: 20px;
}
p{
  font-size: 25px;
}
.about .titlepage span {
  font-size: 25px;
  line-height: 30px;
}
.button {
  text-align: center;
}

.service {
  padding-top: 90px;
  padding-bottom: 60px;
  background: black;
}
.box .btn{
  font-size: 10px;
  
	
}


</style>
 
