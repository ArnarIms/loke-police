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
    </div>
</template>

<script>
export default {
 computed: {
    user() {
      return this.$store.getters.user;
    },
  },
}
</script>

<style>
.header {
  background: rgb(3, 3, 4);
  padding: 40px 0px;
  padding-bottom: 35px;
  width: 100%;
}
img {
  border-radius: 50%;
  margin: 0px 20px;
  margin-top: 30px;
 
}

.banner-main {
  position: relative;
  
}
.logo {
  font-size: 50px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  line-height: 40px;
 
}
</style>