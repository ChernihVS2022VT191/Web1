<template >
  <div class ="login-page">
    <LoginBlock/>
    <Scroll v-bind:images="images" v-bind:msg="text"/>
  </div>
</template>

<script>
import LoginBlock from "@/components/Login/LoginBlock";
import Scroll from "@/components/Scroll/Scroll";
export default {
  name: "LoginView",
  components: {
    LoginBlock,
    Scroll
  },
  data(){
    return{text: "В нашем комплексе работают люди всех специальностей. Область исследований простирается от молекулярной" +
          " физики и биологии до полётов в космос.",
      images:[
        "https://us.v-cdn.net/5021068/uploads/editor/73/q60evhb2fudv.jpg",
        "https://cdn.shazoo.ru/113080_gsjJLnqNhS_r8tnoiv.png",
        "https://indie-torrent.ru/_ld/7/34662481.jpg",
        "https://cdnb.artstation.com/p/assets/images/images/012/661/117/medium/silvertm-fin16.jpg?1535901856"
      ]}
  }
}
</script>
<style>
.login-page {background: url('https://cdna.artstation.com/p/assets/images/images/012/661/158/medium/silvertm-fin45.jpg?1535901877');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-clip: content-box;
  background-size: cover;
  z-index: -1;
}
</style>