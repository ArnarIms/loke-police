<template>
  <div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                       LÖK!
                    </a>
                </li>
                <li>
                    <v-btn round color="primary" dark @click="home()" >Home</v-btn>
                </li>
                <li>
                    <v-btn round color="primary" dark @click="crimi()" >Criminal database</v-btn>
                </li>
                <li>
                    <v-btn round color="primary" dark @click="crim()" >Crime database</v-btn>
                </li>
                <li>
                     <v-btn round color="primary" dark @click="tasks()" >Task database</v-btn>
                </li>
                <li>
                   <v-btn round color="primary" dark @click="admin()" >Admin</v-btn>
                </li>
                <li>
                    <v-btn round color="primary" dark @click="logOut()" >Logout</v-btn>
                </li>
                
            </ul>
        
        </div>
        <!-- /#sidebar-wrapper -->
<header><h2 class=".float-right">{{user.name}}</h2></header>
        <!-- Page Content -->
        </div>
</template>

<script>

export default {

  methods:{
 crimi(){
    this.$router.push('/Addcriminal')
  },
  crim(){
    this.$router.push('/Addcrime')
  },
  tasks(){
    this.$router.push('/Tasks')
  },
   admin(){
    this.$router.push('/Admin')
  },
   home(){
    this.$router.push('/About')
  },
  criminalList(){
    this.$router.push('/Addcriminal')
  },
},
computed: {
    user() {
      return this.$store.getters.user;
    }
}
}
</script>

<style>

</style>