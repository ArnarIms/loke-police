
<template>
<div class="black">
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs10 sm1 md5>
        <v-form>
          <v-card class="yellow" width="800px" position="center">
            <v-toolbar class="black white--text">
              <v-toolbar-title>
                 <img
                      src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.18172-8/12291824_988387264558155_1243154605543586984_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=hasW1Bl5cE0AX8ag45Y&_nc_ht=scontent.frkv2-1.fna&oh=24bc6de799b0dbda31b22e875d3fe23f&oe=60D9DA84"
                      alt="faook"
                      width="80"
                      height="80"
                      />
                      Welcome to Löke crimedatabase </v-toolbar-title>
              <h2 v-if="error"> Error, no such user or password</h2>
            </v-toolbar>
           
            <v-card-text>
              <v-text-field v-model="name" name="login" label="Login" type="text"></v-text-field>

              <v-text-field v-model="password" name="password" label="Password" type="password"></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
            
              <v-spacer></v-spacer>
              <v-btn round color="primary" dark @click="login">
                Login
              
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: undefined,
            password: undefined,
            error: false,
        }
    },
    methods: {
        login() {
            // Venjulega myndum við gera hér http req, þar sem við sendum inn notanda nafn og fáum til
            // baka einhvern object sem við checkum hvort að passwordið sé ekki rétt.
            if(this.password === this.$store.getters.userList.password) {
                this.$store.commit('SET_USER', {name: this.name})
                this.$router.push('/About')
           if(this.$store.getters.userList.password == "admin"){
              this.$store.commit("SET_AUTHENTICATION", true);
            }
            }else {
                this.error = true
                this.name = undefined
                this.password = undefined
            }
           

        }
    }
}
</script>

<style>
.kort{
  align-content: center;
}
</style>