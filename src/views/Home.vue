<template>
  <div>
    <Login v-if="user == undefined" />
    <Crimes v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Crimes from '../components/crimes/Crimes.vue'
import Login from '../components/login/Login.vue'

export default {
  name: 'Home',
  components: {
    Crimes,
    Login,
  },
  created() {
    console.log('user: ', this.user)
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
}
    
</script>
